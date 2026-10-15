# src/lib/ logic and services (no JSX except hooks)
- `missions.ts` `todayPlan(state)`, `pickMission`, `dueCards`, `allCards`, `daysUntilExam`. The only place that decides what to study.
- `fog.ts` recall model: `recall`, `fog`, `fogByTopic` (uses self-rating before reviews), `forecast`. Tested.
- `mock.ts` mark-entry maths: `totals`, `byTopic`, `levelFor`, `clock`. Tested.
- `flashcards.ts` `decksFor(state, subjectId)`: a deck per topic, with an automatic prompt card (`topicCard`) plus real cards. Tested.
- `streak.ts` active days, streak, reviews per day.
- `srs/` spaced repetition · `store/` app state · `firebase/` auth + sync · `fx/` sound, haptics, confetti. Each has its own CLAUDE.md.
