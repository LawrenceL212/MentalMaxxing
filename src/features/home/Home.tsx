import { Link } from 'react-router-dom'
import { daysUntilExam, todayPlan, type PlanItem } from '../../lib/missions'
import { useAppState, type MissionKind } from '../../lib/store'
import { streakDays } from '../../lib/streak'
import { subjectById } from '../../content/subjects'
import { sfx } from '../../lib/fx/sound'
import Icon, { type IconName } from '../../ui/Icon'
import Ring from '../../ui/Ring'
import { fog, forecast } from '../../lib/fog'

export const KIND: Record<MissionKind, { color: string; icon: IconName; route: string }> = {
  queue: { color: 'var(--m-queue)', icon: 'cards', route: '/session' },
  dump: { color: 'var(--m-dump)', icon: 'pen', route: '/run/dump' },
  prove: { color: 'var(--m-prove)', icon: 'timer', route: '/run/prove' },
  paper: { color: 'var(--m-paper)', icon: 'target', route: '/mock' },
}

const greeting = () => {
  const h = new Date().getHours()
  return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening'
}

function Hero({ item }: { item: PlanItem }) {
  const k = KIND[item.kind]
  return (
    <section
      className="glow rise relative isolate overflow-hidden rounded-[28px] p-5 text-[var(--ink)] md:p-7"
      style={{ ['--mc' as string]: k.color, background: `linear-gradient(135deg, color-mix(in srgb, ${k.color} 70%, white), ${k.color} 60%, color-mix(in srgb, ${k.color} 80%, black))` }}
      aria-label="Next mission"
    >
      <svg className="absolute -top-10 -right-10 -z-10 size-56 opacity-20" viewBox="0 0 200 200" fill="none" stroke="#000" aria-hidden="true">
        <circle cx="100" cy="100" r="90" strokeWidth="2" /><circle cx="100" cy="100" r="66" strokeWidth="2" /><circle cx="100" cy="100" r="42" strokeWidth="2" /><circle cx="100" cy="100" r="18" strokeWidth="2" />
      </svg>
      <div className="flex items-center justify-between">
        <span className="mono inline-flex items-center gap-1.5 rounded-full bg-black/15 px-3 py-1 text-[11px] font-bold tracking-widest uppercase"><Icon name={k.icon} size={14} />Up next</span>
        <span className="mono rounded-full bg-black/15 px-3 py-1 text-[11px] font-bold">{item.minutes} min</span>
      </div>
      <h1 className="mt-4 text-5xl leading-[0.95] font-extrabold tracking-tight md:text-6xl">{item.title}</h1>
      {item.subject && <p className="mt-2 flex items-center gap-2 text-lg font-bold"><span className="size-3 rounded-full bg-[var(--ink)]" />{item.subject.name}</p>}
      <p className="mt-4 rounded-2xl bg-white/30 p-3.5 leading-snug">{item.why}</p>
      <Link to={k.route} onClick={() => sfx('select')} className="btn btn-dark mt-4 w-full py-4 text-lg">
        Start mission <Icon name="arrow" size={20} />
      </Link>
    </section>
  )
}

