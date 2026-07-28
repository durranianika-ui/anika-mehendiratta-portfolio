import { useEffect, useRef } from 'react'

/**
 * Lightweight drifting dust/particle field on a canvas.
 * ~60fps, pauses when off-screen, respects reduced-motion.
 */
export default function Particles({ className = '', density = 0.00008, color = '229,9,20' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')
    let raf, w, h, dpr, particles, running = true

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(160, Math.max(28, Math.floor(w * h * density)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25 - 0.05,
        a: Math.random() * 0.5 + 0.1,
        red: Math.random() < 0.16,
      }))
    }

    const draw = () => {
      if (!running) return
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.red
          ? `rgba(${color},${p.a})`
          : `rgba(235,235,240,${p.a * 0.7})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    build()
    if (!reduce) draw()
    else {
      // draw a single static frame
      running = false
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(235,235,240,${p.a * 0.5})`
        ctx.fill()
      }
    }

    const onResize = () => { build() }
    window.addEventListener('resize', onResize)

    // Pause when tab hidden to save cycles
    const onVis = () => {
      running = !document.hidden && !reduce
      if (running) draw()
    }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [density, color])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
