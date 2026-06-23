import { AnimatePresence, motion } from 'framer-motion';

const variations = [
  // 0: Wipe Up
  {
    initial: { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' },
    animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
    exit: { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }
  },
  // 1: Zoom Fade
  {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 }
  },
  // 2: Wipe Right
  {
    initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
    animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
    exit: { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }
  },
  // 3: Slide Up Fade
  {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 }
  },
  // 4: Wipe Left
  {
    initial: { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
    animate: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
    exit: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }
  },
  // 5: Circle Reveal
  {
    initial: { clipPath: 'circle(0% at 50% 50%)' },
    animate: { clipPath: 'circle(150% at 50% 50%)' },
    exit: { clipPath: 'circle(0% at 50% 50%)' }
  }
];

export default function Deck({ currentSlide, children }) {
  const currentAnim = variations[currentSlide % variations.length];

  return (
    <div className="deck-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={currentAnim.initial}
          animate={currentAnim.animate}
          exit={currentAnim.exit}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="slide-wrapper"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
