import { describe, expect, it } from 'vitest'
import { actions, DEFAULT_STATE, getState, type AppState } from './store'
import { focusTopic, orderedTopics, schoolOrder, topicToLearn } from './curriculum'
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

describe('reorderable course', () => {
  const e: AppState = { ...DEFAULT_STATE, subjectIds: ['bio'], topicOrder: { bio: ['4.3 Infection and response', '4.1 Cell biology', 'gone topic'] } }
  it('uses the saved order, drops removed topics and appends new ones', () => {
    const o = orderedTopics(e, 'bio')
    expect(o.slice(0, 2)).toEqual(['4.3 Infection and response', '4.1 Cell biology'])
    expect(o).not.toContain('gone topic')
    expect(o).toContain('4.2 Organisation')
    expect(new Set(o).size).toBe(o.length)
  })
  it('coveredUpTo marks everything up to the chosen topic in list order', () => {
    actions.replace(e)
    actions.coveredUpTo('bio', '4.1 Cell biology', now)
    const st = getState()
    expect(Object.keys(st.taught).sort()).toEqual(['bio:4.1 Cell biology', 'bio:4.3 Infection and response'])
    expect(schoolOrder(st, 'bio').taught).toEqual(['4.3 Infection and response', '4.1 Cell biology'])
    actions.coveredUpTo('bio', '4.3 Infection and response', now)
    expect(Object.keys(getState().taught)).toEqual(['bio:4.3 Infection and response'])
  })
})
