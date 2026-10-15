import { describe, expect, it } from 'vitest'
import { byTopic, clock, levelFor, totals } from './mock'
import { DEFAULT_STATE } from './store'
import { fogByTopic } from './fog'

const rows = [
  { label: '1', topic: '4.1 Energy', got: 2, out: 4 },
  { label: '2', topic: '4.2 Electricity', got: 5, out: 5 },
  { label: '3', topic: '4.1 Energy', got: 1, out: 4 },
  { label: '4', topic: '', got: 3, out: 3 },
]

describe('mock exam maths', () => {
  it('totals every row', () => expect(totals(rows)).toEqual({ got: 11, out: 16 }))
  it('groups by topic, weakest first, skipping untagged rows', () => {
    const t = byTopic(rows)
    expect(t.map((x) => x.topic)).toEqual(['4.1 Energy', '4.2 Electricity'])
    expect(t[0]).toMatchObject({ got: 3, out: 8, pct: 38 })
  })
  it('maps percentages to levels', () => {
    expect([levelFor(10), levelFor(55), levelFor(90)]).toEqual([1, 2, 3])
  })
  it('formats the clock', () => {
    expect(clock(105 * 60_000)).toBe('1:45:00')
    expect(clock(59_001)).toBe('0:01:00')
    expect(clock(-5)).toBe('0:00:00')
  })
})

describe('fog from self-rating', () => {
  it('uses what you said before any reviews', () => {
    const s = { ...DEFAULT_STATE, subjectIds: ['phys'], topicKnow: { 'phys:4.1 Energy': 2 as const } }
    const cell = fogByTopic(s, 'phys').find((c) => c.topic === '4.1 Energy')!
    expect(cell.fog).toBe(0.6)
  })
})
