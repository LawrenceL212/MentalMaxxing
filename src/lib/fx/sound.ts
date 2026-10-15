import { getState } from '../store'

export type Sfx = 'tap' | 'select' | 'reveal' | 'again' | 'hard' | 'good' | 'easy' | 'complete' | 'error'

let ctx: AudioContext | null = null

function audio(): AudioContext | null {
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AC) return null
  ctx ??= new AC()
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

interface ToneOpts {
  type?: OscillatorType
  gain?: number
  /** Glide to this frequency over the tone's length */
  to?: number
}

function tone(c: AudioContext, freq: number, at: number, dur: number, { type = 'sine', gain = 0.07, to }: ToneOpts = {}) {
  const t = c.currentTime + at
  const osc = c.createOscillator()
  const g = c.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, t)
  if (to) osc.frequency.exponentialRampToValueAtTime(to, t + dur)
  g.gain.setValueAtTime(0.0001, t)
  g.gain.exponentialRampToValueAtTime(gain, t + 0.012)
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
  osc.connect(g).connect(c.destination)
  osc.start(t)
  osc.stop(t + dur + 0.03)
}

const HAPTIC: Record<Sfx, number | number[]> = {
  tap: 8,
  select: 10,
  reveal: 14,
  again: [30, 40, 30],
  hard: 16,
  good: 18,
  easy: [12, 30, 12],
  complete: [20, 40, 20, 40, 60],
  error: [40, 30, 40],
}

/** Synthesised in the browser (no audio files). Respects the Sound & haptics setting. */
export function sfx(name: Sfx) {
  if (!getState().soundOn) return
  try {
    navigator.vibrate?.(HAPTIC[name])
  } catch {
    /* haptics are optional */
  }
  const c = audio()
  if (!c) return
  switch (name) {
    case 'tap':
      tone(c, 740, 0, 0.05, { type: 'triangle', gain: 0.04 })
      break
    case 'select':
      tone(c, 520, 0, 0.07, { type: 'triangle', gain: 0.05 })
      tone(c, 780, 0.04, 0.08, { type: 'triangle', gain: 0.04 })
      break
    case 'reveal':
      tone(c, 260, 0, 0.22, { type: 'sine', gain: 0.06, to: 880 })
      break
    case 'again':
      tone(c, 330, 0, 0.16, { type: 'sawtooth', gain: 0.035, to: 220 })
      tone(c, 247, 0.12, 0.22, { type: 'sawtooth', gain: 0.03, to: 165 })
      break
    case 'hard':
      tone(c, 392, 0, 0.16, { type: 'triangle', gain: 0.06 })
      break
    case 'good':
      tone(c, 523, 0, 0.12, { gain: 0.07 })
      tone(c, 659, 0.08, 0.18, { gain: 0.07 })
      break
    case 'easy':
      tone(c, 659, 0, 0.1, { gain: 0.06 })
      tone(c, 784, 0.07, 0.1, { gain: 0.06 })
      tone(c, 988, 0.14, 0.24, { gain: 0.06 })
      break
    case 'complete':
      ;[523, 659, 784, 1047].forEach((f, i) => tone(c, f, i * 0.09, 0.3, { type: 'triangle', gain: 0.07 }))
      tone(c, 1319, 0.4, 0.5, { gain: 0.05 })
      break
    case 'error':
      tone(c, 200, 0, 0.18, { type: 'square', gain: 0.03 })
      break
  }
}
