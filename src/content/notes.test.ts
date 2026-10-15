import { describe, expect, it } from 'vitest'
import { NOTES } from './notes'
import { TOPICS } from './topics'

describe('notes', () => {
  it('every listed topic has study notes', () => {
    const missing = Object.values(TOPICS).flat().filter((t) => !(NOTES[t]?.length))
    expect(missing).toEqual([])
  })
})
