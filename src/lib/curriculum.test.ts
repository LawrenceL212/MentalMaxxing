import { describe, expect, it } from 'vitest'
import { DEFAULT_STATE, type AppState } from './store'
import { focusTopic, schoolOrder, topicToLearn } from './curriculum'
import { todayPlan } from './missions'

const DAY = 86_400_000
const now = new Date('2026-10-15T12:00:00').getTime()
const s: AppState = {
  ...DEFAULT_STATE,
  subjectIds: ['bio', 'maths'],
  taught: { 'bio:4.2 Organisation': now - 10 * DAY, 'bio:4.1 Cell biology': now - 30 * DAY },
}

describe('school order', () => {
  it('lists taught topics oldest first, then the rest in spec order', () => {
    const o = schoolOrder(s, 'bio')
    expect(o.taught).toEqual(['4.1 Cell biology', '4.2 Organisation'])
    expect(o.upcoming[0]).toBe('4.3 Infection and response')
  })
  it('focuses on a taught topic, newest first when equally foggy', () => {
    expect(focusTopic(s, 'bio', now)).toBe('4.2 Organisation')
  })
  it('focuses on the foggiest taught topic', () => {
    const state = { ...s, topicKnow: { 'bio:4.2 Organisation': 3 as const } }
    expect(focusTopic(state, 'bio', now)).toBe('4.1 Cell biology')
  })
  it('uses any topic when nothing is marked taught', () => {
    expect(focusTopic({ ...DEFAULT_STATE, subjectIds: ['bio'] }, 'bio', now)).toMatch(/^4\./)
  })
  it('asks to learn the newest taught topic that has no rating', () => {
    expect(topicToLearn(s)).toEqual({ subjectId: 'bio', topic: '4.2 Organisation' })
    expect(topicToLearn({ ...s, topicKnow: { 'bio:4.2 Organisation': 2, 'bio:4.1 Cell biology': 2 } })).toBeNull()
  })
})

describe('plan with taught topics', () => {
  it('starts with a Learn mission for the topic just taught, then names topics in other missions', () => {
    const plan = todayPlan(s, now)
    expect(plan[0]).toMatchObject({ kind: 'learn', topic: '4.2 Organisation' })
    expect(plan.find((i) => i.kind === 'dump')?.topic).toBeTruthy()
  })
})

describe('covered subjects come first', () => {
  it('uses a subject with taught topics for Brain Dump before one without', () => {
    const plan = todayPlan({ ...s, subjectIds: ['maths', 'bio'], taught: { 'bio:4.1 Cell biology': now } }, now)
    expect(plan.find((i) => i.kind === 'dump')?.subject?.id).toBe('bio')
  })
})
