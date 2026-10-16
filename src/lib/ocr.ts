/** Reads the text in a photo on this device. Classic text recognition (Tesseract), not an AI service: the photo is never uploaded. The recogniser and English data (about 6 MB) come from this site the first time and are then cached by the browser. Handwriting is only partly readable, so the student can correct the result. */
export async function readPhoto(image: File, onProgress?: (fraction: number) => void): Promise<string> {
  const { createWorker } = await import('tesseract.js')
  // Built sites serve the reader from our own host (see vite.config.ts); `npm run dev` falls back to the library's CDN.
  const local = import.meta.env.PROD ? new URL(`${import.meta.env.BASE_URL}ocr/`, location.origin).href : undefined
  const worker = await createWorker('eng', undefined, {
    ...(local ? { workerPath: `${local}worker.min.js`, corePath: local, langPath: local } : {}),
    logger: (m: { status: string; progress: number }) => { if (m.status === 'recognizing text') onProgress?.(m.progress) },
  })
  try {
    const { data } = await worker.recognize(image)
    return data.text.trim()
  } finally {
    await worker.terminate()
  }
}
