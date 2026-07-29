import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { audienceProfiles } from '../data/content.js'
import { useProfile } from '../context/ProfileContext.jsx'
import { useSound } from '../context/SoundContext.jsx'
import ALogo from '../components/ALogo.jsx'
import './WhoIsWatching.css'

const anika = audienceProfiles[0]

export default function WhoIsWatching() {
  const navigate = useNavigate()
  const { setProfile } = useProfile()
  const sound = useSound()

  const enter = () => {
    sound.playOnce('select')
    setProfile(anika.id)
    setTimeout(() => navigate(anika.route || '/browse'), 620)
  }
  const onKey = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); enter() } }

  return (
    <motion.main className="who" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div className="who__inner">
        <motion.h1 className="who__title" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          Who&rsquo;s Watching?
        </motion.h1>

        <motion.button
          className="who__card"
          onClick={enter}
          onKeyDown={onKey}
          onMouseEnter={() => sound.playOnce('hover')}
          aria-label="Enter as Anika"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <span className="who__tile">
            <ALogo size={168} alt="Anika" />
          </span>
          <span className="who__label">{anika.name}</span>
        </motion.button>
      </div>
    </motion.main>
  )
}
