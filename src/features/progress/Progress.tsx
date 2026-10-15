import { useAppState } from '../../lib/store'
import { subjectById } from '../../content/subjects'
import { retention } from './stats'
import { streakDays, reviewsPerDay } from '../../lib/streak'
import Ring from '../../ui/Ring'

export default function Progress() {
  const state = useAppState()
  const weeks = retention(state.log)
  const latest = weeks.at(-1)
  const first = weeks[0]
  const reviewed = new Set(state.log.map((l) => l.cardId)).size
  const streak = streakDays(state)
  const days = reviewsPerDay(state.log, 14)
  const peak = Math.max(1, ...days.map((d) => d.n))
  const gap = state.log.filter((l) => l.confidence >= 4 && l.grade === 'again').length
  const papers = state.missionLog.filter((m) => m.kind === 'paper' && m.detail)

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
      <section className="rise glow relative overflow-hidden rounded-[28px] bg-[var(--accent)] p-5 text-[var(--ink)] md:col-span-2 md:p-7" style={{ ['--mc' as string]: 'var(--accent)' }}>
        <b className="block text-7xl leading-none font-extrabold">{latest ? `${latest.pct}%` : '–'}</b>
        <span className="label mt-2 block !text-[var(--ink)]">Recalled well this week</span>
        <p className="mt-3 text-lg font-bold">
          {weeks.length < 2 ? `Review cards across two weeks and your trend appears here. ${state.log.length} reviews so far.`
            : `${latest!.pct >= first.pct ? 'Yes, you are improving. ' : 'Not yet. '}${Math.abs(latest!.pct - first.pct)} points ${latest!.pct >= first.pct ? 'above' : 'below'} your first week.`}
        </p>
      </section>

      <section className="surface rise grid grid-cols-3 gap-2 p-4" style={{ ['--i' as string]: 1 }} aria-label="Totals">
        {[['Streak', `${streak}d`], ['Cards seen', String(reviewed)], ['Reviews', String(state.log.length)]].map(([l, v]) => (
          <div key={l} className="rounded-2xl bg-[var(--raise2)] p-3 text-center">
            <b className="block text-3xl leading-none font-extrabold">{v}</b>
            <span className="label mt-1 block">{l}</span>
          </div>
        ))}
      </section>

      <section className="surface rise p-4" style={{ ['--i' as string]: 2 }}>
        <h2 className="label mb-3">Last 14 days</h2>
        <div className="flex h-24 items-end gap-1" role="img" aria-label="Reviews per day for the last 14 days">
          {days.map((d, i) => (
            <span key={i} className="flex-1 rounded-t-md bg-[var(--m-queue)]" style={{ height: `${Math.max(4, (d.n / peak) * 100)}%`, opacity: d.n ? 1 : 0.25 }} />
          ))}
        </div>
      </section>

      <section className="surface rise grid gap-2.5 p-4" style={{ ['--i' as string]: 3 }}>
        <h2 className="label">By subject</h2>
        {state.subjectIds.map((id) => {
          const s = subjectById(id)
          if (!s) return null
          const mine = state.log.filter((l) => l.subjectId === id)
          const pct = mine.length ? Math.round((mine.filter((l) => l.grade === 'good' || l.grade === 'easy').length / mine.length) * 100) : 0
          return (
            <div key={id} className="grid grid-cols-[7rem_1fr_3rem] items-center gap-2 text-sm">
              <span className="truncate font-bold" style={{ color: s.color }}>{s.name}</span>
              <span className="h-3 overflow-hidden rounded-full bg-[var(--raise2)]">
                <span className="block h-full rounded-full transition-[width] duration-700" style={{ width: `${pct}%`, background: s.color }} />
              </span>
              <b className="mono text-right">{mine.length ? `${pct}%` : '–'}</b>
            </div>
          )
        })}
      </section>

      <section className="surface rise grid gap-2 p-4" style={{ ['--i' as string]: 4 }}>
        <h2 className="label">Confidence check</h2>
        <div className="flex items-center gap-4">
          <Ring value={Math.min(1, gap / 10)} size={64} stroke={8} color="var(--m-prove)" label={`${gap} confident misses`}>
            <span className="mono font-bold">{gap}</span>
          </Ring>
          <p className="leading-snug">Times you felt sure (4 or 5) but got it wrong. These are your hidden gaps. Aim for zero.</p>
        </div>
      </section>

      {papers.length > 0 && (
        <section className="surface rise grid gap-1.5 p-4" style={{ ['--i' as string]: 5 }}>
          <h2 className="label">Past papers</h2>
          {papers.slice(-5).reverse().map((p) => {
            const [a, b] = (p.detail ?? '').split('/').map(Number)
            return (
              <div key={p.at} className="flex justify-between text-sm"><b>{subjectById(p.subjectId ?? '')?.name ?? 'Paper'}</b><span className="mono font-bold">{a}/{b} · {b ? Math.round((a / b) * 100) : 0}%</span></div>
            )
          })}
        </section>
      )}
    </div>
  )
}
