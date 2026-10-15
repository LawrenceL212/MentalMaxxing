# src/lib/store/
- `index.ts` the whole app state (`AppState`) in localStorage under `mentalmaxxing:v1`. `useAppState()` hook, `getState()`, `orderedTopics()`, `subscribe()`, and `actions.*` (setTheme, toggleSubject, setExamDate, addResource, addCard, deleteCard, rate, replace, setTopicKnow, setTaught, setTopicOrder, coveredUpTo, setOrganiser, addCards, setSound, setTutorialSeen, finishSetup, logMission).
- Every action stamps `updatedAt`; `actions.replace` applies a remote copy without stamping. Sync picks the newer copy.
- Adding a field: add it to `AppState` and `DEFAULT_STATE` so older saved data still loads.
