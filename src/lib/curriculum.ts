import { TOPICS } from '../content/topics'
import { fogByTopic } from './fog'
import type { AppState } from './store'

export const topicId = (subjectId: string, topic: string) => `${subjectId}:${topic}`

/** Topics in the order the school is teaching them: what the student has marked as taught (oldest first), then the rest in spec order. */
export function schoolOrder(s: AppState, subjectId: string): { taught: string[]; upcoming: string[] } {
  const all = TOPICS[subjectId] ?? []
  const taught = all.filter((t) => s.taught[topicId(subjectId, t)]).sort((a, b) => s.taught[topicId(subjectId, a)] - s.taught[topicId(subjectId, b)])
  return { taught, upcoming: all.filter((t) => !taught.includes(t)) }
}

/** The topic to revise next in a subject: the foggiest of what has been taught in class (everything if nothing is marked yet). */
export function focusTopic(s: AppState, subjectId: string, now = Date.now()): string | null {
  const { taught } = schoolOrder(s, subjectId)
  const pool = taught.length ? taught : TOPICS[subjectId] ?? []
  if (!pool.length) return null
  const fogs = new Map(fogByTopic(s, subjectId, now).map((c) => [c.topic, c.fog ?? 1]))
  const worst = Math.max(...pool.map((t) => fogs.get(t) ?? 1))
  const ties = pool.filter((t) => (fogs.get(t) ?? 1) === worst)
  // Ties: prefer what was taught most recently, else rotate by day so it is not always the first topic.
  if (taught.length) return ties.sort((a, b) => s.taught[topicId(subjectId, b)] - s.taught[topicId(subjectId, a)])[0]
  return ties[Math.floor(now / 86_400_000) % ties.length]
}

/** A taught topic the student has not learned in the app yet (no self-rating), newest first. */
export function topicToLearn(s: AppState): { subjectId: string; topic: string } | null {
  const pending = s.subjectIds.flatMap((subjectId) =>
    schoolOrder(s, subjectId).taught
      .filter((t) => !s.topicKnow[topicId(subjectId, t)])
      .map((topic) => ({ subjectId, topic, at: s.taught[topicId(subjectId, topic)] })),
  )
  pending.sort((a, b) => b.at - a.at)
  return pending[0] ? { subjectId: pending[0].subjectId, topic: pending[0].topic } : null
}
