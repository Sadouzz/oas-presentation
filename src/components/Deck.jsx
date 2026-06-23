import { AnimatePresence, motion } from 'framer-motion';

export default function Deck({ currentSlide, children }) {
  return (
    <div className="deck-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
          animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="slide-wrapper"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
