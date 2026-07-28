import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SmartImage from './SmartImage.jsx'
import { useSound } from '../context/SoundContext.jsx'
import './TopTen.css'

// Netflix "Top 10": the rank numeral is artwork; a 2:3 poster overlaps it.
export default function TopTen({ label, items, linkBase = '/projects' }) {
  const trackRef = useRef(null)
  const navigate = useNavigate()
  const sound = useSound()
  const scrollBy = (dir) => {
    const el = trackRef.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }
  if (!items.length) return null

  return (
    <section className="topten">
      <motion.h2 className="topten__label container" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <span className="accent-bar" />{label}
      </motion.h2>

      <div className="topten__viewport">
        <button className="topten__arrow topten__arrow--left" aria-label="Scroll left" onClick={() => { scrollBy(-1); sound.play('click') }}>‹</button>
        <div className="topten__track" ref={trackRef}>
          {items.map((p, i) => (
            <motion.div key={p.id} className="topten__item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 6) * 0.06 }}>
              <span className="topten__num" data-n={i + 1} aria-hidden="true">{i + 1}</span>
              <button
                className="topten__poster"
                aria-label={`#${i + 1} — ${p.title}`}
                onMouseEnter={() => sound.play('hover')}
                onClick={() => { sound.play('play'); navigate(`${linkBase}/${p.id}`) }}
              >
                <SmartImage src={p.poster} alt={p.title} />
                <span className="topten__meta">
                  <strong>{p.stat || `${p.match}%`}</strong>
                  <em>{p.title}</em>
                </span>
              </button>
            </motion.div>
          ))}
        </div>
        <button className="topten__arrow topten__arrow--right" aria-label="Scroll right" onClick={() => { scrollBy(1); sound.play('click') }}>›</button>
      </div>
    </section>
  )
}
