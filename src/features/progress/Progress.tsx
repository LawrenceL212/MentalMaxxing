import { useAppState } from '../../lib/store'
import { subjectById } from '../../content/subjects'
import { retention } from './stats'

export default function Progress() {
  const state = useAppState()
  const weeks = retention(state.log)
  const latest = weeks.at(-1)
  const first = weeks[0]
  const reviewed = new Set(state.log.map((l) => l.cardId)).size

  return (
    <>
      <section className="rounded-3xl bg-[var(--accent)] p-5 text-[var(--ink)]">
        <b className="block text-6xl leading-none font-extrabold">{latest ? `${latest.pct}%` : '–'}</b>
        <span className="mono mt-2 block text-sm font-bold">Recalled well this week</span>
      </section>

      <section className="grid gap-2 rounded-3xl bg-[var(--raise)] p-4" aria-label="Are you improving?">
        <h2 className="mono text-xs font-bold tracking-widest text-[var(--muted)] uppercase">Are you improving?</h2>
        {weeks.length < 2 ? (
          <p className="text-[var(--muted)]">Review cards for two weeks and your trend will appear here. {state.log.length} reviews so far.</p>
        ) : (
          <p className="text-xl font-bold">
            {latest!.pct >= first.pct ? 'Yes. ' : 'Not yet. '}
            You recall {Math.abs(latest!.pct - first.pct)} points {latest!.pct >= first.pct ? 'more' : 'less'} than in your first week.
          </p>
        )}
        <p className="mono text-sm text-[var(--muted)]">{reviewed} cards reviewed</p>
      </section>

      <section className="grid gap-2 rounded-3xl bg-[var(--raise)] p-4">
        <h2 className="mono text-xs font-bold tracking-widest text-[var(--muted)] uppercase">By subject</h2>
        {state.subjectIds.map((id) => {
          const s = subjectById(id)!
          const mine = state.log.filter((l) => l.subjectId === id)
          const pct = mine.length ? Math.round((mine.filter((l) => l.grade === 'good' || l.grade === 'easy').length / mine.length) * 100) : 0
          return (
            <div key={id} className="grid grid-cols-[7rem_1fr_3rem] items-center gap-2 text-sm">
              <span className="truncate font-bold" style={{ color: s.color }}>{s.name}</span>
              <span className="h-2.5 overflow-hidden rounded-full bg-[var(--raise2)]">
                <span className="block h-full rounded-full" style={{ width: `${pct}%`, background: s.color }} />
              </span>
              <b className="mono text-right">{mine.length ? `${pct}%` : '–'}</b>
            </div>
          )
        })}
      </section>
    </>
  )
}
