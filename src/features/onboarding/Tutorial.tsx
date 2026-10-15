import { useEffect, useState } from 'react'
import { GUIDE } from '../../content/guide'
import { sfx } from '../../lib/fx/sound'
import Icon from '../../ui/Icon'

/** Quick walkthrough shown once after setup, and again from Help. */
export default function Tutorial({ onClose }: { onClose: () => void }) {
  const [i, setI] = useState(0)
  const step = GUIDE[i]
  const last = i === GUIDE.length - 1

  const next = () => {
    sfx(last ? 'complete' : 'select')
    if (last) onClose()
    else setI(i + 1)
  }
  const back = () => {
    sfx('tap')
    setI(Math.max(0, i - 1))
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') next()
      if (e.key === 'ArrowLeft') back()
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div className="mx-auto grid min-h-dvh w-full max-w-xl content-center gap-5 px-5 py-8">
      <div className="flex items-center justify-between">
        <span className="label">Quick tour · {i + 1} of {GUIDE.length}</span>
        <button type="button" onClick={onClose} className="text-sm font-bold underline underline-offset-4">Skip</button>
      </div>

      <article key={i} className="surface pop grid gap-4 p-6">
        <span className="grid size-14 place-items-center rounded-2xl bg-[var(--accent)] text-[var(--ink)]">
          <Icon name={step.icon} size={28} />
        </span>
        <h1 className="text-3xl leading-tight font-extrabold">{step.title}</h1>
        <p className="text-lg leading-snug text-[var(--muted)]">{step.body}</p>
        {step.points && (
          <ul className="grid gap-2">
            {step.points.map((p) => (
              <li key={p} className="flex gap-2.5 leading-snug">
                <Icon name="check" size={20} className="mt-0.5 shrink-0 text-[var(--r-good)]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
      </article>

      <div className="flex items-center justify-between gap-3">
        <button type="button" onClick={back} disabled={i === 0} className="btn btn-ghost">Back</button>
        <div className="flex gap-1.5" aria-hidden="true">
          {GUIDE.map((_, n) => (
            <span key={n} className="h-2 rounded-full transition-all" style={{ width: n === i ? 22 : 8, background: n === i ? 'var(--accent)' : 'var(--line)' }} />
          ))}
        </div>
        <button type="button" onClick={next} className="btn btn-primary">{last ? 'Start' : 'Next'}</button>
      </div>
    </div>
  )
}
