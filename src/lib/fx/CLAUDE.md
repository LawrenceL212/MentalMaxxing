# src/lib/fx/ feel: sounds, haptics, confetti (no asset files)
- `sound.ts` `sfx(name)` plays a Web Audio tone pattern and a haptic buzz. Names: tap, select, reveal, again, hard, good, easy, complete, error. Does nothing when `soundOn` is false. Browsers only allow audio after a tap, which every call site is.
- `confetti.ts` `confetti(origin?)` canvas burst, skipped under reduced motion.
Add a new sound by adding it to `Sfx`, `HAPTIC` and the `switch`.
