import Lenis from 'lenis'

let lenis = null

export function initLenis() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce || lenis) return lenis

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
    smoothWheel: true,
    touchMultiplier: 1.6,
  })

  let rafId
  const raf = (time) => {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)

  lenis._destroy = () => {
    cancelAnimationFrame(rafId)
    lenis.destroy()
    lenis = null
  }
  return lenis
}

export function scrollTop(immediate = true) {
  if (lenis) lenis.scrollTo(0, { immediate })
  else window.scrollTo(0, 0)
}

export function getLenis() {
  return lenis
}
