/** Spec topic headings per subject. Each topic gets an automatic flashcard (see lib/flashcards.ts). Add a subject here and it gets decks. */
export const TOPICS: Record<string, string[]> = {
  maths: ['Number', 'Algebra', 'Ratio, proportion and rates of change', 'Geometry and measures', 'Probability', 'Statistics'],
  bio: ['4.1 Cell biology', '4.2 Organisation', '4.3 Infection and response', '4.4 Bioenergetics', '4.5 Homeostasis and response', '4.6 Inheritance, variation and evolution', '4.7 Ecology'],
  chem: ['4.1 Atomic structure and the periodic table', '4.2 Bonding, structure and properties of matter', '4.3 Quantitative chemistry', '4.4 Chemical changes', '4.5 Energy changes', '4.6 The rate and extent of chemical change', '4.7 Organic chemistry', '4.8 Chemical analysis', '4.9 Chemistry of the atmosphere', '4.10 Using resources'],
  phys: ['4.1 Energy', '4.2 Electricity', '4.3 Particle model of matter', '4.4 Atomic structure', '4.5 Forces', '4.6 Waves', '4.7 Magnetism and electromagnetism', '4.8 Space physics'],
  cs: ['1.1 Systems architecture', '1.2 Memory and storage', '1.3 Computer networks', '1.4 Network security', '1.5 Systems software', '1.6 Ethical, legal, cultural and environmental impacts', '2.1 Algorithms', '2.2 Programming fundamentals', '2.3 Producing robust programs', '2.4 Boolean logic', '2.5 Programming languages and IDEs'],
  // AQA 8700: the two papers split into reading and writing; spelling, punctuation and grammar are marked inside the writing tasks.
  'eng-lang': ['Paper 1: Reading fiction', 'Paper 1: Creative writing', 'Paper 2: Reading non-fiction', 'Paper 2: Writing to present a viewpoint', 'Spelling, punctuation and grammar'],
  // AQA 8702: Paper 1 Shakespeare and the 19th-century novel, Paper 2 modern texts and poetry. Which texts you study is set by your school.
  'eng-lit': ['Shakespeare', 'The 19th-century novel', 'Modern prose or drama', 'Poetry anthology', 'Unseen poetry'],
  // Eduqas C120P4 as set out on the school's RS page: Component 1 (four themes), Component 2 (Christianity), Component 3 (Islam).
  rs: ['Issues of relationships', 'Issues of life and death (with Humanism)', 'Issues of good and evil', 'Issues of human rights', 'Christianity: beliefs and teachings', 'Christianity: practices', 'Islam: beliefs and teachings', 'Islam: practices'],
  // Edexcel 1DT0: the three areas of the national D&T content that every board shares.
  dt: ['Core technical principles', 'Specialist technical principles', 'Designing and making principles'],
}
