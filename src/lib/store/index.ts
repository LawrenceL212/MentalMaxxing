import { useSyncExternalStore } from 'react'
import { INITIAL_SRS, type Grade, type SrsState, review } from '../srs/sm2'
import type { Resource } from '../../content/subjects'

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
