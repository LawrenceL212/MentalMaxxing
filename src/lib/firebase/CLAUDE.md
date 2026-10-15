# src/lib/firebase/
- `index.ts` `getFirebase()` returns app/auth/db, or null when `VITE_FIREBASE_*` env vars are missing (app then runs offline-only). Firestore uses persistent local cache.
- `sync.ts` `useAuth()` hook (email/password sign-in/out) and sync: one doc `users/{uid}` holds the whole `AppState`; newest `updatedAt` wins; local changes upload after 1.5s.
- Rules live in `/firestore.rules`. Database and email/password sign-in are switched on in the Firebase console (see README).
