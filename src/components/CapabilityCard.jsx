import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SmartImage from './SmartImage.jsx'
import { useSound } from '../context/SoundContext.jsx'
import './CapabilityCard.css'

export default function CapabilityCard({ cap, index = 0 }) {
  const [open, setOpen] = useState(false)
  const sound = useSound()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const openModal = () => { sound.play('modalOpen'); setOpen(true) }
  const close = () => { sound.play('modalClose'); setOpen(false) }

  return (
    <>
      <motion.article
        className="cap"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (index % 6) * 0.04 }}
      >
        <button className="cap__link" onMouseEnter={() => sound.play('hover')} onClick={openModal} aria-label={`${cap.title} — explore capability`}>
          <div className="cap__media">
            <SmartImage src={cap.img} alt="" className="cap__art" />
            <div className="cap__shade" aria-hidden="true" />
            {/* hover reveal */}
            <div className="cap__reveal">
              <p className="cap__value">{cap.value}</p>
              <div className="cap__chips">
                {cap.skills.slice(0, 4).map((s) => <span key={s}>{s}</span>)}
                {cap.skills.length > 4 && <span className="cap__more">+{cap.skills.length - 4}</span>}
              </div>
              <span className="cap__explore">Explore capability ›</span>
            </div>
          </div>
          <span className="cap__title">{cap.title}</span>
        </button>
      </motion.article>

      <AnimatePresence>
        {open && (
          <motion.div className="capm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} role="dialog" aria-label={cap.title}>
            <motion.div className="capm__panel" initial={{ y: 24, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 16, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} onClick={(e) => e.stopPropagation()}>
              <div className="capm__hero">
                <SmartImage src={cap.img} alt="" />
                <div className="capm__hero-shade" />
                <button className="capm__close" onClick={close} aria-label="Close">✕</button>
                <h3 className="capm__title">{cap.title}</h3>
              </div>
              <div className="capm__body">
                <p className="capm__value">{cap.value}</p>
                <div className="capm__section">
                  <span className="capm__label">Core skills</span>
                  <div className="capm__chips">
                    {cap.skills.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
                {cap.platforms?.length > 0 && (
                  <div className="capm__section">
                    <span className="capm__label">Platforms</span>
                    <div className="capm__chips capm__chips--plat">
                      {cap.platforms.map((p) => <span key={p}>{p}</span>)}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
