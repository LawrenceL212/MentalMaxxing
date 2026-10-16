import { describe, expect, it } from 'vitest'
import { itemsToText, splitLesson } from './lesson'

describe('lesson text', () => {
  it('joins pieces on the same baseline left to right and breaks on big gaps', () => {
    const t = itemsToText([
      { str: 'Add', x: 10, y: 700 }, { str: 'and subtract', x: 40, y: 700.5 },
      { str: 'Line two', x: 10, y: 686 },
      { str: 'New part', x: 10, y: 600 },
    ])
    expect(t.split('\n')).toEqual(['Add and subtract', 'Line two', '', 'New part'])
  })
  it('splits into steps at blank lines without cutting a block', () => {
    const steps = splitLesson('A'.repeat(400) + '\n\n' + 'B'.repeat(400) + '\n\nC', 700)
    expect(steps).toHaveLength(2)
    expect(steps[1].startsWith('B')).toBe(true)
    expect(splitLesson('')).toEqual([])
  })
})
