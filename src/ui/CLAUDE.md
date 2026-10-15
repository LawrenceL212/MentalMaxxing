# src/ui/
- `theme.css` Tailwind import + CSS variables for the three themes (`[data-theme]`), fixed mission and rating colours, fonts, focus ring, reduced motion.
- `Layout.tsx` page shell with bottom nav (Home / Progress / Settings); applies the saved theme to `<html data-theme>`. The Session screen is reached from Home and has its own Exit link.
