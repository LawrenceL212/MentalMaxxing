/** Reads the text in a photo on this device. Classic text recognition (Tesseract), not an AI service: the photo is never uploaded. The recogniser and English data (about 6 MB) come from this site the first time and are then cached by the browser. The photo is read twice (as taken, and with lighting flattened) and the surer result is kept. Handwriting is only partly readable, so the student can correct the result. */
/** Grey, stretch contrast and flatten uneven lighting so pen on paper stands out; returns null if the browser cannot do it. */
async function cleanUp(image: File): Promise<Blob | null> {
  try {
    const bmp = await createImageBitmap(image)
    const scale = Math.min(2.5, 2400 / Math.max(bmp.width, bmp.height))
    const w = Math.round(bmp.width * scale), h = Math.round(bmp.height * scale)
    const cv = document.createElement('canvas')
    cv.width = w; cv.height = h
    const ctx = cv.getContext('2d')
    if (!ctx) return null
    ctx.drawImage(bmp, 0, 0, w, h)
    const img = ctx.getImageData(0, 0, w, h)
    const g = new Uint8ClampedArray(w * h)
    for (let i = 0; i < g.length; i++) g[i] = img.data[i * 4] * 0.3 + img.data[i * 4 + 1] * 0.59 + img.data[i * 4 + 2] * 0.11
    // Local threshold: a pixel is ink when clearly darker than the average of its neighbourhood (integral image).
    const iw = w + 1
    const sum = new Float64Array(iw * (h + 1))
    for (let y = 0; y < h; y++) { let row = 0; for (let x = 0; x < w; x++) { row += g[y * w + x]; sum[(y + 1) * iw + x + 1] = sum[y * iw + x + 1] + row } }
    const r = Math.max(12, Math.round(Math.min(w, h) / 40))
    for (let y = 0; y < h; y++) {
      const y0 = Math.max(0, y - r), y1 = Math.min(h, y + r + 1)
      for (let x = 0; x < w; x++) {
        const x0 = Math.max(0, x - r), x1 = Math.min(w, x + r + 1)
        const mean = (sum[y1 * iw + x1] - sum[y0 * iw + x1] - sum[y1 * iw + x0] + sum[y0 * iw + x0]) / ((x1 - x0) * (y1 - y0))
        const v = g[y * w + x] < mean * 0.85 ? 0 : 255
        const o = (y * w + x) * 4
        img.data[o] = img.data[o + 1] = img.data[o + 2] = v
      }
    }
    ctx.putImageData(img, 0, 0)
    return await new Promise((res) => cv.toBlob(res, 'image/png'))
  } catch {
    return null
  }
}

export async function readPhoto(image: File, onProgress?: (fraction: number) => void): Promise<string> {
  const { createWorker } = await import('tesseract.js')
  // Built sites serve the reader from our own host (see vite.config.ts); `npm run dev` falls back to the library's CDN.
  const local = import.meta.env.PROD ? new URL(`${import.meta.env.BASE_URL}ocr/`, location.origin).href : undefined
  const worker = await createWorker('eng', undefined, {
    ...(local ? { workerPath: `${local}worker.min.js`, corePath: local, langPath: local } : {}),
    logger: (m: { status: string; progress: number }) => { if (m.status === 'recognizing text') onProgress?.(m.progress) },
  })
  try {
    // Read the photo as taken and again after clean-up; keep whichever the reader is more sure of.
    const clean = await cleanUp(image)
    const first = await worker.recognize(image)
    if (!clean) return first.data.text.trim()
    onProgress?.(0)
    const second = await worker.recognize(clean)
    return (second.data.confidence > first.data.confidence ? second : first).data.text.trim()
  } finally {
    await worker.terminate()
  }
}
