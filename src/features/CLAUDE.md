# src/features/ one folder per screen, each exports a default component used by `App.tsx`
- `home/Home.tsx` today's mission block (colour by mission kind), exam countdowns. Uses `lib/missions.pickMission`.
- `session/Session.tsx` review flow: confidence 1-5, reveal, rate. Calls `actions.rate`. Snapshots the due queue on mount.
- `progress/Progress.tsx` retention headline, "Are you improving?", per-subject bars. `progress/stats.ts` weekly retention maths (tested).
- `settings/Settings.tsx` account (Google sign-in), theme, my subjects + exam dates, revision resources incl. student-added links.
