import { useEffect, useSyncExternalStore, useState } from 'react'
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { firebaseConfigured, getFirebase } from './index'
import { actions, getState, subscribe, type AppState } from '../store'

/**
 * loading: waiting to learn if someone is signed in. signedOut: show the sign-in screen.
 * syncing: signed in, fetching their saved data. ready: show the app.
 */
export type AuthStatus = 'loading' | 'signedOut' | 'syncing' | 'ready'

const GUEST_KEY = 'mentalmaxxing:guest'
const readGuest = () => {
  try {
    return localStorage.getItem(GUEST_KEY) === '1'
  } catch {
    return false
  }
}

let status: AuthStatus = firebaseConfigured ? 'loading' : 'ready'
let guest = readGuest()
const listeners = new Set<() => void>()
const emit = () => listeners.forEach((l) => l())
const setStatus = (s: AuthStatus) => {
  status = s
  emit()
}
const onChange = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}

export const useAuthStatus = (): AuthStatus => useSyncExternalStore(onChange, () => status)
export const useGuest = (): boolean => useSyncExternalStore(onChange, () => guest)

/** Use the app on this device without an account. Progress is not backed up. */
export function continueAsGuest() {
  guest = true
  try {
    localStorage.setItem(GUEST_KEY, '1')
  } catch {
    /* ignore */
  }
  emit()
}

let started = false
let applyingRemote = false

/** One document per signed-in student: users/{uid}. Newest updatedAt wins. */
async function reconcile(user: User) {
  const fb = getFirebase()
  if (!fb) return
  const ref = doc(fb.db, 'users', user.uid)
  const snap = await getDoc(ref)
  const remote = snap.exists() ? (snap.data() as AppState) : null
  const local = getState()
  if (remote && remote.updatedAt >= local.updatedAt) {
    applyingRemote = true
    actions.replace(remote)
    applyingRemote = false
  } else {
    await setDoc(ref, local)
  }
}

/** Call once at startup. Watches sign-in and keeps the cloud copy in step with this device. */
export function startSync() {
  const fb = getFirebase()
  if (!fb || started) return
  started = true

  let timer: ReturnType<typeof setTimeout> | undefined
  subscribe(() => {
    if (applyingRemote || !fb.auth.currentUser) return
    clearTimeout(timer)
    timer = setTimeout(() => {
      const user = fb.auth.currentUser
      if (user) void setDoc(doc(fb.db, 'users', user.uid), getState()).catch(() => undefined)
    }, 1500)
  })

  onAuthStateChanged(fb.auth, (user) => {
    if (!user) return setStatus('signedOut')
    setStatus('syncing')
    // Never leave the student on a spinner: offline or slow, fall through to local data.
    const timeout = new Promise<void>((resolve) => setTimeout(resolve, 6000))
    void Promise.race([reconcile(user).catch(() => undefined), timeout]).then(() => setStatus('ready'))
  })
}

/** Turn Firebase error codes into sentences a student can act on. */
function friendlyError(err: unknown): string {
  const code = typeof err === 'object' && err && 'code' in err ? String((err as { code: unknown }).code) : ''
  switch (code) {
    case 'auth/invalid-email':
      return 'That email address does not look right.'
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Email or password is wrong. If you are new, choose Create account.'
    case 'auth/email-already-in-use':
      return 'There is already an account with that email. Try signing in.'
    case 'auth/weak-password':
      return 'Choose a password with at least 6 characters.'
    case 'auth/too-many-requests':
      return 'Too many tries. Wait a few minutes and try again.'
    case 'auth/network-request-failed':
      return 'No connection. Check your internet and try again.'
    case 'auth/operation-not-allowed':
      return 'Email sign-in is not switched on for this project yet.'
    default:
      return 'Something went wrong. Try again.'
  }
}

export function useAuth() {
  const fb = getFirebase()
  const [user, setUser] = useState<User | null>(fb?.auth.currentUser ?? null)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    if (!fb) return
    return onAuthStateChanged(fb.auth, setUser)
  }, [fb])

  return {
    available: Boolean(fb),
    user,
    error,
    notice,
    /** Signs in, or creates the account when `create` is true. `remember` keeps the student signed in on this device. */
    submit: async (email: string, password: string, create: boolean, remember: boolean) => {
      if (!fb) return false
      setError('')
      setNotice('')
      try {
        await setPersistence(fb.auth, remember ? browserLocalPersistence : browserSessionPersistence)
        if (create) await createUserWithEmailAndPassword(fb.auth, email, password)
        else await signInWithEmailAndPassword(fb.auth, email, password)
        return true
      } catch (err) {
        setError(friendlyError(err))
        return false
      }
    },
    resetPassword: async (email: string) => {
      if (!fb) return
      setError('')
      setNotice('')
      try {
        await sendPasswordResetEmail(fb.auth, email)
        setNotice('If that email has an account, a reset link is on its way.')
      } catch (err) {
        setError(friendlyError(err))
      }
    },
    signOut: async () => {
      if (fb?.auth.currentUser) await signOut(fb.auth)
      guest = false
      try {
        localStorage.removeItem(GUEST_KEY)
      } catch {
        /* ignore */
      }
      emit()
    },
  }
}
