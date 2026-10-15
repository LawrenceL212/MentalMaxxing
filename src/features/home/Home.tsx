import { Link } from 'react-router-dom'
import { daysUntilExam, pickMission, type MissionKind } from '../../lib/missions'
import { useAppState } from '../../lib/store'
import { subjectById } from '../../content/subjects'

const KIND_COLOR: Record<MissionKind, string> = {
  queue: 'var(--m-queue)',
  dump: 'var(--m-dump)',
  prove: 'var(--m-prove)',
  paper: 'var(--m-paper)',
}

export default function Home() {
  const state = useAppState()
  const mission = pickMission(state)
  const exams = state.subjectIds
    .map((id) => ({ subject: subjectById(id), days: daysUntilExam(state.examDates[id]) }))
    .filter((x) => x.subject && x.days !== null && x.days >= 0)
    .sort((a, b) => (a.days ?? 0) - (b.days ?? 0))
    .slice(0, 4)

  return (
    <>
      <section
        className="grid gap-3 rounded-3xl p-5 text-[var(--ink)]"
        style={{ background: KIND_COLOR[mission.kind] }}
        aria-label="Today's mission"
      >
        <div className="flex items-center justify-between">
          <span className="mono rounded-full bg-black/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest">Today</span>
          <span className="mono rounded-full bg-black/15 px-2.5 py-1 text-[11px] font-bold">{mission.minutes} min</span>
        </div>
        <h1 className="text-5xl leading-none font-extrabold tracking-tight">{mission.title}</h1>
        {mission.subject && <p className="font-bold">{mission.subject.name}</p>}
        <p className="rounded-2xl bg-white/30 p-3 text-sm leading-snug">{mission.why}</p>
        {mission.kind === 'queue' ? (
          <Link to="/session" className="rounded-2xl bg-[var(--ink)] py-4 text-center text-lg font-extrabold text-white">
            Start Mission
          </Link>
        ) : (
          <p className="rounded-2xl bg-[var(--ink)] py-4 text-center font-bold text-white">Do this one on paper, then come back.</p>
        )}
      </section>

      {exams.length > 0 && (
        <section className="grid grid-cols-4 gap-2" aria-label="Days to exams">
          {exams.map(({ subject, days }) => (
            <div key={subject!.id} className="rounded-2xl bg-[var(--raise)] p-2 text-center" style={{ borderTop: `4px solid ${subject!.color}` }}>
              <b className="block text-2xl font-extrabold" style={{ color: subject!.color }}>{days}</b>
              <span className="mono text-[11px] text-[var(--muted)]">{subject!.name.split(' ')[0]}</span>
            </div>
          ))}
        </section>
      )}
    </>
  )
}
