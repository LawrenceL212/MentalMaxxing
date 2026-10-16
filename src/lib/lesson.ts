/** Turns a notes PDF the student imports into lesson pages. Everything happens on the device: the text is read in the browser and kept in IndexedDB, never uploaded or synced. */

export interface TextItem { str: string; x: number; y: number }

/** Joins positioned text pieces into lines (same baseline, left to right), top of the page first, with a blank line where the gap is large. */
export function itemsToText(items: TextItem[]): string {
  const rows: { y: number; parts: TextItem[] }[] = []
  for (const it of [...items].filter((i) => i.str.trim()).sort((a, b) => b.y - a.y || a.x - b.x)) {
    const row = rows.find((r) => Math.abs(r.y - it.y) < 3)
    if (row) row.parts.push(it)
    else rows.push({ y: it.y, parts: [it] })
  }
  const lines = rows.map((r) => ({ y: r.y, text: r.parts.sort((a, b) => a.x - b.x).map((p) => p.str.trim()).join(' ').replace(/\s+/g, ' ') }))
  const gaps = lines.slice(1).map((l, i) => lines[i].y - l.y).sort((a, b) => a - b)
  const normal = gaps[Math.floor((gaps.length - 1) / 2)] ?? 0
  return lines.map((l, i) => (i > 0 && normal && lines[i - 1].y - l.y > normal * 1.6 ? `\n${l.text}` : l.text)).join('\n')
}

/** Reads every page of a PDF in the browser. pdf.js is loaded on demand so it does not weigh down the rest of the app. */
export async function extractPdfText(file: File): Promise<string> {
  const pdfjs = await import('pdfjs-dist')
  const worker = (await import('pdfjs-dist/build/pdf.worker.min.mjs?url')).default
  pdfjs.GlobalWorkerOptions.workerSrc = worker
  const doc = await pdfjs.getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise
  const pages: string[] = []
  for (let n = 1; n <= doc.numPages; n++) {
    const content = await (await doc.getPage(n)).getTextContent()
    const items: TextItem[] = content.items.flatMap((i) => ('str' in i ? [{ str: i.str, x: i.transform[4], y: i.transform[5] }] : []))
    pages.push(itemsToText(items))
  }
  return pages.join('\n\n').trim()
}

/** Splits lesson text into bite-sized steps at blank lines (about `max` characters each), keeping a short heading line with the text after it. */
export function splitLesson(text: string, max = 700): string[] {
  const blocks = text.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean)
  const steps: string[] = []
  let cur = ''
  for (const b of blocks) {
    if (cur && (cur + '\n\n' + b).length > max) { steps.push(cur); cur = b }
    else cur = cur ? `${cur}\n\n${b}` : b
  }
  if (cur) steps.push(cur)
  return steps
}
