/** Compares what a student wrote in a Brain Dump with the points for the topic and says which ones are missing. Plain word matching, no AI: it tolerates small spelling and OCR slips, but it only checks that the key words appear, not that the idea is right. */

const STOP = new Set(['the', 'and', 'that', 'this', 'with', 'from', 'they', 'their', 'have', 'been', 'into', 'when', 'which', 'what', 'where', 'there', 'then', 'than', 'also', 'each', 'both', 'such', 'more', 'most', 'some', 'will', 'does', 'used', 'using', 'make', 'makes', 'made', 'only', 'other', 'about', 'between', 'because', 'while', 'these', 'those', 'your', 'you', 'are', 'for', 'can', 'not', 'any', 'all', 'its', 'but', 'was', 'were', 'has', 'had', 'how', 'who', 'one', 'two', 'per', 'out', 'use', 'get', 'gets'])

export const words = (text: string): string[] =>
  text.toLowerCase().normalize('NFKD').replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean)

const stem = (w: string) => w.replace(/(ing|edly|ed|es|s)$/, (m, _a, i) => (i >= 4 ? '' : m))

/** The words that carry a point's meaning. */
export function keyWords(point: string): string[] {
  const out = words(point).filter((w) => (w.length >= 4 || /\d/.test(w)) && !STOP.has(w)).map(stem)
  return [...new Set(out)]
}

/** Edit distance of at most 1 (one slip or swap), enough to forgive typical OCR and spelling errors on longer words. */
function close(a: string, b: string): boolean {
  if (a === b) return true
  if (a.length < 6 || b.length < 6 || Math.abs(a.length - b.length) > 1) return false
  let i = 0
  while (i < a.length && i < b.length && a[i] === b[i]) i++
  if (a.length === b.length) return a.slice(i + 1) === b.slice(i + 1)
  const [s, l] = a.length < b.length ? [a, b] : [b, a]
  return s.slice(i) === l.slice(i + 1)
}

export interface DumpResult { covered: string[]; missing: string[]; pct: number }

/** A point counts as covered when at least half of its key words (and at least one) appear in the dump. */
export function compareDump(dump: string, points: string[]): DumpResult {
  const have = words(dump).map(stem)
  const covered: string[] = []
  const missing: string[] = []
  for (const p of points) {
    // "term: definition" lines (organisers): the term itself is what the student needs to recall.
    const head = p.match(/^(.{2,60}?)\s*(?::|\s[-–—=]\s|\t)/)?.[1]
    const keys = keyWords(head ?? p)
    const hit = keys.filter((k) => have.some((h) => close(h, k))).length
    if (keys.length > 0 && hit >= Math.max(1, Math.ceil(keys.length / 2))) covered.push(p)
    else missing.push(p)
  }
  const total = points.length
  return { covered, missing, pct: total ? Math.round((covered.length / total) * 100) : 0 }
}

/** 1 to 5 rating suggested by how much of the topic was recalled. */
export const ratingFor = (pct: number): number => (pct >= 90 ? 5 : pct >= 70 ? 4 : pct >= 50 ? 3 : pct >= 25 ? 2 : 1)
