import type { ReviewLog } from '../../lib/store'

const WEEK = 7 * 24 * 60 * 60 * 1000

/** Share of reviews graded Good or Easy, per week since the first review. */
export function retention(log: ReviewLog[]): { week: number; pct: number }[] {
  if (log.length === 0) return []
  const start = Math.min(...log.map((l) => l.at))
  const buckets = new Map<number, { good: number; total: number }>()
  for (const l of log) {
    const week = Math.floor((l.at - start) / WEEK)
    const b = buckets.get(week) ?? { good: 0, total: 0 }
    b.total += 1
    if (l.grade === 'good' || l.grade === 'easy') b.good += 1
    buckets.set(week, b)
  }
  return [...buckets.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([week, b]) => ({ week, pct: Math.round((b.good / b.total) * 100) }))
}
