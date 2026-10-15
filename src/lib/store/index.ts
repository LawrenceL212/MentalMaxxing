import { useSyncExternalStore } from 'react'
import { INITIAL_SRS, type Grade, type SrsState, review } from '../srs/sm2'
import type { Resource } from '../../content/subjects'
import { TOPICS } from '../../content/topics'

export type MissionKind = 'queue' | 'learn' | 'dump' | 'prove' | 'paper'

export interface MissionLogEntry {
  kind: MissionKind
  subjectId: string | null
  at: number
  /** Free text outcome: coverage for Brain Dump, stall point for Prove It, marks for Past paper */
  detail?: string
}

export interface CardProgress extends SrsState {
  cardId: string
  /** Epoch ms when next due */
  dueAt: number
}

export interface ReviewLog {
  cardId: string
  subjectId: string
  grade: Grade
  /** 1 to 5, rated before the answer was revealed */
  confidence: number
  at: number
}

export interface UserCard {
  id: string
  subjectId: string
  topic: string
  front: string
  back: string
}

export interface AppState {
  yearGroup: number
  subjectIds: string[]
  /** subjectId -> ISO date of that subject's first paper */
  examDates: Record<string, string>
  progress: Record<string, CardProgress>
  log: ReviewLog[]
  userCards: UserCard[]
  /** subjectId -> resources the student added themselves */
  customResources: Record<string, Resource[]>
  theme: 'arctic' | 'molten' | 'obsidian'
  /** False until the student has finished first-run setup */
  onboarded: boolean
  /** False until the student has seen the quick tutorial */
  tutorialSeen: boolean
  /** `${subjectId}:${topic}` -> how well the student says they know it: 1 not yet, 2 shaky, 3 solid */
  topicKnow: Record<string, 1 | 2 | 3>
  /** `${subjectId}:${topic}` -> epoch ms the student marked it as taught in class. Gives school teaching order. */
  taught: Record<string, number>
  /** subjectId -> topics in the order the school teaches them (student-arranged; missing means spec order) */
  topicOrder: Record<string, string[]>
  /** `${subjectId}:${topic}` -> the school knowledge organiser: pasted text and/or a link (files are kept on the device). */
  organisers: Record<string, { text: string; link: string; fileName?: string }>
  /** Sound effects and haptics */
  soundOn: boolean
  missionLog: MissionLogEntry[]
  /** Epoch ms of the last local change, used to pick the newer copy when syncing */
  updatedAt: number
}

const KEY = 'mentalmaxxing:v1'
const DAY = 24 * 60 * 60 * 1000

export const DEFAULT_STATE: AppState = {
  yearGroup: 10,
  subjectIds: ['maths', 'bio', 'chem', 'phys'],
  examDates: {},
  progress: {},
  log: [],
  userCards: [],
  customResources: {},
  theme: 'arctic',
  onboarded: false,
  tutorialSeen: false,
  soundOn: true,
  topicKnow: {},
  taught: {},
  topicOrder: {},
  organisers: {},
  missionLog: [],
  updatedAt: 0,
}

function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { ...DEFAULT_STATE, ...JSON.parse(raw) }
  } catch {
    /* private mode or corrupt data: start fresh */
  }
  return DEFAULT_STATE
}

let state: AppState = load()
const listeners = new Set<() => void>()

function set(next: AppState, stamp = true) {
  state = stamp ? { ...next, updatedAt: Date.now() } : next
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    /* storage full or blocked: keep working in memory */
  }
  listeners.forEach((l) => l())
}

/** The subject's topics in school teaching order: the student's saved order, with any new spec topics appended and removed ones dropped. */
export function orderedTopics(s: Pick<AppState, 'topicOrder'>, subjectId: string): string[] {
  const all = TOPICS[subjectId] ?? []
  const saved = (s.topicOrder[subjectId] ?? []).filter((t) => all.includes(t))
  return [...saved, ...all.filter((t) => !saved.includes(t))]
}

export const getState = () => state
export const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}
export const useAppState = () => useSyncExternalStore(subscribe, getState)

