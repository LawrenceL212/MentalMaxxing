import { NOTES } from '../content/notes'
import { TOPICS } from '../content/topics'

export interface TopicMatch {
  subjectId: string
  topic: string
  /** 0 to 1, how much of the topic's distinctive vocabulary the text uses (capped) */
  score: number
  /** Distinctive words that matched, for showing why */
  words: string[]
}

const STOP = new Set('that this with from have they their there which when what where while will would about into than then them these those also each both such only more most some other your does done being been were here very over under after before because'.split(' '))

/** Lowercase words of 4+ letters, plural stripped, so "cells" and "cell" match. */
const tokens = (text: string): string[] =>
  (text.toLowerCase().match(/[a-z][a-z-]{3,}/g) ?? []).map((w) => (w.length > 5 && w.endsWith('s') && !w.endsWith('ss') ? w.slice(0, -1) : w)).filter((w) => !STOP.has(w))

interface Profile {
  subjectId: string
  topic: string
  weights: Map<string, number>
  total: number
}

let cache: Profile[] | null = null

/** Each topic's vocabulary comes from its own heading (weighted up) and written notes. Rare words across all topics weigh more. */
function profiles(): Profile[] {
  if (cache) return cache
  const raw = Object.entries(TOPICS).flatMap(([subjectId, topics]) =>
    topics.map((topic) => {
      const counts = new Map<string, number>()
      for (const w of tokens(topic)) counts.set(w, (counts.get(w) ?? 0) + 3)
      for (const w of tokens((NOTES[topic] ?? []).join(' '))) counts.set(w, (counts.get(w) ?? 0) + 1)
      return { subjectId, topic, counts }
    }),
  )
  const df = new Map<string, number>()
  for (const r of raw) for (const w of r.counts.keys()) df.set(w, (df.get(w) ?? 0) + 1)
  cache = raw.map((r) => {
    const weights = new Map<string, number>()
    for (const [w, c] of r.counts) {
      const idf = Math.log(1 + raw.length / (df.get(w) ?? 1))
      if (idf > 1.2) weights.set(w, Math.min(c, 4) * idf) // skip words that appear in most topics
    }
    return { subjectId: r.subjectId, topic: r.topic, weights, total: [...weights.values()].reduce((a, b) => a + b, 0) }
  })
  return cache
}

/**
 * Which spec topics does this text look like? Used to work out where a student is from notes, organisers or cards they add.
 * Needs at least two distinctive words to match, so one stray word never decides.
 */
export function detectTopics(text: string, opts: { subjectIds?: string[]; limit?: number } = {}): TopicMatch[] {
  const seen = new Set(tokens(text))
  if (seen.size < 2) return []
  const scored = profiles()
    .filter((p) => !opts.subjectIds || opts.subjectIds.includes(p.subjectId))
    .map((p) => {
      const words = [...p.weights.keys()].filter((w) => seen.has(w))
      const got = words.reduce((a, w) => a + (p.weights.get(w) ?? 0), 0)
      // Reward covering a good share of the topic, but do not punish short pastes too hard.
      const score = Math.min(1, (got / Math.max(p.total, 1)) * 4)
      return { subjectId: p.subjectId, topic: p.topic, score, words }
    })
    .filter((m) => m.words.length >= 2)
    .sort((a, b) => b.score - a.score)
  const best = scored[0]?.score ?? 0
  return scored.filter((m) => m.score >= best * 0.5 && m.score >= 0.15).slice(0, opts.limit ?? 6)
}

/** Dates to give topics you mark as covered together: in spec order, one day apart, ending today. Keeps the school order sensible. */
export function spreadDates(matches: { subjectId: string; topic: string }[], now = Date.now()): Map<string, number> {
  const out = new Map<string, number>()
  const order = (m: { subjectId: string; topic: string }) => (TOPICS[m.subjectId] ?? []).indexOf(m.topic)
  const sorted = [...matches].sort((a, b) => a.subjectId.localeCompare(b.subjectId) || order(a) - order(b))
  sorted.forEach((m, i) => out.set(`${m.subjectId}:${m.topic}`, now - (sorted.length - 1 - i) * 86_400_000))
  return out
}
