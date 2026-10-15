import { describe, expect, it } from 'vitest'
import { decksFor, topicCard } from './flashcards'
import { DEFAULT_STATE } from './store'

describe('flashcards', () => {
  it('gives every listed topic an automatic card', () => {
    const decks = decksFor(DEFAULT_STATE, 'chem')
    expect(decks).toHaveLength(10)
    expect(decks.every((d) => d.cards[0].id.startsWith('t-chem-'))).toBe(true)
  })
  it('attaches real cards by topic number', () => {
    const bonding = decksFor(DEFAULT_STATE, 'chem').find((d) => d.topic.startsWith('4.2'))!
    expect(bonding.cards.length).toBeGreaterThan(1)
  })
  it('makes a deck for a student topic we do not list', () => {
    const s = { ...DEFAULT_STATE, userCards: [{ id: 'u1', subjectId: 'maths', topic: 'Vectors', front: 'q', back: 'a' }] }
    const d = decksFor(s, 'maths').find((x) => x.topic === 'Vectors')!
    expect(d.cards).toHaveLength(2)
  })
  it('strips the spec number from the prompt', () => {
    expect(topicCard('bio', '4.4 Bioenergetics').front).toBe('Bioenergetics: what are the key ideas?')
  })
})
