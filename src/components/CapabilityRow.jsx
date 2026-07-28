import { useRef } from 'react'
import { motion } from 'framer-motion'
import CapabilityCard from './CapabilityCard.jsx'
import { useSound } from '../context/SoundContext.jsx'
import './Row.css'

// Netflix row of capability cards (same rail behaviour as project rows).
export default function CapabilityRow({ label, cards }) {
  const trackRef = useRef(null)
  const sound = useSound()
  const scrollBy = (dir) => {
    const el = trackRef.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.82, behavior: 'smooth' })
  }
  if (!cards?.length) return null

  return (
    <section className="row">
      <motion.h2 className="row__label container" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <span className="accent-bar" />{label}
        <span className="row__explore">Capabilities you gain ›</span>
      </motion.h2>

      <div className="row__viewport">
        <button className="row__arrow row__arrow--left" aria-label="Scroll left" onClick={() => { scrollBy(-1); sound.play('click') }}>
          <Chevron dir="left" />
        </button>
        <div className="row__track" ref={trackRef}>
          {cards.map((c, i) => <CapabilityCard key={c.title} cap={c} index={i} />)}
        </div>
        <button className="row__arrow row__arrow--right" aria-label="Scroll right" onClick={() => { scrollBy(1); sound.play('click') }}>
          <Chevron dir="right" />
        </button>
      </div>
    </section>
  )
}

function Chevron({ dir }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  )
}
