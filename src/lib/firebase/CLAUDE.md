# src/lib/firebase/
- `index.ts` `getFirebase()` returns app/auth/db, or null when `VITE_FIREBASE_*` env vars (committed in `/.env`) are missing (app then runs offline-only). Firestore uses persistent local cache.
- `sync.ts` auth status (`useAuthStatus`, `useGuest`, `continueAsGuest`) and `useAuth()` hook (`submit(email, password, create, remember)` picks local vs session persistence, `resetPassword`, `signOut`) and sync: one doc `users/{uid}` holds the whole `AppState`; newest `updatedAt` wins; local changes upload after 1.5s.
- Rules live in `/firestore.rules`. Database and email/password sign-in are switched on in the Firebase console (see README).