export const actions = {
  /** Replace local state with a newer remote copy without bumping updatedAt */
  replace: (remote: AppState) => set({ ...DEFAULT_STATE, ...remote }, false),
  setTheme: (theme: AppState['theme']) => set({ ...state, theme }),
  setTutorialSeen: (tutorialSeen: boolean) => set({ ...state, tutorialSeen }),
  setTopicKnow: (key: string, level: 1 | 2 | 3) => set({ ...state, topicKnow: { ...state.topicKnow, [key]: level } }),
  setTaught: (key: string, on: boolean, at = Date.now()) => {
    const taught = { ...state.taught }
    if (on) taught[key] = at
    else delete taught[key]
    set({ ...state, taught })
  },
  /** Saves the full school-order list for a subject. */
  setTopicOrder: (subjectId: string, order: string[]) => set({ ...state, topicOrder: { ...state.topicOrder, [subjectId]: order } }),
  /** Marks every topic up to and including `topic` (in the current list order) as taught; later ones are unmarked. */
  coveredUpTo: (subjectId: string, topic: string, now = Date.now()) => {
    const list = orderedTopics(state, subjectId)
    const idx = list.indexOf(topic)
    if (idx < 0) return
    const taught = { ...state.taught }
    list.forEach((t, i) => {
      const k = `${subjectId}:${t}`
      if (i <= idx) taught[k] = taught[k] ?? now - (idx - i) * 86_400_000
      else delete taught[k]
    })
    set({ ...state, taught })
  },
  setOrganiser: (key: string, patch: Partial<AppState['organisers'][string]>) =>
    set({ ...state, organisers: { ...state.organisers, [key]: { ...(state.organisers[key] ?? { text: '', link: '' }), ...patch } } }),
  /** Adds cards, skipping ids that already exist (so re-importing an organiser is safe). */
  addCards: (cards: UserCard[]) => {
    const have = new Set(state.userCards.map((c) => c.id))
    const fresh = cards.filter((c) => !have.has(c.id))
    if (fresh.length) set({ ...state, userCards: [...state.userCards, ...fresh] })
    return fresh.length
  },
  setSound: (soundOn: boolean) => set({ ...state, soundOn }),
  finishSetup: (setup: { yearGroup: number; subjectIds: string[]; examDates: Record<string, string> }) =>
    set({ ...state, ...setup, onboarded: true }),
  logMission: (entry: Omit<MissionLogEntry, 'at'>) =>
    set({ ...state, missionLog: [...state.missionLog, { ...entry, at: Date.now() }] }),
  deleteCard: (id: string) => set({ ...state, userCards: state.userCards.filter((c) => c.id !== id) }),
  setYear: (yearGroup: number) => set({ ...state, yearGroup }),
  toggleSubject: (id: string) =>
    set({
      ...state,
      subjectIds: state.subjectIds.includes(id) ? state.subjectIds.filter((s) => s !== id) : [...state.subjectIds, id],
    }),
  setExamDate: (id: string, iso: string) => set({ ...state, examDates: { ...state.examDates, [id]: iso } }),
  addResource: (subjectId: string, r: Resource) =>
    set({ ...state, customResources: { ...state.customResources, [subjectId]: [...(state.customResources[subjectId] ?? []), r] } }),
  removeResource: (subjectId: string, url: string) =>
    set({
      ...state,
      customResources: { ...state.customResources, [subjectId]: (state.customResources[subjectId] ?? []).filter((r) => r.url !== url) },
    }),
  addCard: (card: Omit<UserCard, 'id'>) =>
    set({ ...state, userCards: [...state.userCards, { ...card, id: `u-${Date.now()}` }] }),
  rate: (cardId: string, subjectId: string, grade: Grade, confidence: number) => {
    const prev = state.progress[cardId] ?? { ...INITIAL_SRS, cardId, dueAt: 0 }
    const result = review(prev, grade)
    const now = Date.now()
    set({
      ...state,
      progress: { ...state.progress, [cardId]: { ...result.state, cardId, dueAt: now + result.dueInDays * DAY } },
      log: [...state.log, { cardId, subjectId, grade, confidence, at: now }],
    })
    return result
  },
}
