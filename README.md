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

## Firebase

The Firebase web config for project `mentalmaxxing-ff432` is committed in `.env`. These values only identify the project and are meant to be public. Student data is protected by `firestore.rules`, not by hiding the config. Without a config the app still works offline from `localStorage`.

One-time setup in the [Firebase console](https://console.firebase.google.com/project/mentalmaxxing-ff432/overview):

1. **Authentication > Sign-in method:** enable **Email/Password**. Under **Settings > Authorized domains** add `lawrencel212.github.io`.
2. **Firestore Database:** create the database, then publish the rules in `firestore.rules` (Rules tab > Publish). They let each student read and write only their own `users/{uid}` document.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which tests, builds and publishes to GitHub Pages. Turn it on once under **Settings > Pages > Source: GitHub Actions**.

## Where things are

Every folder has a `CLAUDE.md` that maps its files. Start at [CLAUDE.md](CLAUDE.md).
