# src/
- `main.tsx` entry: mounts `<App />`, loads `ui/theme.css`
- `App.tsx` `Gate`: loading -> `Welcome` (sign in / guest) -> `Setup` -> `Tutorial` -> HashRouter routes (HashRouter because GitHub Pages is static). Sets `<html data-theme>`. Routes: `/`, `/cards`, `/progress`, `/settings`, `/help` inside `Layout`; `/session` and `/run/:kind` full-screen.
- `content/` data (subjects, cards, guide text) · `features/` screens · `lib/` logic and services · `ui/` shared components and theme
