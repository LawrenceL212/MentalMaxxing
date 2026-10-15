import { useEffect, useState } from 'react'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { getFirebase } from './index'
import { actions, getState, subscribe, type AppState } from '../store'

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
  if (remote && remote.updatedAt > local.updatedAt) {
    applyingRemote = true
    actions.replace(remote)
    applyingRemote = false
  } else {
    await setDoc(ref, local)
  }
}

function startSync() {
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
    if (user) void reconcile(user).catch(() => undefined)
  })
}

export function useAuth() {
  const fb = getFirebase()
  const [user, setUser] = useState<User | null>(fb?.auth.currentUser ?? null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!fb) return
    startSync()
    return onAuthStateChanged(fb.auth, setUser)
  }, [fb])

  return {
    available: Boolean(fb),
    user,
    error,
    signIn: async () => {
      if (!fb) return
      setError('')
      try {
        await signInWithPopup(fb.auth, new GoogleAuthProvider())
      } catch {
        setError('Sign-in did not finish. Try again.')
      }
    },
    signOut: () => (fb ? signOut(fb.auth) : Promise.resolve()),
  }
}
