/* Shared framer-motion variants for a consistent, premium motion language. */

export const easeCinema = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeCinema },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: easeCinema } },
}

export const stagger = (gap = 0.09, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeCinema } },
}

// Page-level transition used with AnimatePresence
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeCinema } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.35, ease: easeCinema } },
}
