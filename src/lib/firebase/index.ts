import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { initializeFirestore, persistentLocalCache, type Firestore } from 'firebase/firestore'

/**
 * Web config comes from VITE_FIREBASE_* variables (see .env.example). These identify the project
 * and are safe to ship; access is controlled by firestore.rules. Without them the app runs
 * fully offline from localStorage (src/lib/store).
 */
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

export const firebaseConfigured = Boolean(config.apiKey && config.projectId && config.appId)

let app: FirebaseApp | null = null
let auth: Auth | null = null
let db: Firestore | null = null

export function getFirebase(): { app: FirebaseApp; auth: Auth; db: Firestore } | null {
  if (!firebaseConfigured) return null
  app ??= initializeApp(config)
  auth ??= getAuth(app)
  // Offline persistence: reviews made without signal are queued and synced later.
  db ??= initializeFirestore(app, { localCache: persistentLocalCache() })
  return { app, auth, db }
}
