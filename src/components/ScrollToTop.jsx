import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initLenis, scrollTop } from '../lib/lenis.js'

// Initialise smooth scrolling and reset position on route change.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const lenis = initLenis()
    return () => lenis?._destroy?.()
  }, [])

  useEffect(() => {
    scrollTop(true)
  }, [pathname])

  return null
}
