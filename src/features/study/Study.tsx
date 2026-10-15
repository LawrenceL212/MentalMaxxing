import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { actions, useAppState } from '../../lib/store'
import { NOTES } from '../../content/notes'
import { decksFor, type Deck } from '../../lib/flashcards'
import { subjectById } from '../../content/subjects'
import { sfx } from '../../lib/fx/sound'
import { schoolOrder, topicId } from '../../lib/curriculum'
import { organiserCardId, parseOrganiser } from '../../lib/organiser'
import { deleteFile, getFile, MAX_FILE_BYTES, putFile } from '../../lib/files'
import Icon from '../../ui/Icon'

const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5)

/** Free practice: flip through a topic's cards. Does not touch your review schedule. */
function DeckPlayer({ deck, color, onClose }: { deck: Deck; color: string; onClose: () => void }) {
  const [cards, setCards] = useState(deck.cards)
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const card = cards[i]

  const go = (d: number) => {
    sfx('tap')
    setI((x) => Math.min(cards.length - 1, Math.max(0, x + d)))
    setFlipped(false)
  }
  const flip = () => {
    sfx('reveal')
    setFlipped((f) => !f)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip() }
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div className="fixed inset-0 z-50 flex flex-col gap-3 overflow-auto bg-[var(--bg)] px-4 pt-[max(14px,env(safe-area-inset-top,0px))] pb-[max(16px,env(safe-area-inset-bottom,0px))]">
      <div className="mx-auto flex w-full max-w-2xl items-center gap-3">
        <button type="button" onClick={onClose} aria-label="Close deck" className="press grid size-10 place-items-center rounded-full bg-[var(--raise2)]"><Icon name="back" /></button>
        <b className="flex-1 truncate">{deck.topic}</b>
        <span className="mono text-sm font-bold">{i + 1}/{cards.length}</span>
      </div>
      <button type="button" onClick={flip} key={card.id + String(flipped)} aria-label={flipped ? 'Show question' : 'Show answer'}
        className="pop mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-4 rounded-[28px] p-6 text-left md:p-10"
        style={flipped ? { background: 'var(--raise)', border: `3px solid ${color}` } : { background: color, color: 'var(--ink)' }}>
        <span className="label" style={flipped ? undefined : { color: 'var(--ink)' }}>{flipped ? 'Answer' : 'Question'} · tap to flip</span>
        <span className={`leading-tight font-bold ${flipped ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'}`}>{flipped ? card.back : card.front}</span>
      </button>
      <div className="mx-auto grid w-full max-w-2xl grid-cols-[1fr_1fr_1fr] gap-2">
        <button type="button" className="btn btn-ghost" disabled={i === 0} onClick={() => go(-1)}>Back</button>
        <button type="button" className="btn btn-ghost" onClick={() => { sfx('select'); setCards(shuffle(cards)); setI(0); setFlipped(false) }}>Shuffle</button>
        <button type="button" className="btn btn-light" disabled={i === cards.length - 1} onClick={() => go(1)}>Next</button>
      </div>
    </div>
  )
}

const KNOW = [
  { level: 1 as const, label: 'Not yet', color: 'var(--r-again)' },
  { level: 2 as const, label: 'Shaky', color: 'var(--r-hard)' },
  { level: 3 as const, label: 'Solid', color: 'var(--r-good)' },
]

