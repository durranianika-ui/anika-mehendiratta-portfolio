import { useEffect, useMemo } from 'react'

/* Cinematic muted video previews, Netflix-style but performance-safe:
   - previews run only on fine-pointer (desktop) devices without a
     prefers-reduced-motion preference — mobile gets the poster image
   - playback is gated by an IntersectionObserver so clips play while
     visible and pause the moment they leave the viewport               */

export function useMotionPreviewAllowed() {
  return useMemo(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    return !reduced && finePointer
  }, [])
}

export function useInViewPlayback(videoRef, enabled, threshold = 0.35) {
  useEffect(() => {
    if (!enabled) return
    const v = videoRef.current
    if (!v || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play?.().catch(() => {})
        else v.pause?.()
      },
      { threshold },
    )
    io.observe(v)
    return () => { io.disconnect(); v.pause?.() }
  }, [videoRef, enabled, threshold])
}
