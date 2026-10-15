# MentalMaxxing

A study scheduler for GCSE students. It tells you what to revise, when, and how it went. You answer on paper (your exams are on paper) and use the app to decide what to study, rate how it went, and see whether you are improving.

Built on five ideas from learning science: retrieval over review, spaced repetition, mixing topics, explaining with the source closed, and building connected chunks.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173/MentalMaxxing/
npm test         # unit tests (spaced repetition, progress stats)
npm run build    # production build into dist/
```

Stack: Vite, React, TypeScript, Tailwind, Firebase (Auth + Firestore), installable as a PWA, hosted on GitHub Pages.

## Set up Firebase

The app works offline from `localStorage` without Firebase. To turn on sign-in and sync across devices:

1. In the [Firebase console](https://console.firebase.google.com/project/mentalmaxxing-ff432/overview) open **Project settings > General > Your apps** and add a **Web app**. Copy its config values.
2. Copy `.env.example` to `.env` and fill in `VITE_FIREBASE_API_KEY` and `VITE_FIREBASE_APP_ID` (the project ID and auth domain are already filled in).
3. **Authentication > Sign-in method:** enable **Email/Password**. Under **Settings > Authorized domains** add `lawrencel212.github.io`.
4. **Firestore Database:** this must be created in the console (Create database, production mode). Then publish the rules in `firestore.rules`, which let each student read and write only their own `users/{uid}` document.
5. For deployment, add the same four values as repository **variables** (Settings > Secrets and variables > Actions > Variables) named `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_APP_ID`. These identify the project and are safe to ship; the rules protect the data.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which tests, builds and publishes to GitHub Pages. Turn it on once under **Settings > Pages > Source: GitHub Actions**.

## Where things are

Every folder has a `CLAUDE.md` that maps its files. Start at [CLAUDE.md](CLAUDE.md).
