import { describe, expect, it } from 'vitest'
import { NOTES } from './notes'
import { LESSONS } from './lessons'
import { TOPICS } from './topics'

const topics = Object.values(TOPICS).flat()

describe('notes and lessons', () => {
  it('every listed topic has study notes or a lesson with key points', () => {
    const missing = topics.filter((t) => !(NOTES[t]?.length || LESSONS[t]?.keyPoints.length))
    expect(missing).toEqual([])
  })
  it('every listed topic has a lesson of the expected shape', () => {
    const bad = topics.filter((t) => {
      const l = LESSONS[t]
      return !l || l.steps.length < 4 || l.steps.length > 8 || l.check.length < 3 || l.keyPoints.length < 3 || l.steps.some((s) => !s.title || s.text.length < 40) || l.check.some((c) => !c.q || !c.a)
    })
    expect(bad).toEqual([])
  })
  it('has no lessons for topics that are not listed', () => {
    expect(Object.keys(LESSONS).filter((t) => !topics.includes(t))).toEqual([])
  })
})
