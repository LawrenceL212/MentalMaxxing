export type Grade = 'again' | 'hard' | 'good' | 'easy'

export interface SrsState {
  /** Ease multiplier, never below 1.3 */
  ease: number
  /** Current gap in days (fractions allowed for same-day relearning) */
  intervalDays: number
  /** Consecutive successful recalls */
  reps: number
}

export interface SrsResult {
  state: SrsState
  /** Days until the card is due again */
  dueInDays: number
  /** True when the student pressed Easy: shown as the "came back too soon" note */
  tooSoon: boolean
}

export const INITIAL_SRS: SrsState = { ease: 2.5, intervalDays: 0, reps: 0 }

const AGAIN_DAYS = 10 / (24 * 60)
const MIN_EASE = 1.3

const clampEase = (e: number) => Math.max(MIN_EASE, Math.round(e * 100) / 100)

/** Simplified SM-2. Fixed first steps, then interval * ease. */
export function review(prev: SrsState, grade: Grade): SrsResult {
  if (grade === 'again') {
    return {
      state: { ease: clampEase(prev.ease - 0.2), intervalDays: AGAIN_DAYS, reps: 0 },
      dueInDays: AGAIN_DAYS,
      tooSoon: false,
    }
  }

  const first = prev.reps === 0
  let days: number
  let ease = prev.ease
  if (grade === 'hard') {
    days = first ? 1 : Math.max(1, prev.intervalDays * 1.2)
    ease -= 0.15
  } else if (grade === 'good') {
    days = first ? 4 : prev.intervalDays * prev.ease
  } else {
    days = first ? 11 : prev.intervalDays * prev.ease * 1.3
    ease += 0.15
  }
  days = Math.round(days * 10) / 10

  return {
    state: { ease: clampEase(ease), intervalDays: days, reps: prev.reps + 1 },
    dueInDays: days,
    tooSoon: grade === 'easy',
  }
}
