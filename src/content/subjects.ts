export interface Resource {
  label: string
  url: string
}

export interface Subject {
  id: string
  name: string
  board: 'AQA' | 'Edexcel' | 'OCR' | 'Eduqas'
  code: string
  kind: 'core' | 'option'
  /** Subjects with no exam (portfolio only) are listed but get no review missions by default */
  portfolioOnly?: boolean
  color: string
  resources: Resource[]
}

const PMT: Resource = { label: 'Physics & Maths Tutor', url: 'https://www.physicsandmathstutor.com/' }
const SENECA: Resource = { label: 'Seneca', url: 'https://senecalearning.com/en-GB/' }
const SME: Resource = { label: 'Save My Exams', url: 'https://www.savemyexams.com/gcse/' }
const CORBETT: Resource = { label: 'Corbettmaths', url: 'https://corbettmaths.com/' }

// First four match the design mockup; the rest are spaced by the golden angle so neighbours stay distinct.
const FIXED: Record<string, string> = {
  bio: '#3ddc84',
  chem: '#ff6b5b',
  phys: '#8f8bff',
  maths: '#3fb6ff',
}
let hueIndex = 4
const colorFor = (id: string) => FIXED[id] ?? `hsl(${Math.round((hueIndex++ * 137.5) % 360)} 78% 62%)`

type Seed = Omit<Subject, 'color' | 'resources'> & { resources: Resource[] }

const seeds: Seed[] = [
  { id: 'maths', name: 'Mathematics', board: 'Edexcel', code: '1MA1', kind: 'core', resources: [PMT, CORBETT, SENECA, SME] },
  { id: 'bio', name: 'Biology', board: 'AQA', code: '8461', kind: 'core', resources: [PMT, SENECA, SME] },
  { id: 'chem', name: 'Chemistry', board: 'AQA', code: '8462', kind: 'core', resources: [PMT, SENECA, SME] },
  { id: 'phys', name: 'Physics', board: 'AQA', code: '8463', kind: 'core', resources: [PMT, SENECA, SME] },
  { id: 'eng-lang', name: 'English Language', board: 'AQA', code: '8700', kind: 'core', resources: [PMT, SENECA, SME] },
  { id: 'eng-lit', name: 'English Literature', board: 'AQA', code: '8702', kind: 'core', resources: [PMT, SENECA, SME] },
  { id: 'rs', name: 'Religious Studies (PRE)', board: 'Eduqas', code: 'C120P4', kind: 'core', resources: [SENECA, SME] },
  {
    id: 'geog',
    name: 'Geography',
    board: 'Edexcel',
    code: '1GB0',
    kind: 'option',
    resources: [
      { label: 'PMT past papers', url: 'https://www.physicsandmathstutor.com/past-papers/gcse-geography/' },
      { label: 'PMT revision', url: 'https://www.physicsandmathstutor.com/geography-revision/' },
      SENECA,
      SME,
    ],
  },
  { id: 'hist', name: 'History', board: 'Edexcel', code: '1HI0', kind: 'option', resources: [SENECA, SME] },
  { id: 'french', name: 'French', board: 'Edexcel', code: '1FR0', kind: 'option', resources: [SENECA, SME] },
  { id: 'german', name: 'German', board: 'Edexcel', code: '1GN0', kind: 'option', resources: [SENECA, SME] },
  { id: 'spanish', name: 'Spanish', board: 'Edexcel', code: '1SP0', kind: 'option', resources: [SENECA, SME] },
  { id: 'cs', name: 'Computer Science', board: 'OCR', code: 'J277', kind: 'option', resources: [PMT, SENECA, SME] },
  { id: 'business', name: 'Business Studies', board: 'AQA', code: '8132', kind: 'option', resources: [SENECA, SME] },
  { id: 'pe', name: 'Physical Education', board: 'AQA', code: '8582', kind: 'option', resources: [SENECA, SME] },
  { id: 'dt', name: 'Design and Technology', board: 'Edexcel', code: '1DT0', kind: 'option', resources: [SENECA, SME] },
  { id: 'food', name: 'Food Preparation and Nutrition', board: 'OCR', code: 'J309', kind: 'option', resources: [SENECA, SME] },
  { id: 'music', name: 'Music', board: 'Edexcel', code: '1MU0', kind: 'option', resources: [SENECA] },
  { id: 'art', name: 'Art, Craft and Design', board: 'AQA', code: '8201', kind: 'option', portfolioOnly: true, resources: [] },
  { id: 'graphics', name: 'Graphic Communication', board: 'AQA', code: '8203', kind: 'option', portfolioOnly: true, resources: [] },
]

export const SUBJECTS: Subject[] = seeds.map((s) => ({ ...s, color: colorFor(s.id) }))

export const subjectById = (id: string) => SUBJECTS.find((s) => s.id === id)
