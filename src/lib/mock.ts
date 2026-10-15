export interface MarkRow {
  label: string
  topic: string
  got: number
  out: number
}

export interface TopicResult {
  topic: string
  got: number
  out: number
  pct: number
}

export const totals = (rows: MarkRow[]) => ({ got: rows.reduce((a, r) => a + r.got, 0), out: rows.reduce((a, r) => a + r.out, 0) })

/** Marks by topic, weakest first. Rows with no topic are left out. */
export function byTopic(rows: MarkRow[]): TopicResult[] {
  const m = new Map<string, { got: number; out: number }>()
  for (const r of rows) {
    if (!r.topic || r.out <= 0) continue
    const t = m.get(r.topic) ?? { got: 0, out: 0 }
    t.got += r.got
    t.out += r.out
    m.set(r.topic, t)
  }
  return [...m.entries()].map(([topic, t]) => ({ topic, ...t, pct: Math.round((t.got / t.out) * 100) })).sort((a, b) => a.pct - b.pct)
}

/** Self-rating a topic result implies: under 40% not yet, under 70% shaky, else solid. */
export const levelFor = (pct: number): 1 | 2 | 3 => (pct < 40 ? 1 : pct < 70 ? 2 : 3)

export const clock = (ms: number) => {
  const s = Math.max(0, Math.ceil(ms / 1000))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${h}:${pad(m)}:${pad(s % 60)}`
}
