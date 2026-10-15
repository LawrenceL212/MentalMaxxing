import { subjectById, type Subject } from '../content/subjects'
import { SAMPLE_CARDS, type Card } from '../content/cards'
import type { AppState, MissionKind } from './store'
import { isToday } from './streak'

export type { MissionKind }

export interface PlanItem {
  kind: MissionKind
  title: string
  minutes: number
  subject: Subject | null
  why: string
  done: boolean
}

export const allCards = (s: AppState): Card[] => [...SAMPLE_CARDS, ...s.userCards].filter((c) => s.subjectIds.includes(c.subjectId))

export const dueCards = (s: AppState, now = Date.now()): Card[] =>
  allCards(s).filter((c) => (s.progress[c.id]?.dueAt ?? 0) <= now)

export function daysUntilExam(iso: string | undefined, now = Date.now()): number | null {
  if (!iso) return null
  const d = Math.ceil((new Date(`${iso}T09:00:00`).getTime() - now) / 86_400_000)
  return Number.isFinite(d) ? d : null
}

/** Selected subjects, weakest first. Subjects with no reviews yet count as middling. */
export function weakestSubjects(s: AppState): string[] {
  const rate = (id: string) => {
    const mine = s.log.filter((l) => l.subjectId === id)
    if (mine.length < 3) return 0.5
    return mine.filter((l) => l.grade === 'good' || l.grade === 'easy').length / mine.length
  }
  return [...s.subjectIds].sort((a, b) => rate(a) - rate(b))
}

export function nearestExam(s: AppState, now = Date.now()): { id: string; days: number } | null {
  return (
    s.subjectIds
      .map((id) => ({ id, days: daysUntilExam(s.examDates[id], now) }))
      .filter((x): x is { id: string; days: number } => x.days !== null && x.days >= 0)
      .sort((a, b) => a.days - b.days)[0] ?? null
  )
}

const doneToday = (s: AppState, kind: MissionKind, now: number) =>
  s.missionLog.some((m) => m.kind === kind && isToday(m.at, now))

/**
 * Today's plan: the Queue first, then two missions the app chooses.
 * Within 14 days of an exam the second mission becomes a past paper for that subject.
 * Nothing here asks the student to decide.
 */
export function todayPlan(s: AppState, now = Date.now()): PlanItem[] {
  if (s.subjectIds.length === 0) return []
  const items: PlanItem[] = []
  const due = dueCards(s, now)
  const hasCards = allCards(s).length > 0

  if (hasCards) {
    items.push({
      kind: 'queue',
      title: 'The Queue',
      minutes: Math.max(3, Math.round(due.length * 0.7)),
      subject: null,
      done: due.length === 0,
      why: due.length
        ? `${due.length} card${due.length === 1 ? ' is' : 's are'} at the edge of forgetting. Reviewing now gives the biggest memory boost.`
        : 'Every card is up to date. They come back when you are about to forget them.',
    })
  }

  const weak = weakestSubjects(s)
  const exam = nearestExam(s, now)
  const paperSoon = exam !== null && exam.days <= 14
  const dayIndex = Math.floor(now / 86_400_000)
  const pick = (offset: number) => subjectById(weak[(dayIndex + offset) % weak.length]) ?? null

  if (paperSoon && exam) {
    const subject = subjectById(exam.id) ?? null
    items.push({
      kind: 'paper',
      title: 'Past paper',
      minutes: 30,
      subject,
      done: doneToday(s, 'paper', now),
      why: `${subject?.name ?? 'An exam'} is ${exam.days} day${exam.days === 1 ? '' : 's'} away. A past paper shows exactly where marks are still being lost.`,
    })
  }

  const dumpSubject = pick(0)
  items.push({
    kind: 'dump',
    title: 'Brain Dump',
    minutes: 10,
    subject: dumpSubject,
    done: doneToday(s, 'dump', now),
    why: `Write everything you remember about ${dumpSubject?.name ?? 'a topic'} from memory, then check it against your notes. The gaps are what to study.`,
  })

  if (!paperSoon) {
    const proveSubject = pick(1)
    items.push({
      kind: 'prove',
      title: 'Prove It',
      minutes: 5,
      subject: proveSubject,
      done: doneToday(s, 'prove', now),
      why: `Explain one idea from ${proveSubject?.name ?? 'a subject'} out loud in 90 seconds with your notes closed. Where you stall is where to focus.`,
    })
  }
  return items.slice(0, 3)
}

/** The first thing left to do today, or null when the plan is finished. */
export const pickMission = (s: AppState, now = Date.now()): PlanItem | null => todayPlan(s, now).find((i) => !i.done) ?? null
