import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { readFileSync } from 'node:fs'
import type { Plugin } from 'vite'

/** Serves the on-device text reader (Tesseract) from our own site instead of a third-party CDN: the worker, the three LSTM cores and the English data. Emitted at build time from node_modules so nothing large is committed. */
function ocrAssets(): Plugin {
  const files: [string, string][] = [
    ['ocr/worker.min.js', 'node_modules/tesseract.js/dist/worker.min.js'],
    ['ocr/tesseract-core-lstm.wasm.js', 'node_modules/tesseract.js-core/tesseract-core-lstm.wasm.js'],
    ['ocr/tesseract-core-simd-lstm.wasm.js', 'node_modules/tesseract.js-core/tesseract-core-simd-lstm.wasm.js'],
    ['ocr/tesseract-core-relaxedsimd-lstm.wasm.js', 'node_modules/tesseract.js-core/tesseract-core-relaxedsimd-lstm.wasm.js'],
    ['ocr/eng.traineddata.gz', 'node_modules/@tesseract.js-data/eng/4.0.0_best_int/eng.traineddata.gz'],
  ]
  return {
    name: 'ocr-assets',
    generateBundle() {
      for (const [fileName, src] of files) this.emitFile({ type: 'asset', fileName, source: readFileSync(src) })
    },
  }
}

// GitHub Pages serves the site under /<repo-name>/
const base = process.env.VITE_BASE ?? '/MentalMaxxing/'

export default defineConfig({
  base,
  plugins: [
    react(),
    ocrAssets(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // The text reader is big and only needed when a photo is added, so it is not precached.
      workbox: { globIgnores: ['ocr/**'] },
      includeAssets: ['icon.svg'],
      manifest: {
        name: 'MentalMaxxing',
        short_name: 'MentalMaxxing',
        description: 'A study scheduler that tells you what to revise, when, and how it went.',
        theme_color: '#0a0f16',
        background_color: '#0a0f16',
        display: 'standalone',
        start_url: base,
        scope: base,
        icons: [{ src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }],
      },
    }),
  ],
  test: { environment: 'node' },
})
