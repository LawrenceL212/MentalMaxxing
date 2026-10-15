import { useState } from 'react'
import { SUBJECTS } from '../../content/subjects'
import { actions } from '../../lib/store'
import { sfx } from '../../lib/fx/sound'
import Logo from '../../ui/Logo'

const DEFAULTS = ['maths', 'eng-lang', 'eng-lit', 'bio', 'chem', 'phys']

/** Three quick steps: year, subjects, optional exam dates. */
export default function Setup() {
  const [step, setStep] = useState(0)
  const [year, setYear] = useState(10)
  const [picked, setPicked] = useState<string[]>(DEFAULTS)
  const [dates, setDates] = useState<Record<string, string>>({})

  const subjects = SUBJECTS.filter((s) => !s.portfolioOnly)
  const chosen = subjects.filter((s) => picked.includes(s.id))
  const toggle = (id: string) => {
    sfx('select')
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))
  }
  const finish = () => {
    sfx('complete')
    const examDates = Object.fromEntries(Object.entries(dates).filter(([id, d]) => d && picked.includes(id)))
    actions.finishSetup({ yearGroup: year, subjectIds: picked, examDates })
  }

  return (
    <div className="mx-auto grid min-h-dvh w-full max-w-2xl content-center gap-5 px-5 py-8">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-extrabold"><Logo size={26} /> Set up</span>
        <span className="label">Step {step + 1} of 3</span>
      </div>
      <div className="flex gap-1.5" aria-hidden="true">
        {[0, 1, 2].map((n) => <span key={n} className="h-1.5 flex-1 rounded-full" style={{ background: n <= step ? 'var(--accent)' : 'var(--line)' }} />)}
      </div>

      <section key={step} className="surface pop grid gap-4 p-6">
        {step === 0 && (
          <>
            <h1 className="text-3xl font-extrabold">Which year are you in?</h1>
            <div className="grid grid-cols-3 gap-2">
              {[9, 10, 11].map((y) => (
                <button key={y} type="button" aria-pressed={year === y} onClick={() => { sfx('select'); setYear(y) }}
                  className={`press rounded-2xl py-6 text-2xl font-extrabold ${year === y ? 'bg-white text-[var(--ink)]' : 'bg-[var(--raise2)]'}`}>
                  Year {y}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h1 className="text-3xl font-extrabold">Which subjects do you take?</h1>
            <p className="text-[var(--muted)]">Tap to switch on or off. You can change this later in Settings.</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {subjects.map((s) => {
                const on = picked.includes(s.id)
                return (
                  <button key={s.id} type="button" aria-pressed={on} onClick={() => toggle(s.id)}
                    className="press flex items-center gap-3 rounded-2xl bg-[var(--raise2)] px-3.5 py-3 text-left"
                    style={{ boxShadow: on ? `inset 0 0 0 2px ${s.color}` : undefined }}>
                    <span className="size-4 shrink-0 rounded-full" style={{ background: on ? s.color : 'transparent', border: `2px solid ${s.color}` }} />
                    <span className="flex-1 font-bold">{s.name}</span>
                    <span className="mono text-xs text-[var(--muted)]">{s.board}</span>
                  </button>
                )
              })}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-3xl font-extrabold">When are your exams?</h1>
            <p className="text-[var(--muted)]">Optional. In the last 14 days before an exam, the app switches to past papers for that subject.</p>
            <div className="grid gap-2">
              {chosen.map((s) => (
                <label key={s.id} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl bg-[var(--raise2)] px-3.5 py-2.5">
                  <span className="flex items-center gap-2 font-bold"><span className="size-3 rounded-full" style={{ background: s.color }} />{s.name}</span>
                  <input type="date" value={dates[s.id] ?? ''} onChange={(e) => setDates({ ...dates, [s.id]: e.target.value })} className="field !w-auto !py-2 text-sm" />
                </label>
              ))}
            </div>
          </>
        )}
      </section>

      <div className="flex items-center justify-between gap-3">
        <button type="button" onClick={() => { sfx('tap'); setStep(Math.max(0, step - 1)) }} disabled={step === 0} className="btn btn-ghost">Back</button>
        {step < 2 ? (
          <button type="button" onClick={() => { sfx('select'); setStep(step + 1) }} disabled={step === 1 && picked.length === 0} className="btn btn-primary">Next</button>
        ) : (
          <button type="button" onClick={finish} className="btn btn-primary">Finish</button>
        )}
      </div>
    </div>
  )
}
