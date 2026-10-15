# MentalMaxxing

GCSE study scheduler (Bournemouth School students). PWA: Vite + React + TypeScript + Tailwind, Firebase Auth/Firestore, GitHub Pages. Students answer on paper; the app picks what to study and records how it went. No AI in phase 1.

## Commands
`npm run dev` · `npm test` · `npm run typecheck` · `npm run build`. Tests must pass before pushing.

## Map: read the CLAUDE.md in a folder before opening its files
- `src/content/` static data: subjects, exam boards, revision links, sample cards
- `src/features/` one folder per screen or flow: auth, onboarding, home, session, run, progress, settings, help
- `src/lib/srs/` spaced-repetition maths (SM-2)
- `src/lib/store/` app state in localStorage
- `src/lib/firebase/` Firebase init, email/password sign-in (remember me), Firestore sync
- `src/lib/fx/` sounds, haptics, confetti (all respect the sound toggle / reduced motion)
- `src/lib/missions.ts` picks today's mission
- `src/ui/` theme tokens and the shared layout
- `firestore.rules`, `.github/workflows/deploy.yml`, `vite.config.ts` (PWA + base path)

## Keep the maps true
When you add, move, rename or delete a file, update that folder's CLAUDE.md in the same commit. Keep each map under about 40 lines: one line per file, entry points first.

## Product rules
- Zero decisions on open: the app picks the mission and says why. Flow: sign in (or guest) -> setup -> quick tour -> Home / Progress / Settings / Help. Session and mission runs are full-screen.
- Missions: Queue, Brain Dump, Shuffle, Prove It, Past paper. Within 14 days of an exam, favour past papers and weak topics.
- Rating: Again / Hard / Good / Easy, with confidence (1-5) chosen before the answer is revealed. Easy shows a "came back too soon" note.
- Subjects are data (`src/content/subjects.ts`). Never hard-code a subject elsewhere.
- Students can add their own resource links per subject.

## Design rules
- Default theme Arctic; Molten and Obsidian are options. Fonts: Bricolage Grotesque (display), Atkinson Hyperlegible (body), Geist Mono (numbers).
- Each mission and each subject has one fixed colour, and each screen has one large solid-colour landmark. It must still read when squinting.
- No grey text. Secondary text uses `--muted`, a bright tint of the theme. Contrast matters more than subtlety.
- Phone and PC are both first-class: tab bar on phones, top nav on 768px+.
- Never prefill credentials; "remember me" only keeps the session on the device.
- Respect `prefers-reduced-motion`. Side gutters use `env(safe-area-inset-*)`.
