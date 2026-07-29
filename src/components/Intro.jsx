import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSound } from '../context/SoundContext.jsx'
import './Intro.css'

const WORDMARK = `${import.meta.env.BASE_URL}brand/anika-wordmark.png`

/**
 * Cinematic name intro — the ANIKA wordmark blooms in with a red light sweep,
 * holds, then dilates away. ~1.8s. Original startup ident on entry.
 */
export default function Intro({ onDone }) {
  const sound = useSound()
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    sound.playOnce('ident')
    const t = setTimeout(onDone, reduce ? 900 : 1900)
    return () => clearTimeout(t)
  }, [onDone, sound])

  return (
    <motion.div className="intro" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div className="intro__curtain intro__curtain--l" aria-hidden="true" />
      <div className="intro__curtain intro__curtain--r" aria-hidden="true" />

      <motion.img
        className="intro__wordmark"
        src={WORDMARK}
        alt="Anika"
        initial={{ opacity: 0, scale: 1.08, filter: 'brightness(0.4)' }}
        animate={{
          opacity: [0, 1, 1, 1, 0],
          scale: [1.08, 1, 1, 1.02, 1.16],
          filter: ['brightness(0.4)', 'brightness(1.15)', 'brightness(1)', 'brightness(1)', 'brightness(0.6)'],
        }}
        transition={{ duration: 1.85, times: [0, 0.22, 0.5, 0.82, 1], ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.span
        className="intro__sweep"
        aria-hidden="true"
        initial={{ x: '-140%', opacity: 0 }}
        animate={{ x: ['-140%', '160%'], opacity: [0, 0.9, 0] }}
        transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  )
}