export default function Home() {
  const state = useAppState()
  const plan = todayPlan(state)
  const next = plan.find((i) => !i.done)
  const doneCount = plan.filter((i) => i.done).length
  const streak = streakDays(state)
  const fogNow = fog(state)
  const curve = forecast(state)
  const exams = state.subjectIds
    .map((id) => ({ subject: subjectById(id), days: daysUntilExam(state.examDates[id]) }))
    .filter((x) => x.subject && x.days !== null && x.days >= 0)
    .sort((a, b) => (a.days ?? 0) - (b.days ?? 0))
    .slice(0, 4)

  if (plan.length === 0) {
    return (
      <section className="surface rise grid gap-3 p-6">
        <h1 className="text-3xl font-extrabold">Pick your subjects</h1>
        <p className="text-[var(--muted)]">Choose the subjects you take and the app will plan your revision.</p>
        <Link to="/settings" className="btn btn-primary">Open Settings</Link>
      </section>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-[1.4fr_1fr] md:gap-6">
      <div className="grid content-start gap-4">
        <div className="rise flex items-end justify-between gap-3">
          <div>
            <p className="label">{new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
            <h2 className="text-2xl font-extrabold md:text-3xl">{greeting()}</h2>
          </div>
        </div>

        {next ? (
          <Hero item={next} />
        ) : (
          <section className="surface rise grid gap-3 p-6 text-center">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-[var(--r-good)] text-[var(--ink)]"><Icon name="check" size={32} /></span>
            <h1 className="text-3xl font-extrabold">Done for today</h1>
            <p className="text-lg text-[var(--muted)]">{streak > 1 ? `${streak} days in a row. ` : ''}Your cards will be back when you are about to forget them.</p>
            <Link to="/progress" className="btn btn-ghost">See your progress</Link>
          </section>
        )}
      </div>

      <div className="grid content-start gap-4">
        <section className="surface rise p-4" style={{ ['--i' as string]: 1 }} aria-label="Memory forecast">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="label">Why now</h2>
            <span className="mono text-xs font-bold">Fog {fogNow === null ? '–' : `${Math.round(fogNow * 100)}%`}</span>
          </div>
          {curve.some((v) => v > 0) ? (
            <>
              <svg viewBox="0 0 220 60" className="w-full" role="img" aria-label="Predicted recall over the next week if you do nothing">
                <polyline fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" points={curve.map((v, i) => `${(i / (curve.length - 1)) * 216 + 2},${56 - v * 52}`).join(' ')} />
              </svg>
              <div className="mono flex justify-between text-[11px]"><span>Today {Math.round(curve[0] * 100)}%</span><span>In a week {Math.round(curve.at(-1)! * 100)}%</span></div>
              <p className="mt-1 text-sm">If you stop now, you will remember {Math.round(curve[0] * 100 - curve.at(-1)! * 100)} points less by next week.</p>
            </>
          ) : <p className="text-sm">Finish your first Queue and this shows how fast you would forget without revising.</p>}
        </section>

        <section className="surface rise p-4" style={{ ['--i' as string]: 2 }} aria-label="Today's plan">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="label">Today's plan</h2>
            <Ring value={doneCount / plan.length} size={44} stroke={5} color="var(--r-good)" label={`${doneCount} of ${plan.length} done`}>
              <span className="mono text-xs font-bold">{doneCount}/{plan.length}</span>
            </Ring>
          </div>
          <ul className="grid gap-1.5">
            {plan.map((item) => {
              const k = KIND[item.kind]
              return (
                <li key={item.kind}>
                  <Link to={item.done ? '#' : k.route} onClick={(e) => { if (item.done) e.preventDefault(); else sfx('tap') }}
                    className="press grid grid-cols-[40px_1fr_auto] items-center gap-3 rounded-2xl bg-[var(--raise2)] p-2.5">
                    <span className="grid size-10 place-items-center rounded-xl text-[var(--ink)]" style={{ background: item.done ? 'var(--r-good)' : k.color }}>
                      <Icon name={item.done ? 'check' : k.icon} size={20} />
                    </span>
                    <span className={item.done ? 'opacity-70' : ''}>
                      <b className={`block leading-tight ${item.done ? 'line-through' : ''}`}>{item.title}</b>
                      <span className="text-sm text-[var(--muted)]">{item.subject?.name ?? 'All subjects'}</span>
                    </span>
                    <span className="mono text-xs font-bold">{item.done ? 'Done' : `${item.minutes}m`}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>

        <Link to="/mock" onClick={() => sfx('select')} className="surface press rise flex items-center gap-3 p-3" style={{ ['--i' as string]: 3 }}>
          <span className="grid size-11 place-items-center rounded-xl text-[var(--ink)]" style={{ background: 'var(--m-paper)' }}><Icon name="target" size={22} /></span>
          <span className="flex-1"><b className="block">Mock exam</b><span className="text-sm">Sit a past paper against the clock, then mark it</span></span>
          <Icon name="arrow" size={18} />
        </Link>

        <section className="surface rise p-4" style={{ ['--i' as string]: 4 }} aria-label="Exam countdown">
          <h2 className="label mb-3">Exam countdown</h2>
          {exams.length ? (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-2">
              {exams.map(({ subject, days }) => (
                <div key={subject!.id} className="rounded-2xl bg-[var(--raise2)] p-3" style={{ borderTop: `4px solid ${subject!.color}` }}>
                  <b className="block text-3xl leading-none font-extrabold" style={{ color: subject!.color }}>{days}<span className="ml-1 text-sm">days</span></b>
                  <span className="mt-1 block truncate text-sm font-bold">{subject!.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[var(--muted)]">Add your exam dates in <Link to="/settings" className="font-bold underline">Settings</Link>. In the last 14 days before an exam, the app switches to past papers.</p>
          )}
        </section>
      </div>
    </div>
  )
}
