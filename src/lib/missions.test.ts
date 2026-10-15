import { describe, expect, it } from 'vitest'
import { DEFAULT_STATE, type AppState } from './store'
import { pickMission, todayPlan } from './missions'

const now = new Date('2026-10-15T12:00:00').getTime()
const base: AppState = { ...DEFAULT_STATE, onboarded: true, subjectIds: ['maths', 'bio'] }

describe('today plan', () => {
  it('starts with the Queue when cards are due', () => {
    expect(pickMission(base, now)?.kind).toBe('queue')
  })

  it('moves on to Brain Dump once nothing is due', () => {
    const progress = Object.fromEntries(
      ['s-bio-1', 's-bio-2', 's-maths-1'].map((id) => [id, { cardId: id, ease: 2.5, intervalDays: 4, reps: 1, dueAt: now + 86_400_000 }]),
    )
    expect(pickMission({ ...base, progress }, now)?.kind).toBe('dump')
  })

  it('swaps Prove It for a past paper within 14 days of an exam, without hiding the Queue', () => {
    const date = new Date(now + 5 * 86_400_000).toISOString().slice(0, 10)
    const kinds = todayPlan({ ...base, examDates: { maths: date } }, now).map((i) => i.kind)
    expect(kinds).toEqual(['queue', 'paper', 'dump'])
  })

  it('finishes the day when every mission is logged', () => {
    const progress = Object.fromEntries(
      ['s-bio-1', 's-bio-2', 's-maths-1'].map((id) => [id, { cardId: id, ease: 2.5, intervalDays: 4, reps: 1, dueAt: now + 86_400_000 }]),
    )
    const missionLog = [
      { kind: 'dump' as const, subjectId: 'bio', at: now },
      { kind: 'prove' as const, subjectId: 'maths', at: now },
    ]
    expect(pickMission({ ...base, progress, missionLog }, now)).toBeNull()
  })

  it('has no plan without subjects', () => {
    expect(todayPlan({ ...base, subjectIds: [] }, now)).toEqual([])
  })
})
