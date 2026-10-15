import { describe, expect, it } from 'vitest'
import { detectTopics, spreadDates } from './detect'

const top = (t: string, subjectIds?: string[]) => detectTopics(t, { subjectIds })[0]

describe('detectTopics', () => {
  it('places a cell biology organiser', () => {
    expect(top('Mitochondria: site of respiration. Ribosome: protein synthesis. Nucleus: controls the cell. Cell membrane')).toMatchObject({ subjectId: 'bio', topic: '4.1 Cell biology' })
  })
  it('places algebra notes', () => {
    expect(top('Solving quadratic equations by factorising and the quadratic formula, then simultaneous equations')).toMatchObject({ subjectId: 'maths', topic: 'Algebra' })
  })
  it('places photosynthesis in bioenergetics, not cells', () => {
    expect(top('Photosynthesis: chlorophyll absorbs light, glucose and oxygen are made. Limiting factors: light intensity, temperature')).toMatchObject({ topic: '4.4 Bioenergetics' })
  })
  it('tells chemistry from physics', () => {
    expect(top('Ionic bonding, covalent bonds, metallic bonding and giant covalent structures')).toMatchObject({ subjectId: 'chem', topic: '4.2 Bonding, structure and properties of matter' })
    expect(top('Kinetic energy, gravitational potential energy and efficiency, specific heat capacity')).toMatchObject({ subjectId: 'phys', topic: '4.1 Energy' })
  })
  it('respects the subjects a student takes', () => {
    expect(detectTopics('Mitochondria ribosome nucleus cell membrane', { subjectIds: ['maths'] })).toEqual([])
  })
  it('does not guess from one word or nonsense', () => {
    expect(detectTopics('energy')).toEqual([])
    expect(detectTopics('my favourite football team won on saturday')).toEqual([])
  })
})

describe('spreadDates', () => {
  it('keeps spec order, one day apart, ending now', () => {
    const now = 1_000_000_000_000
    const d = spreadDates([{ subjectId: 'bio', topic: '4.2 Organisation' }, { subjectId: 'bio', topic: '4.1 Cell biology' }], now)
    expect(d.get('bio:4.2 Organisation')).toBe(now)
    expect(d.get('bio:4.1 Cell biology')).toBe(now - 86_400_000)
  })
})
