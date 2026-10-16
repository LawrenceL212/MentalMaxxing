# src/content/ static data (no logic)
- `subjects.ts` every school subject: id, name, exam board, spec code, core/option, colour, built-in resource links. `SUBJECTS`, `subjectById()`. Add a subject here and it appears everywhere.
- `lessons/` one original lesson per spec topic (key points, 4-8 steps, check questions) for the nine core subjects: `maths bio chem phys cs eng-lang eng-lit rs dt`. `index.ts` exports `LESSONS`; `types.ts` has the shape. Tested (every topic needs a lesson). Written for this app, never copied; tier labels (Higher, Biology/Chemistry/Physics only) follow the board specs.
- `notes.ts` key-point notes per topic (every topic needs notes or a lesson's key points; tested).
- `papers.ts` real paper formats (minutes, marks) and past-paper site links for mock exams.
- `topics.ts` spec topic headings per subject (maths, bio, chem, phys, cs, eng-lang, eng-lit, rs, dt). Each topic gets an automatic flashcard.
- `guide.ts` tutorial steps, FAQ, install tips, shortcuts.
- `cards.ts` `SAMPLE_CARDS` shown until students write their own. Cards belong to a `subjectId`.

Source of the boards and codes: the school's 2024 GCSE booklet. French/German/Spanish codes are marked draft there. Resource links are site homepages, not verified deep links.
