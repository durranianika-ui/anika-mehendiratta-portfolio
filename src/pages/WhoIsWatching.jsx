import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { audienceProfiles, profile } from '../data/content.js'
import { useSound } from '../context/SoundContext.jsx'
import PersonaAvatar from '../components/PersonaAvatar.jsx'
import ALogo from '../components/ALogo.jsx'
import './WhoIsWatching.css'

/**
 * PROFILE_SELECTION state — a controlled, full-screen application screen (not a
 * routed page). Renders above everything; no site navigation exists while it is
 * shown. Selecting a profile calls onSelect(id); the parent handles the loading
 * transition and routing.
 */
export default function ProfileSelect({ onSelect, onReplay }) {
  const sound = useSound()
  const [manage, setManage] = useState(false)
  const [busy, setBusy] = useState(false)

  const choose = (p) => {
    if (busy) return
    setBusy(true)
    onSelect(p.id)
  }
  const onKey = (e, fn) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn() } }

  return (
    <motion.div
      className="who"
      role="dialog"
      aria-modal="true"
      aria-label="Choose a profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <nav className="who__shortcuts" aria-label="Quick actions">
        <a href={profile.resumeFile} download className="who__sc who__sc--primary" onMouseEnter={() => sound.playOnce('hover')}>Download CV</a>
        <a href={profile.socials.LinkedIn} target="_blank" rel="noreferrer noopener" className="who__sc" onMouseEnter={() => sound.playOnce('hover')}>LinkedIn</a>
        <a href={profile.socials.Email} className="who__sc" onMouseEnter={() => sound.playOnce('hover')}>Email</a>
      </nav>

      <div className="who__inner">
        <ALogo size={40} className="who__logo" />

        <h1 className="who__title">Who&rsquo;s Watching?</h1>

        <ul className="who__profiles">
          {audienceProfiles.map((p) => (
            <li key={p.id} className="who__item">
              <button
                type="button"
                className="who__card"
                onClick={() => choose(p)}
                onKeyDown={(e) => onKey(e, () => choose(p))}
                onMouseEnter={() => sound.playOnce('hover')}
                aria-label={`Enter as ${p.name}: ${p.subtitle}`}
              >
                <span className="who__tile"><PersonaAvatar variant={p.id} color={p.color} radius={12} /></span>
                <span className="who__name">{p.name}</span>
              </button>
            </li>
          ))}

          <li className="who__item who__item--add">
            <button
              type="button"
              className="who__card"
              onClick={() => sound.playOnce('hover')}
              aria-label="Add profile (coming soon)"
            >
              <span className="who__add"><span className="who__plus" aria-hidden="true">+</span></span>
              <span className="who__name">Add Profile</span>
            </button>
          </li>
        </ul>

        <button type="button" className="who__manage" onClick={() => { setManage((m) => !m); sound.playOnce('click') }}>
          Manage Profiles
        </button>

        {manage && (
          <motion.div className="who__settings" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
            <button type="button" className="who__replay" onClick={onReplay}>↻ Replay intro</button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
