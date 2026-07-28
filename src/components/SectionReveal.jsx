import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion.js'

// Wraps content in a scroll-triggered reveal.
export default function SectionReveal({ children, className = '', variants = fadeUp, amount = 0.3, ...rest }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
