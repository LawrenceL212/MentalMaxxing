# src/ui/
- `theme.css` Tailwind import, CSS variables for the three themes (`[data-theme]`), mission/rating colours, fonts, components (`.surface .field .chip .btn .label`), animations, page column `.wrap`, `.tabbar`.
- `Layout.tsx` header (logo, desktop nav: Home/Cards/Progress/Settings, streak, sound, help) + content column + phone tab bar. Content has bottom padding equal to the tab bar so nothing is hidden.
- `Icon.tsx` inline SVG icons by name. `Logo.tsx` brand mark. `Ring.tsx` animated progress ring.
