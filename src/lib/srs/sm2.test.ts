import { describe, expect, it } from 'vitest'
import { INITIAL_SRS, review } from './sm2'

describe('simplified SM-2', () => {
  it('uses fixed first steps', () => {
    expect(review(INITIAL_SRS, 'hard').dueInDays).toBe(1)
    expect(review(INITIAL_SRS, 'good').dueInDays).toBe(4)
    expect(review(INITIAL_SRS, 'easy').dueInDays).toBe(11)
  })

  it('multiplies the gap by ease after the first success', () => {
    const first = review(INITIAL_SRS, 'good').state
    expect(review(first, 'good').dueInDays).toBe(10)
  })

  it('resets after Again and lowers ease', () => {
    const grown = review(review(INITIAL_SRS, 'good').state, 'good').state
    const lapsed = review(grown, 'again')
    expect(lapsed.state.reps).toBe(0)
    expect(lapsed.dueInDays).toBeLessThan(1)
    expect(lapsed.state.ease).toBeLessThan(grown.ease)
  })

  it('never lets ease drop below 1.3', () => {
    let s = INITIAL_SRS
    for (let i = 0; i < 20; i++) s = review(s, 'again').state
    expect(s.ease).toBe(1.3)
  })

  it('flags Easy as too soon', () => {
    expect(review(INITIAL_SRS, 'easy').tooSoon).toBe(true)
    expect(review(INITIAL_SRS, 'good').tooSoon).toBe(false)
  })
})
