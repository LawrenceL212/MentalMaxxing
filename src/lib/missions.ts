import { SUBJECTS, subjectById, type Subject } from '../content/subjects'
import { SAMPLE_CARDS, type Card } from '../content/cards'
import type { AppState } from './store'

export type MissionKind = 'queue' | 'dump' | 'prove' | 'paper'

export interface Mission {
  kind: MissionKind
  title: string
  minutes: number
  subject: Subject | null
  why: string
}

export const allCards = (s: AppState): Card[] => [...SAMPLE_CARDS, ...s.userCards].filter((c) => s.subjectIds.includes(c.subjectId))

export const dueCards = (s: AppState, now = Date.now()): Card[] =>
  allCards(s).filter((c) => (s.progress[c.id]?.dueAt ?? 0) <= now)

export function daysUntilExam(iso: string | undefined, now = Date.now()): number | null {
  if (!iso) return null
  const d = Math.ceil((new Date(iso).getTime() - now) / 86_400_000)
  return Number.isFinite(d) ? d : null
}

/** The app picks; the student never chooses on open. */
export function pickMission(s: AppState, now = Date.now()): Mission {
  const nearest = s.subjectIds
    .map((id) => ({ id, days: daysUntilExam(s.examDates[id], now) }))
    .filter((x): x is { id: string; days: number } => x.days !== null && x.days >= 0)
    .sort((a, b) => a.days - b.days)[0]

  if (nearest && nearest.days <= 14) {
    const subject = subjectById(nearest.id) ?? null
    return {
      kind: 'paper',
      title: 'Past paper',
      minutes: 30,
      subject,
      why: `${subject?.name ?? 'An exam'} is ${nearest.days} day${nearest.days === 1 ? '' : 's'} away. Past papers show where marks are still being lost.`,
    }
  }

  const due = dueCards(s, now)
  if (due.length > 0) {
    return {
      kind: 'queue',
      title: 'The Queue',
      minutes: Math.max(5, Math.round(due.length * 0.8)),
      subject: null,
      why: `${due.length} card${due.length === 1 ? ' is' : 's are'} at the edge of forgetting. Reviewing now gives the biggest memory boost.`,
    }
  }

  const subject = SUBJECTS.find((x) => x.id === s.subjectIds[0]) ?? null
  return {
    kind: 'dump',
    title: 'Brain Dump',
    minutes: 12,
    subject,
    why: 'Nothing is due. Write everything you remember about one topic on paper, then tick off what you covered.',
  }
}
