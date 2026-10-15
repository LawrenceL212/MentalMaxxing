import { allCards } from './missions'
import { decksFor } from './flashcards'
import type { AppState } from './store'

const DAY = 86_400_000

/** Chance of recalling a card at `at`. 100% right after a review and 90% when the card falls due (one interval later), decaying on the card's own schedule. Unseen cards are 0. */
export function recall(s: AppState, cardId: string, at: number): number {
  const p = s.progress[cardId]
  if (!p) return 0
  const interval = Math.max(p.intervalDays, 10 / 1440)
  const lastSeen = p.dueAt - interval * DAY
  return 0.9 ** (Math.max(0, at - lastSeen) / DAY / interval)
}

/** Fog implied by a self-rating before any reviews exist: not yet, shaky, solid. */
const SELF = { 1: 0.9, 2: 0.6, 3: 0.35 } as const

const mean = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null)

/** Fog = how much is forgotten or never learned: 1 minus average recall. null when there are no cards. */
export function fog(s: AppState, subjectId?: string, now = Date.now()): number | null {
  const cards = allCards(s).filter((c) => !subjectId || c.subjectId === subjectId)
  const m = mean(cards.map((c) => recall(s, c.id, now)))
  return m === null ? null : 1 - m
}

/** Fog per topic of a subject. null for topics with no real cards yet (automatic prompt cards do not count). */
export function fogByTopic(s: AppState, subjectId: string, now = Date.now()): { topic: string; fog: number | null }[] {
  return decksFor(s, subjectId).map((d) => {
    const real = d.cards.filter((c) => !c.id.startsWith('t-'))
    const m = mean(real.map((c) => recall(s, c.id, now)))
    // Nothing reviewed yet: fall back to what the student said about the topic.
    const said = s.topicKnow[`${subjectId}:${d.topic}`]
    if ((m === null || m === 0) && said) return { topic: d.topic, fog: SELF[said] }
    return { topic: d.topic, fog: m === null ? null : 1 - m }
  })
}

/** Average recall of the cards you have studied, today and over the next `days`, if you do nothing. */
export function forecast(s: AppState, days = 7, now = Date.now()): number[] {
  const seen = allCards(s).filter((c) => s.progress[c.id])
  return Array.from({ length: days + 1 }, (_, d) => mean(seen.map((c) => recall(s, c.id, now + d * DAY))) ?? 0)
}
