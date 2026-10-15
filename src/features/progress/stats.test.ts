import { describe, expect, it } from 'vitest'
import { retention } from './stats'

const day = 86_400_000
const log = (grade: 'good' | 'again', daysIn: number) => ({ cardId: 'c', subjectId: 'bio', grade, confidence: 3, at: daysIn * day })

describe('retention', () => {
  it('is empty with no reviews', () => expect(retention([])).toEqual([]))

  it('buckets by week and counts Good/Easy', () => {
    const r = retention([log('good', 0), log('again', 1), log('good', 8), log('good', 9)])
    expect(r).toEqual([
      { week: 0, pct: 50 },
      { week: 1, pct: 100 },
    ])
  })
})
