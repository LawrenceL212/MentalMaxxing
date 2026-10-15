/** Real paper formats for mock exams (board, length, marks). Subjects not listed use a custom paper the student sets up. */
export interface PaperFormat {
  name: string
  minutes: number
  marks: number
}

export const PAPERS: Record<string, PaperFormat[]> = {
  maths: [
    { name: 'Paper 1 (non-calculator)', minutes: 90, marks: 80 },
    { name: 'Paper 2 (calculator)', minutes: 90, marks: 80 },
    { name: 'Paper 3 (calculator)', minutes: 90, marks: 80 },
  ],
  bio: [
    { name: 'Paper 1 (topics 1 to 4)', minutes: 105, marks: 100 },
    { name: 'Paper 2 (topics 5 to 7)', minutes: 105, marks: 100 },
  ],
  chem: [
    { name: 'Paper 1 (topics 1 to 5)', minutes: 105, marks: 100 },
    { name: 'Paper 2 (topics 6 to 10)', minutes: 105, marks: 100 },
  ],
  phys: [
    { name: 'Paper 1 (topics 1 to 4)', minutes: 105, marks: 100 },
    { name: 'Paper 2 (topics 5 to 8)', minutes: 105, marks: 100 },
  ],
  cs: [
    { name: 'Paper 1: Computer systems', minutes: 90, marks: 80 },
    { name: 'Paper 2: Computational thinking', minutes: 90, marks: 80 },
  ],
}

/** Where to find the real papers and mark schemes. Verified from the PMT home page. */
export const PAPER_SITES: Record<string, string> = {
  maths: 'https://www.physicsandmathstutor.com/past-papers/gcse-maths/',
  bio: 'https://www.physicsandmathstutor.com/past-papers/gcse-biology/',
  chem: 'https://www.physicsandmathstutor.com/past-papers/gcse-chemistry/',
  phys: 'https://www.physicsandmathstutor.com/past-papers/gcse-physics/',
  cs: 'https://www.physicsandmathstutor.com/past-papers/gcse-computer-science/',
  geog: 'https://www.physicsandmathstutor.com/past-papers/gcse-geography/',
}
