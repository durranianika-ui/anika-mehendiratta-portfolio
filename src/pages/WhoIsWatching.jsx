import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { audienceProfiles } from '../data/content.js'
import { useProfile } from '../context/ProfileContext.jsx'
import { useSound } from '../context/SoundContext.jsx'
import PersonaAvatar from '../components/PersonaAvatar.jsx'
import ALogo from '../components/ALogo.jsx'
import './WhoIsWatching.css'

export default function WhoIsWatching() {
  const navigate = useNavigate()
  const { setProfile } = useProfile()
  const sound = useSound()
  const [manage, setManage] = useState(false)

  const choose = (p) => {
    sound.playOnce('select')
    setProfile(p.id)
    setTimeout(() => navigate(p.route || '/browse'), 560)
  }
  const key = (e, fn) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn() } }
  const replayIntro = () => { try { sessionStorage.removeItem('introPlayed') } catch { /* noop */ } navigate('/', { replace: true }) }

  return (
    <motion.main className="who" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <a href="#" onClick={(e) => { e.preventDefault(); }} className="who__logo" aria-hidden="true"><ALogo size={30} /></a>

      <div className="who__inner">
        <motion.h1 className="who__title" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          Who&rsquo;s Watching?
        </motion.h1>

        <motion.ul className="who__profiles" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } } }}>
          {audienceProfiles.map((p) => (
            <motion.li key={p.id} className="who__item" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}>
              <button className="who__card" onClick={() => choose(p)} onKeyDown={(e) => key(e, () => choose(p))} onMouseEnter={() => sound.playOnce('hover')} aria-label={`Enter as ${p.name}: ${p.subtitle}`}>
                <span className="who__tile"><PersonaAvatar variant={p.id} color={p.color} radius={12} /></span>
                <span className="who__name">{p.name}</span>
              </button>
            </motion.li>
          ))}

          <motion.li className="who__item who__item--add" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}>
            <button className="who__card" onClick={() => sound.playOnce('hover')} aria-label="Add profile (coming soon)">
              <span className="who__add"><span className="who__plus" aria-hidden="true">+</span></span>
              <span className="who__name">Add Profile</span>
            </button>
          </motion.li>
        </motion.ul>

        <button className="who__manage" onClick={() => { setManage((m) => !m); sound.playOnce('click') }}>Manage Profiles</button>

        {manage && (
          <motion.div className="who__settings" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
            <button className="who__replay" onClick={replayIntro}>↻ Replay intro</button>
          </motion.div>
        )}
      </div>
    </motion.main>
  )
}
