export interface ParsedCard {
  front: string
  back: string
}

/** One pair per line: "term: definition", "term - definition", "term = definition", or tab separated. Bullets and numbering are ignored. */
export function parseOrganiser(text: string): ParsedCard[] {
  const out: ParsedCard[] = []
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/^\s*(?:[-*•▪●]|\d+[.)])\s*/, '').trim()
    if (!line) continue
    const m = line.match(/^(.{2,80}?)\s*(?:\t|:|\s[-–—=]\s)\s*(.+)$/)
    if (!m) continue
    const front = m[1].trim().replace(/[:\-–—=]+$/, '').trim()
    const back = m[2].trim()
    if (front && back) out.push({ front, back })
  }
  return out
}

/** Stable id so importing the same organiser twice never duplicates cards. */
export function organiserCardId(subjectId: string, topicKey: string, front: string): string {
  let h = 5381
  for (const ch of `${front.toLowerCase()}`) h = ((h << 5) + h + ch.charCodeAt(0)) | 0
  return `o-${subjectId}-${topicKey}-${(h >>> 0).toString(36)}`
}
