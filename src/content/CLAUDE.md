# src/content/ static data (no logic)
- `subjects.ts` every school subject: id, name, exam board, spec code, core/option, colour, built-in resource links. `SUBJECTS`, `subjectById()`. Add a subject here and it appears everywhere.
- `topics.ts` spec topic headings per subject (maths, bio, chem, phys, cs so far). Each topic gets an automatic flashcard.
- `guide.ts` tutorial steps, FAQ, install tips, shortcuts.
- `cards.ts` `SAMPLE_CARDS` shown until students write their own. Cards belong to a `subjectId`.

Source of the boards and codes: the school's 2024 GCSE booklet. French/German/Spanish codes are marked draft there. Resource links are site homepages, not verified deep links.
