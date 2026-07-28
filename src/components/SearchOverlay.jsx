import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects, skillCollections } from '../data/content.js'
import { useSound } from '../context/SoundContext.jsx'
import './SearchOverlay.css'

export default function SearchOverlay({ onClose }) {
  const [q, setQ] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const sound = useSound()

  useEffect(() => {
    inputRef.current?.focus()
    sound.play('modalOpen')
    const onKey = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const close = () => { sound.play('modalClose'); onClose() }

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return projects.slice(0, 6).map((p) => ({ type: 'Project', title: p.title, sub: p.category, to: `/projects/${p.id}`, img: p.poster }))
    const proj = projects
      .filter((p) => [p.title, p.category, p.logline, ...(p.tags || [])].join(' ').toLowerCase().includes(term))
      .map((p) => ({ type: 'Project', title: p.title, sub: p.category, to: `/projects/${p.id}`, img: p.poster }))
    const skills = skillCollections
      .filter((c) => (c.name + ' ' + c.items.join(' ')).toLowerCase().includes(term))
      .map((c) => ({ type: 'Skill', title: c.name, sub: c.blurb, to: '/skills' }))
    return [...proj, ...skills].slice(0, 10)
  }, [q])

  const go = (to) => { sound.play('click'); onClose(); navigate(to) }

  return (
    <motion.div className="search" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} role="dialog" aria-label="Search">
      <motion.div className="search__panel" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} onClick={(e) => e.stopPropagation()}>
        <div className="search__field">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" strokeLinecap="round" /></svg>
          <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects, skills, results…" aria-label="Search query" />
          <button className="search__close" onClick={close} aria-label="Close">Esc</button>
        </div>
        <ul className="search__results">
          {results.map((r) => (
            <li key={r.type + r.title}>
              <button onClick={() => go(r.to)} onMouseEnter={() => sound.play('hover')}>
                {r.img ? <img src={r.img} alt="" loading="lazy" /> : <span className="search__dot" />}
                <span className="search__text"><strong>{r.title}</strong><em>{r.type} · {r.sub}</em></span>
                <span className="search__arrow">›</span>
              </button>
            </li>
          ))}
          {q && results.length === 0 && <li className="search__empty">No matches. Try “revenue”, “automation”, “Google Ads”.</li>}
        </ul>
      </motion.div>
    </motion.div>
  )
}
