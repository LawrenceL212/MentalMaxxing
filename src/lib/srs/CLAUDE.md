# src/lib/srs/
- `sm2.ts` simplified SM-2. `review(state, grade)` returns the new state, `dueInDays` and `tooSoon` (true for Easy). First steps fixed (Hard 1d, Good 4d, Easy 11d), then gap x ease. Again = 10 minutes. Ease floor 1.3.
- `sm2.test.ts` unit tests. Change the intervals here and update the tests and the numbers shown on the rating buttons.
