import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSound } from '../context/SoundContext.jsx'
import './Intro.css'

const A = `${import.meta.env.BASE_URL}brand/a.png`
const WORDMARK = `${import.meta.env.BASE_URL}brand/anika.png`

/**
 * Cinematic entry: the A icon reveals, then transitions into the ANIKA
 * wordmark, then continues to profile selection. Transparent assets, no boxes.
 */
export default function Intro({ onDone }) {
  const sound = useSound()
  const [phase, setPhase] = useState(0) // 0 = A icon, 1 = ANIKA wordmark

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    sound.playOnce('ident')
    if (reduce) { const t = setTimeout(onDone, 900); return () => clearTimeout(t) }
    const t1 = setTimeout(() => setPhase(1), 950)
    const t2 = setTimeout(onDone, 2350)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone, sound])

  return (
    <motion.div className="intro" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <div className="intro__glow" aria-hidden="true" />
      <AnimatePresence mode="wait">
        {phase === 0 ? (
          <motion.img
            key="a"
            className="intro__a"
            src={A}
            alt="Anika"
            initial={{ opacity: 0, scale: 0.6, filter: 'brightness(0.3)' }}
            animate={{ opacity: 1, scale: 1, filter: 'brightness(1.1)' }}
            exit={{ opacity: 0, scale: 1.6, filter: 'blur(6px) brightness(0.5)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        ) : (
          <motion.img
            key="wm"
            className="intro__wordmark"
            src={WORDMARK}
            alt="Anika"
            initial={{ opacity: 0, scale: 1.12, filter: 'brightness(0.4)' }}
            animate={{ opacity: 1, scale: 1, filter: 'brightness(1.05)' }}
            exit={{ opacity: 0, scale: 1.06 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
          </motion.img>
        )}
      </AnimatePresence>
      {phase === 1 && (
        <motion.span
          className="intro__sweep"
          aria-hidden="true"
          initial={{ x: '-140%', opacity: 0 }}
          animate={{ x: '160%', opacity: [0, 0.85, 0] }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </motion.div>
  )
}
