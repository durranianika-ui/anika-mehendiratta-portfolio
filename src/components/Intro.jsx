import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Wordmark from './Wordmark.jsx'
import './Intro.css'

/**
 * State 1 — name intro. Full black, one centered red wordmark with a small
 * sparkle, subtle fade in → hold → fade out (~1.5s), then onDone().
 */
export default function Intro({ onDone }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = setTimeout(onDone, reduce ? 900 : 1650)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      className="intro"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="intro__mark"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, -4] }}
        transition={{ duration: 1.55, times: [0, 0.28, 0.72, 1], ease: 'easeInOut' }}
      >
        <Wordmark className="intro__word" />
        <motion.span
          className="intro__sparkle"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 90, 180] }}
          transition={{ duration: 1, delay: 0.55, ease: 'easeOut' }}
        >
          ✦
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
