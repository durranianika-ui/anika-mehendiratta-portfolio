import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { audienceProfiles } from '../data/content.js'
import { useProfile } from '../context/ProfileContext.jsx'
import { useSound } from '../context/SoundContext.jsx'
import MonsterAvatar from '../components/MonsterAvatar.jsx'
import './WhoIsWatching.css'

export default function WhoIsWatching() {
  const navigate = useNavigate()
  const { setProfile } = useProfile()
  const sound = useSound()

  const choose = (p) => {
    sound.playOnce('ident') // original streaming-style ident (one-shot, on gesture)
    setProfile(p.id)
    setTimeout(() => navigate(p.route || '/browse'), 550)
  }
  const onKey = (e, p) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(p) }
  }

  return (
    <motion.main
      className="who"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="who__inner">
        <motion.h1
          className="who__title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Who&rsquo;s Watching?
        </motion.h1>

        <motion.ul
          className="who__row"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
        >
          {audienceProfiles.map((p) => (
            <motion.li
              key={p.id}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <button
                className="who__card"
                onClick={() => choose(p)}
                onKeyDown={(e) => onKey(e, p)}
                onMouseEnter={() => sound.playOnce('hover')}
                aria-label={`Enter as ${p.name}`}
              >
                <span className="who__tile">
                  <MonsterAvatar color={p.color} seed={p.seed} size={168} radius={14} title={p.name} />
                </span>
                <span className="who__label">{p.name}</span>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.main>
  )
}
