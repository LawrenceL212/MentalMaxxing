import { describe, expect, it } from 'vitest'
import { reviewsPerDay, streakDays } from './streak'

const DAY = 86_400_000
const noon = new Date('2026-10-15T12:00:00').getTime()
const rev = (daysAgo: number) => ({ cardId: 'c', subjectId: 'bio', grade: 'good' as const, confidence: 3, at: noon - daysAgo * DAY })

describe('streak', () => {
  it('is 0 with no activity', () => expect(streakDays({ log: [], missionLog: [] }, noon)).toBe(0))

  it('counts consecutive days ending today', () => {
    expect(streakDays({ log: [rev(0), rev(1), rev(2)], missionLog: [] }, noon)).toBe(3)
  })

  it('keeps the streak alive if today is not done yet', () => {
    expect(streakDays({ log: [rev(1), rev(2)], missionLog: [] }, noon)).toBe(2)
  })

  it('breaks on a missed day', () => {
    expect(streakDays({ log: [rev(0), rev(2)], missionLog: [] }, noon)).toBe(1)
  })

  it('counts finished missions as activity', () => {
    expect(streakDays({ log: [], missionLog: [{ kind: 'dump', subjectId: 'bio', at: noon }] }, noon)).toBe(1)
  })

  it('buckets reviews per day, oldest first', () => {
    const days = reviewsPerDay([rev(0), rev(0), rev(1)], 3, noon)
    expect(days.map((d) => d.n)).toEqual([0, 1, 2])
  })
})
