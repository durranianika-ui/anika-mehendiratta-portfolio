import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { audienceProfiles } from '../data/content.js'
import { useProfile } from '../context/ProfileContext.jsx'
import { useSound } from '../context/SoundContext.jsx'
import PersonaAvatar from '../components/PersonaAvatar.jsx'
import './WhoIsWatching.css'

export default function WhoIsWatching() {
  const navigate = useNavigate()
  const { setProfile } = useProfile()
  const sound = useSound()
  const [addMsg, setAddMsg] = useState(false)

  const choose = (p) => {
    sound.playOnce('select')
    setProfile(p.id)
    setTimeout(() => navigate(p.route || '/browse'), 560)
  }
  const key = (e, fn) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn() } }

  return (
    <motion.main className="who" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div className="who__inner">
        <motion.h1 className="who__title" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          Who&rsquo;s Watching?
        </motion.h1>

        <motion.ul className="who__row" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}>
          {audienceProfiles.map((p) => (
            <motion.li key={p.id} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}>
              <button className="who__card" onClick={() => choose(p)} onKeyDown={(e) => key(e, () => choose(p))} onMouseEnter={() => sound.playOnce('hover')} aria-label={`Enter as ${p.name}: ${p.subtitle}`}>
                <span className="who__tile">
                  <PersonaAvatar variant={p.id} color={p.color} size={168} radius={14} />
                </span>
                <span className="who__name">{p.name}</span>
                <span className="who__sub">{p.subtitle}</span>
              </button>
            </motion.li>
          ))}

          {/* Add Profile (aesthetic only) */}
          <motion.li variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}>
            <button className="who__card who__card--add" onClick={() => { sound.playOnce('hover'); setAddMsg(true) }} onKeyDown={(e) => key(e, () => setAddMsg(true))} aria-label="Add profile">
              <span className="who__tile who__tile--add"><span className="who__plus" aria-hidden="true">+</span></span>
              <span className="who__name">{addMsg ? 'Coming Soon' : 'Add Profile'}</span>
              <span className="who__sub">{addMsg ? 'Create your viewing profile' : ''}</span>
            </button>
          </motion.li>
        </motion.ul>
      </div>
    </motion.main>
  )
}
