import { describe, expect, it } from 'vitest'
import { compareDump, keyWords, ratingFor } from './dump'

const points = [
  'Diffusion is the net movement of particles from a high concentration to a low concentration.',
  'Osmosis is the diffusion of water through a partially permeable membrane.',
  'Active transport moves substances against a concentration gradient and needs energy from respiration.',
]

describe('brain dump check', () => {
  it('finds covered and missing points from the key words', () => {
    const r = compareDump('diffusion is particles moving from high concentration to low. osmosis is water moving through a partially permeable membrane', points)
    expect(r.covered).toHaveLength(2)
    expect(r.missing).toEqual([points[2]])
    expect(r.pct).toBe(67)
  })
  it('forgives a one-letter slip in longer words (OCR or spelling)', () => {
    expect(compareDump('osmosls water partially permeable membrane', points).covered).toContain(points[1])
  })
  it('does not count a point on one stray word', () => {
    expect(compareDump('respiration', points).covered).toHaveLength(0)
  })
  it('uses the term of "term: definition" lines', () => {
    const r = compareDump('mitochondria and ribosomes', ['Mitochondria: where aerobic respiration happens', 'Nucleus: contains genetic material'])
    expect(r.covered).toEqual(['Mitochondria: where aerobic respiration happens'])
  })
  it('handles an empty dump and empty points', () => {
    expect(compareDump('', points).pct).toBe(0)
    expect(compareDump('anything', []).pct).toBe(0)
    expect(keyWords('The of and')).toEqual([])
  })
  it('suggests a rating', () => {
    expect([0, 30, 55, 75, 95].map(ratingFor)).toEqual([1, 2, 3, 4, 5])
  })
  it('flags a point whose numbers the dump does not repeat', () => {
    const r = compareDump('the heart pumps blood at 80 beats', ['The heart pumps blood at 60 to 100 beats per minute'])
    expect(r.unsure).toHaveLength(1)
    expect(r.covered).toHaveLength(0)
  })
})
