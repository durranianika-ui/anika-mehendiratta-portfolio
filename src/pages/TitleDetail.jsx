import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { projects } from '../data/content.js'
import { pageTransition, fadeUp, stagger } from '../lib/motion.js'
import SectionReveal from '../components/SectionReveal.jsx'
import Row from '../components/Row.jsx'
import Footer from '../components/Footer.jsx'
import SmartImage from '../components/SmartImage.jsx'
import './TitleDetail.css'

export default function TitleDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const [lightbox, setLightbox] = useState(null)

  if (!project) return <Navigate to="/" replace />

  const more = projects.filter((p) => p.id !== project.id).slice(0, 6)

  return (
    <motion.main {...pageTransition} className="title">
      {/* --- HERO BANNER --- */}
      <header className="title__hero">
        <div className="title__hero-media">
          {project.video ? (
            <video src={project.video} autoPlay muted loop playsInline poster={project.banner} />
          ) : (
            <SmartImage src={project.banner} alt="" eager />
          )}
          <div className="title__scrim" />
          <div className="title__scrim title__scrim--left" />
        </div>

        <div className="container title__hero-content">
          <motion.div variants={stagger(0.09, 0.1)} initial="hidden" animate="show">
            <motion.p className="eyebrow title__kicker" variants={fadeUp}>
              {project.category} · {project.year}
            </motion.p>
            <motion.h1 className="title__name" variants={fadeUp}>{project.title}</motion.h1>
            <motion.p className="title__logline" variants={fadeUp}>{project.logline}</motion.p>

            <motion.div className="title__meta" variants={fadeUp}>
              <span className="title__match">{project.match}% Match</span>
              <span className="title__badge">{project.maturity}</span>
              <span>{project.duration}</span>
              <span className="title__role">{project.role}</span>
            </motion.div>

            <motion.div className="title__actions" variants={fadeUp}>
              <a href="#case" className="btn btn--primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                Play Case Study
              </a>
              <Link to="/hire-me" className="btn btn--ghost">+ Work with me</Link>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* --- BODY --- */}
      <div className="container title__body">
        <div className="title__grid">
          <SectionReveal className="title__overview">
            <p className="title__summary">{project.summary}</p>
            <div className="title__tags">
              {project.tags.map((t) => <span key={t}>{t}</span>)}
            </div>
          </SectionReveal>

          <SectionReveal className="title__impact" amount={0.4}>
            <h3 className="title__sub"><span className="accent-bar" />Business Impact</h3>
            <div className="title__impact-grid">
              {project.impact.map((m) => (
                <div key={m.v} className="impact">
                  <span className="impact__k">{m.k}</span>
                  <span className="impact__v">{m.v}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Case study */}
        <section id="case" className="title__case">
          {project.caseStudy.map((s, i) => (
            <SectionReveal className="case" key={s.h} amount={0.5}>
              <span className="case__no">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </SectionReveal>
          ))}
        </section>

        {/* Gallery */}
        {project.gallery?.length > 0 && (
          <section className="title__gallery">
            <h3 className="title__sub"><span className="accent-bar" />Screens</h3>
            <div className="gallery">
              {project.gallery.map((src, i) => (
                <motion.button
                  key={src}
                  className={`gallery__item ${i === 0 ? 'gallery__item--wide' : ''}`}
                  onClick={() => setLightbox(src)}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  aria-label="Enlarge screenshot"
                >
                  <SmartImage src={src} alt={`${project.title} screen ${i + 1}`} />
                </motion.button>
              ))}
            </div>
          </section>
        )}

        {/* Lessons */}
        {project.lessons && (
          <SectionReveal className="title__lessons">
            <p className="eyebrow">Lessons learned</p>
            <p className="title__quote">“{project.lessons}”</p>
          </SectionReveal>
        )}
      </div>

      {/* More like this */}
      <div className="title__more">
        <Row label="More Like This" items={more} kind="poster" />
      </div>

      <Footer />

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          className="lightbox"
          onClick={() => setLightbox(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          role="dialog"
          aria-label="Enlarged image"
        >
          <motion.img
            src={lightbox}
            alt=""
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <button className="lightbox__close" aria-label="Close">✕</button>
        </motion.div>
      )}
    </motion.main>
  )
}
