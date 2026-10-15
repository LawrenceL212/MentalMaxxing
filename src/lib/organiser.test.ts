import { describe, expect, it } from 'vitest'
import { organiserCardId, parseOrganiser } from './organiser'

describe('organiser parsing', () => {
  it('reads term and definition in common formats', () => {
    const cards = parseOrganiser('Mitochondria: site of aerobic respiration\n- Ribosome - makes proteins\n1) Nucleus = controls the cell\nCell wall\tstrengthens plant cells')
    expect(cards.map((c) => c.front)).toEqual(['Mitochondria', 'Ribosome', 'Nucleus', 'Cell wall'])
    expect(cards[1].back).toBe('makes proteins')
  })
  it('keeps colons inside the definition', () => {
    expect(parseOrganiser('Osmosis: movement of water: high to low')[0].back).toBe('movement of water: high to low')
  })
  it('skips lines that are not pairs', () => {
    expect(parseOrganiser('Key vocabulary\n\nCell: unit of life')).toHaveLength(1)
  })
  it('ids are stable and case-insensitive', () => {
    expect(organiserCardId('bio', '4.1', 'Cell')).toBe(organiserCardId('bio', '4.1', 'cell'))
  })
})