/** Learn a topic: read the key points, then say how well you know it. That feeds the fog map before any reviews exist. */
function TopicPage({ subjectId, deck: opened, onClose }: { subjectId: string; deck: Deck; onClose: () => void }) {
  const state = useAppState()
  // Re-read the deck so cards made from the organiser show up straight away.
  const deck = decksFor(state, subjectId).find((d) => d.topic === opened.topic) ?? opened
  const subject = subjectById(subjectId)
  const color = subject?.color ?? 'var(--accent)'
  const key = `${subjectId}:${deck.topic}`
  const notes = NOTES[deck.topic] ?? []
  const [flipping, setFlipping] = useState(false)
  const [msg, setMsg] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  const org = state.organisers[key] ?? { text: '', link: '' }
  const taughtAt = state.taught[key]
  const topicKey = /^\d/.test(deck.topic) ? deck.topic.split(' ')[0] : deck.topic.trim().toLowerCase()
  const parsed = parseOrganiser(org.text)

  useEffect(() => {
    let url = ''
    let live = true
    if (org.fileName) void getFile(key).then((f) => { if (f && live) { url = URL.createObjectURL(f); setFileUrl(url) } }).catch(() => undefined)
    else setFileUrl('')
    return () => { live = false; if (url) URL.revokeObjectURL(url) }
  }, [key, org.fileName])

  async function onFile(f: File | undefined) {
    if (!f) return
    if (f.size > MAX_FILE_BYTES) return setMsg('That file is over 15 MB. Try a smaller PDF or a photo.')
    try {
      await putFile(key, f)
      actions.setOrganiser(key, { fileName: f.name })
      setMsg('Saved on this device.')
    } catch {
      setMsg('Could not save the file here. Paste the text or a link instead.')
    }
  }

  function makeCards() {
    const n = actions.addCards(parsed.map((p) => ({ id: organiserCardId(subjectId, topicKey, p.front), subjectId, topic: deck.topic, front: p.front, back: p.back })))
    sfx('complete')
    setMsg(n ? `Made ${n} flashcard${n === 1 ? '' : 's'}. They join your Queue and this topic's deck.` : 'Those cards already exist.')
  }

  function rate(level: 1 | 2 | 3) {
    sfx('select')
    actions.setTopicKnow(key, level)
    const done = state.missionLog.some((m) => m.kind === 'learn' && m.detail === deck.topic && Date.now() - m.at < 86_400_000)
    if (!done) actions.logMission({ kind: 'learn', subjectId, detail: deck.topic })
  }
  const links = [...(subject?.resources ?? []), ...(state.customResources[subjectId] ?? [])]

  return (
    <div className="grid gap-4">
      <button type="button" onClick={onClose} className="press flex w-fit items-center gap-2 font-bold"><Icon name="back" size={18} />All topics</button>
      <section className="rise rounded-[28px] p-5 text-[var(--ink)] md:p-7" style={{ background: color }}>
        <span className="label !text-[var(--ink)]">{subject?.name} · {subject?.board} {subject?.code}</span>
        <h1 className="mt-2 text-3xl leading-tight font-extrabold tracking-tight md:text-4xl">{deck.topic}</h1>
      </section>

      <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <section className="surface rise grid content-start gap-3 p-5">
          <h2 className="label">Key points</h2>
          {notes.length ? (
            <ol className="grid gap-3">
              {notes.map((n, i) => (
                <li key={i} className="grid grid-cols-[1.75rem_1fr] gap-2 leading-snug">
                  <span className="mono grid size-7 place-items-center rounded-lg text-xs font-bold text-[var(--ink)]" style={{ background: color }}>{i + 1}</span>
                  <span className="text-[17px]">{n}</span>
                </li>
              ))}
            </ol>
          ) : <p>No notes written for this topic yet. Use the links to learn it, then test yourself.</p>}
          <p className="mono text-xs">Short summary for revision. Check the spec and your class notes for the full detail.</p>
        </section>

        <div className="grid content-start gap-4">
          <section className="surface rise grid content-start gap-2 p-4" style={{ ['--i' as string]: 1 }}>
            <h2 className="label">How well do you know this?</h2>
            <div className="grid grid-cols-3 gap-2" role="group" aria-label="How well do you know this topic?">
              {KNOW.map((k) => (
                <button key={k.level} type="button" aria-pressed={state.topicKnow[key] === k.level}
                  onClick={() => rate(k.level)}
                  className="press rounded-xl py-3 text-sm font-extrabold" style={state.topicKnow[key] === k.level ? { background: k.color, color: 'var(--ink)' } : { background: 'var(--raise2)' }}>{k.label}</button>
              ))}
            </div>
            <p className="text-sm">Be honest. This colours your fog map until you have reviewed cards.</p>
          </section>

          <section className="surface rise grid content-start gap-2 p-4" style={{ ['--i' as string]: 2 }}>
            <h2 className="label">In class</h2>
            <label className="flex items-center gap-3 font-bold">
              <input type="checkbox" className="size-5" checked={Boolean(taughtAt)} onChange={(e) => { sfx('tap'); actions.setTaught(key, e.target.checked) }} />
              We have covered this
            </label>
            {taughtAt && <label className="grid gap-1 text-sm font-bold">Taught on
              <input type="date" className="field" value={new Date(taughtAt).toLocaleDateString('en-CA')} onChange={(e) => e.target.value && actions.setTaught(key, true, new Date(`${e.target.value}T12:00:00`).getTime())} />
            </label>}
            <p className="text-sm">The app revises what your class has covered first, in the order you were taught it.</p>
          </section>

          <section className="surface rise grid content-start gap-2 p-4" style={{ ['--i' as string]: 2 }}>
            <h2 className="label">Test yourself</h2>
            <button type="button" className="btn btn-primary" onClick={() => { sfx('select'); setFlipping(true) }}>Flip flashcards ({deck.cards.length})</button>
          </section>

          <section className="surface rise grid content-start gap-1.5 p-4" style={{ ['--i' as string]: 3 }}>
            <h2 className="label">Learn more</h2>
            {links.map((r) => <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold underline"><Icon name="link" size={16} />{r.label}</a>)}
          </section>
        </div>
      </div>
      <section className="surface rise grid content-start gap-3 p-5">
        <h2 className="label">My knowledge organiser</h2>
        <p className="text-sm">Add the one your teacher gave you. Paste the text, add a link, or upload a photo or PDF (kept on this device). Put each fact on its own line like <b>Mitochondria: where aerobic respiration happens</b> and the app turns them into flashcards.</p>
        <textarea className="field min-h-32" aria-label="Knowledge organiser text" placeholder={'Term: definition\nTerm: definition'} value={org.text} onChange={(e) => actions.setOrganiser(key, { text: e.target.value })} />
        <div className="grid gap-2 md:grid-cols-2">
          <input className="field" aria-label="Organiser link" inputMode="url" placeholder="Link (Google Drive, school site)" value={org.link} onChange={(e) => actions.setOrganiser(key, { link: e.target.value })} />
          <label className="btn btn-ghost cursor-pointer">
            <Icon name="plus" size={18} />{org.fileName ? 'Replace file' : 'Upload photo or PDF'}
            <input type="file" accept="image/*,application/pdf" className="sr-only" onChange={(e) => void onFile(e.target.files?.[0])} />
          </label>
        </div>
        {org.link && /^https?:\/\//.test(org.link) && <a href={org.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold underline"><Icon name="link" size={16} />Open linked organiser</a>}
        {org.fileName && (
          <div className="grid gap-2">
            <div className="flex items-center justify-between gap-2 rounded-xl bg-[var(--raise2)] p-3 text-sm font-bold">
              <span className="truncate">{org.fileName}</span>
              <span className="flex shrink-0 gap-2">
                {fileUrl && <a href={fileUrl} target="_blank" rel="noreferrer" className="underline">Open</a>}
                <button type="button" className="underline" onClick={() => { void deleteFile(key); actions.setOrganiser(key, { fileName: undefined }); setMsg('File removed.') }}>Remove</button>
              </span>
            </div>
            {fileUrl && /\.(png|jpe?g|webp|gif)$/i.test(org.fileName) && <img src={fileUrl} alt="Your knowledge organiser" className="max-h-96 w-full rounded-xl object-contain" />}
          </div>
        )}
        <button type="button" className="btn btn-primary" disabled={!parsed.length} onClick={makeCards}>{parsed.length ? `Make ${parsed.length} flashcard${parsed.length === 1 ? '' : 's'} from this` : 'Paste lines like term: definition to make flashcards'}</button>
        {msg && <p role="status" className="text-sm font-bold">{msg}</p>}
      </section>
      {flipping && <DeckPlayer deck={deck} color={color} onClose={() => setFlipping(false)} />}
    </div>
  )
}

function TopicList({ decks, subjectId, onOpen, numbered }: { decks: Deck[]; subjectId: string; onOpen: (d: Deck) => void; numbered?: boolean }) {
  const state = useAppState()
  const subject = subjectById(subjectId)
  return (
    <ul className="grid gap-2 md:grid-cols-2">
      {decks.map((d, n) => {
        const k = KNOW.find((x) => x.level === state.topicKnow[topicId(subjectId, d.topic)])
        return (
          <li key={d.topic} className="rise" style={{ ['--i' as string]: n % 6 }}>
            <button type="button" onClick={() => { sfx('select'); onOpen(d) }}
              className="surface press flex w-full items-center gap-3 p-3 text-left" style={{ borderLeft: `6px solid ${subject?.color}` }}>
              {numbered && <span className="mono grid size-6 shrink-0 place-items-center rounded-md text-xs font-bold text-[var(--ink)]" style={{ background: subject?.color }}>{n + 1}</span>}
              <span className="flex-1 font-bold">{d.topic}</span>
              {k ? <span className="mono rounded-full px-2 py-0.5 text-[11px] font-bold text-[var(--ink)]" style={{ background: k.color }}>{k.label}</span> : <span className="mono text-xs font-bold">{state.organisers[topicId(subjectId, d.topic)] ? 'Organiser' : NOTES[d.topic] ? 'Notes' : 'Cards'}</span>}
              <Icon name="arrow" size={18} />
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default function Study() {
  const state = useAppState()
  const [subjectId, setSubjectId] = useState(state.subjectIds[0] ?? 'maths')
  const [open, setOpen] = useState<Deck | null>(null)
  const [params, setParams] = useSearchParams()
  const subject = subjectById(subjectId)
  const decks = decksFor(state, subjectId)

  // Deep link from Home: /study?s=<subject>&t=<topic> opens that topic.
  const ps = params.get('s')
  const pt = params.get('t')
  useEffect(() => {
    if (!ps || !pt) return
    setSubjectId(ps)
    const d = decksFor(state, ps).find((x) => x.topic === pt)
    if (d) setOpen(d)
    setParams({}, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ps, pt])

  const order = schoolOrder(state, subjectId)
  const taughtDecks = order.taught.map((t) => decks.find((d) => d.topic === t)).filter((d): d is Deck => Boolean(d))
  const otherDecks = decks.filter((d) => !order.taught.includes(d.topic))

  if (open) return <TopicPage subjectId={subjectId} deck={open} onClose={() => setOpen(null)} />

  return (
    <div className="grid gap-4">
      <section className="rise rounded-[28px] bg-[var(--m-shuffle)] p-5 text-[var(--ink)] md:p-7">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Study</h1>
        <p className="mt-2 font-medium">Pick a topic to learn it: key points, then flashcards. Tell the app how well you know it and your fog map fills in.</p>
      </section>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Subject">
        {state.subjectIds.map((id) => {
          const s = subjectById(id)
          if (!s) return null
          return (
            <button key={id} type="button" aria-pressed={id === subjectId} onClick={() => { sfx('select'); setSubjectId(id) }}
              className="chip press" style={id === subjectId ? { background: s.color, color: 'var(--ink)' } : undefined}>{s.name}</button>
          )
        })}
      </div>

      {decks.length === 0 ? (
        <p className="surface p-5">No topics listed for {subject?.name} yet. Add your own cards in Settings and they will appear here.</p>
      ) : (
        <>
          {taughtDecks.length > 0 && (
            <>
              <h2 className="label">In class so far, in the order you were taught</h2>
              <TopicList decks={taughtDecks} subjectId={subjectId} onOpen={setOpen} numbered />
            </>
          )}
          <h2 className="label">{taughtDecks.length ? 'Coming up' : 'All topics'}</h2>
          {taughtDecks.length === 0 && <p className="text-sm">Open a topic and tick "We have covered this" as your class gets to it. The app then revises those first, in your school order.</p>}
          <TopicList decks={otherDecks} subjectId={subjectId} onOpen={setOpen} />
        </>
      )}
    </div>
  )
}
