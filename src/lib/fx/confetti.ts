const COLORS = ['#39d7ff', '#ff8a3d', '#b38bff', '#ffd43b', '#ff5c8a', '#3ddc84']

/** A short burst of confetti. Skipped when the device asks for reduced motion. */
export function confetti(origin?: { x: number; y: number }) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const canvas = document.createElement('canvas')
  canvas.setAttribute('aria-hidden', 'true')
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:60'
  const dpr = window.devicePixelRatio || 1
  canvas.width = window.innerWidth * dpr
  canvas.height = window.innerHeight * dpr
  document.body.appendChild(canvas)
  const g = canvas.getContext('2d')
  if (!g) return canvas.remove()
  g.scale(dpr, dpr)

  const ox = origin?.x ?? window.innerWidth / 2
  const oy = origin?.y ?? window.innerHeight * 0.38
  const bits = Array.from({ length: 110 }, () => ({
    x: ox,
    y: oy,
    vx: (Math.random() - 0.5) * 16,
    vy: -Math.random() * 15 - 4,
    w: Math.random() * 7 + 4,
    h: Math.random() * 4 + 3,
    a: Math.random() * Math.PI * 2,
    va: (Math.random() - 0.5) * 0.5,
    c: COLORS[Math.floor(Math.random() * COLORS.length)],
  }))

  let frames = 0
  const tick = () => {
    frames++
    g.clearRect(0, 0, window.innerWidth, window.innerHeight)
    for (const b of bits) {
      b.vy += 0.38
      b.vx *= 0.99
      b.x += b.vx
      b.y += b.vy
      b.a += b.va
      g.save()
      g.translate(b.x, b.y)
      g.rotate(b.a)
      g.globalAlpha = Math.max(0, 1 - frames / 130)
      g.fillStyle = b.c
      g.fillRect(-b.w / 2, -b.h / 2, b.w, b.h)
      g.restore()
    }
    if (frames < 130) requestAnimationFrame(tick)
    else canvas.remove()
  }
  requestAnimationFrame(tick)
}
