/** Sample cards so the app is usable before students write their own. Marked `sample` in the UI. */
export interface Card {
  id: string
  subjectId: string
  topic: string
  front: string
  back: string
  sample?: boolean
}

export const SAMPLE_CARDS: Card[] = [
  { id: 's-chem-1', subjectId: 'chem', topic: '4.2 Bonding', sample: true,
    front: 'Why does graphite conduct electricity but diamond does not?',
    back: 'Each carbon in graphite bonds to 3 others, leaving one delocalised electron that moves between layers. In diamond all 4 outer electrons are in covalent bonds, so no electrons are free.' },
  { id: 's-bio-1', subjectId: 'bio', topic: '4.4 Bioenergetics', sample: true,
    front: 'Give the word equation for aerobic respiration.',
    back: 'glucose + oxygen → carbon dioxide + water (energy released, mostly in the mitochondria).' },
  { id: 's-phys-1', subjectId: 'phys', topic: '4.1 Energy', sample: true,
    front: 'Write the equation for kinetic energy and give the units of each term.',
    back: 'Ek = ½ m v². Ek in joules (J), m in kilograms (kg), v in metres per second (m/s).' },
  { id: 's-maths-1', subjectId: 'maths', topic: 'Algebra', sample: true,
    front: 'Solve x² − 5x + 6 = 0.',
    back: 'Factorise: (x − 2)(x − 3) = 0, so x = 2 or x = 3.' },
  { id: 's-bio-2', subjectId: 'bio', topic: '4.2 Organisation', sample: true,
    front: 'Name the three enzymes that digest carbohydrate, protein and fat.',
    back: 'Amylase (carbohydrate), protease (protein), lipase (fat).' },
  { id: 's-chem-2', subjectId: 'chem', topic: '4.1 Atomic structure', sample: true,
    front: 'What is the relative charge and mass of a neutron?',
    back: 'Charge 0, relative mass 1.' },
]
