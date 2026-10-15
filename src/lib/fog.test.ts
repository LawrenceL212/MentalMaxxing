import { describe, expect, it } from 'vitest'
import { fog, forecast, recall } from './fog'
import { DEFAULT_STATE, type AppState } from './store'

const DAY = 86_400_000
const now = 1_000_000 * DAY
const seen = (intervalDays: number, ageDays: number): AppState => ({
  ...DEFAULT_STATE,
  subjectIds: ['chem'],
  progress: { 's-chem-1': { cardId: 's-chem-1', ease: 2.5, intervalDays, reps: 2, dueAt: now - ageDays * DAY + intervalDays * DAY } },
})

describe('fog', () => {
  it('is 0 recall for unseen cards, so everything starts foggy', () => {
    expect(recall(DEFAULT_STATE, 's-chem-1', now)).toBe(0)
    expect(fog({ ...DEFAULT_STATE, subjectIds: ['chem'] }, 'chem', now)).toBe(1)
  })
  it('is 100% recall right after a review', () => {
    expect(recall(seen(4, 0), 's-chem-1', now)).toBeCloseTo(1)
  })
  it('is 90% when the card falls due', () => {
    expect(recall(seen(4, 4), 's-chem-1', now)).toBeCloseTo(0.9)
  })
  it('forecast falls with time', () => {
    const f = forecast(seen(4, 0), 7, now)
    expect(f).toHaveLength(8)
    expect(f[7]).toBeLessThan(f[0])
  })
})
