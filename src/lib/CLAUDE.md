# src/lib/ logic and services (no JSX except hooks)
- `missions.ts` `todayPlan(state)`, `pickMission`, `dueCards`, `allCards`, `daysUntilExam`. The only place that decides what to study.
- `streak.ts` active days, streak, reviews per day.
- `srs/` spaced repetition · `store/` app state · `firebase/` auth + sync · `fx/` sound, haptics, confetti. Each has its own CLAUDE.md.
