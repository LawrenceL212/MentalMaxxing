import type { Lesson } from './types'
import { MATHS } from './maths'
import { BIO } from './bio'
import { CHEM } from './chem'
import { PHYS } from './phys'
import { CS } from './cs'
import { ENG_LANG } from './eng-lang'
import { ENG_LIT } from './eng-lit'
import { RS } from './rs'
import { DT } from './dt'

export type { Lesson, LessonStep } from './types'

/** Lessons keyed by the exact topic heading in `topics.ts`. */
export const LESSONS: Record<string, Lesson> = { ...MATHS, ...BIO, ...CHEM, ...PHYS, ...CS, ...ENG_LANG, ...ENG_LIT, ...RS, ...DT }
