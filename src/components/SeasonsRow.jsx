import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { seasons } from '../data/content.js'
import SmartImage from './SmartImage.jsx'
import { useSound } from '../context/SoundContext.jsx'
import './SeasonsRow.css'

// Career "seasons" as landscape episode cards that lead into the Professional timeline.
export default function SeasonsRow() {
  const trackRef = useRef(null)
  const sound = useSound()
  const scrollBy = (dir) => {
    const el = trackRef.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section className="srow">
      <motion.h2
        className="srow__label container"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="accent-bar" />Career Seasons
      </motion.h2>

      <div className="srow__viewport">
        <button className="srow__arrow srow__arrow--left" aria-label="Scroll left" onClick={() => scrollBy(-1)}>‹</button>
        <div className="srow__track" ref={trackRef}>
          {seasons.map((s, i) => (
            <motion.div
              key={s.season}
              className="scard"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 6) * 0.05 }}
            >
              <Link to="/career" className="scard__link" aria-label={`Season ${s.season}: ${s.title}`} onMouseEnter={() => sound.play('hover')} onClick={() => sound.play('click')}>
                <div className="scard__media">
                  <SmartImage src={s.art} alt="" />
                  <span className="scard__season">Season {s.season}</span>
                  <div className="scard__grad" />
                  <div className="scard__body">
                    <h3>{s.title}</h3>
                    <p className="scard__org">{s.org} · {s.period}</p>
                    <p className="scard__logline">{s.logline}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <button className="srow__arrow srow__arrow--right" aria-label="Scroll right" onClick={() => scrollBy(1)}>›</button>
      </div>
    </section>
  )
}
