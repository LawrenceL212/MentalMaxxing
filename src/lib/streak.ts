import type { AppState } from './store'

const dayKey = (ms: number) => new Date(ms).toLocaleDateString('en-CA')

/** Distinct local days with any review or finished mission. */
export function activeDays(s: Pick<AppState, 'log' | 'missionLog'>): Set<string> {
  return new Set([...s.log.map((l) => dayKey(l.at)), ...s.missionLog.map((m) => dayKey(m.at))])
}

/** Consecutive active days ending today, or yesterday if today is not done yet. */
export function streakDays(s: Pick<AppState, 'log' | 'missionLog'>, now = Date.now()): number {
  const days = activeDays(s)
  let cursor = now
  if (!days.has(dayKey(cursor))) cursor -= 86_400_000
  let n = 0
  while (days.has(dayKey(cursor))) {
    n++
    cursor -= 86_400_000
  }
  return n
}

/** Reviews per local day for the last `count` days, oldest first. */
export function reviewsPerDay(log: AppState['log'], count = 7, now = Date.now()): { day: string; label: string; n: number }[] {
  return Array.from({ length: count }, (_, i) => {
    const ms = now - (count - 1 - i) * 86_400_000
    const key = dayKey(ms)
    return {
      day: key,
      label: new Date(ms).toLocaleDateString('en-GB', { weekday: 'narrow' }),
      n: log.filter((l) => dayKey(l.at) === key).length,
    }
  })
}

export const isToday = (ms: number, now = Date.now()) => dayKey(ms) === dayKey(now)
