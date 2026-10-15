# src/lib/firebase/
- `index.ts` `getFirebase()` returns app/auth/db, or null when `VITE_FIREBASE_*` env vars are missing (app then runs offline-only). Firestore uses persistent local cache.
- `sync.ts` `useAuth()` hook (`submit` signs in or creates an account, `resetPassword`, `signOut`) and sync: one doc `users/{uid}` holds the whole `AppState`; newest `updatedAt` wins; local changes upload after 1.5s.
- Rules live in `/firestore.rules`. Database and email/password sign-in are switched on in the Firebase console (see README).
