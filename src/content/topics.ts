/** Spec topic headings per subject. Each topic gets an automatic flashcard (see lib/flashcards.ts). Add a subject here and it gets decks. */
export const TOPICS: Record<string, string[]> = {
  maths: ['Number', 'Algebra', 'Ratio, proportion and rates of change', 'Geometry and measures', 'Probability', 'Statistics'],
  bio: ['4.1 Cell biology', '4.2 Organisation', '4.3 Infection and response', '4.4 Bioenergetics', '4.5 Homeostasis and response', '4.6 Inheritance, variation and evolution', '4.7 Ecology'],
  chem: ['4.1 Atomic structure and the periodic table', '4.2 Bonding, structure and properties of matter', '4.3 Quantitative chemistry', '4.4 Chemical changes', '4.5 Energy changes', '4.6 The rate and extent of chemical change', '4.7 Organic chemistry', '4.8 Chemical analysis', '4.9 Chemistry of the atmosphere', '4.10 Using resources'],
  phys: ['4.1 Energy', '4.2 Electricity', '4.3 Particle model of matter', '4.4 Atomic structure', '4.5 Forces', '4.6 Waves', '4.7 Magnetism and electromagnetism', '4.8 Space physics'],
  cs: ['1.1 Systems architecture', '1.2 Memory and storage', '1.3 Computer networks', '1.4 Network security', '1.5 Systems software', '1.6 Ethical, legal, cultural and environmental impacts', '2.1 Algorithms', '2.2 Programming fundamentals', '2.3 Producing robust programs', '2.4 Boolean logic', '2.5 Programming languages and IDEs'],
}
