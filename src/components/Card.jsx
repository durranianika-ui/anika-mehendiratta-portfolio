import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SmartImage from './SmartImage.jsx'
import { useSound } from '../context/SoundContext.jsx'
import './Card.css'

// Standard 16:9 collection card (and the slightly larger "continue" variant).
export default function Card({ project, kind = 'poster', index = 0 }) {
  const wide = kind === 'continue'
  const navigate = useNavigate()
  const sound = useSound()
  const videoRef = useRef(null)

  const enter = () => {
    sound.play('hover')
    const v = videoRef.current
    if (v) { v.currentTime = 0; v.play?.().catch(() => {}) }
  }
  const leave = () => { const v = videoRef.current; if (v) v.pause?.() }

  return (
    <motion.article
      className={`card ${wide ? 'card--wide' : 'card--std'}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 6) * 0.05 }}
    >
      <button
        className="card__link"
        aria-label={`${project.title} — open case study`}
        onMouseEnter={enter}
        onMouseLeave={leave}
        onClick={() => { sound.play('play'); navigate(`/projects/${project.id}`) }}
      >
        <div className="card__media">
          {/* muted hover-preview video where available, else cinematic still */}
          {project.video ? (
            <video ref={videoRef} className="card__video" src={project.video} muted loop playsInline preload="metadata" poster={project.banner} />
          ) : null}
          <SmartImage src={project.banner} alt={project.title} className="card__art" />
          <div className="card__preview-glow" aria-hidden="true" />
          {project.stat && <span className="card__result">{project.stat}</span>}

          {wide && (
            <span className="card__progress" aria-hidden="true">
              <i style={{ width: `${45 + (index * 17) % 45}%` }} />
            </span>
          )}
        </div>

        {/* hover reveal — overlays poster, never clips */}
        <div className="card__reveal">
          <div className="card__actions">
            <span className="card__btn card__btn--play" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span className="card__btn card__btn--ring" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
            </span>
            <span className="card__match">{project.match}% Match</span>
          </div>
          <h3 className="card__title">{project.title}</h3>
          <div className="card__meta">
            <span className="card__stat">{project.stat}</span>
            <span className="card__dot" />
            <span>{project.category}</span>
            <span className="card__dot" />
            <span>{project.year}</span>
          </div>
          <div className="card__tags">
            {project.tags.slice(0, 3).map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>

        {/* persistent title (visible before hover, like Netflix rows at rest) */}
        <span className="card__resting">{project.title}</span>
      </button>
    </motion.article>
  )
}
