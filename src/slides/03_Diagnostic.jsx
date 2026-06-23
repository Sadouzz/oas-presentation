import { useState, useEffect } from 'react';
import Slide from '../components/Slide';
import { Database, MonitorX, ShieldAlert, FileCode } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ergo1 from '../assets/diagnosticOld/ergo1.png';
import ergo2 from '../assets/diagnosticOld/ergo2.png';
import bdPassword from '../assets/diagnosticOld/bdPassword.png';

export default function Diagnostic() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const issues = [
    {
      icon: <Database size={40} />,
      title: "Base de données non normalisée",
      desc: "Structure fragmentée, redondances et incohérences des données.",
      color: "var(--oas-red)",
      image: "/images/db_messy.png"
    },
    {
      icon: <MonitorX size={40} />,
      title: "Interfaces complexes (Ergonomie)",
      desc: "Ancienne interface peu ergonomique, navigation confuse.",
      color: "var(--oas-red)",
      images: [ergo1, ergo2]
    },
    {
      icon: <ShieldAlert size={40} />,
      title: "Sécurité insuffisante",
      desc: "Accès non contrôlés, absence de sauvegarde régulière et données non chiffrées.",
      color: "var(--oas-red)",
      image: bdPassword
    },
    {
      icon: <FileCode size={40} />,
      title: "Mauvaise structure du code",
      desc: "Couplage fort entre modules, maintenance difficile et risques de pannes en cascade.",
      color: "var(--oas-red)",
      image: "/images/bad_code.png"
    }
  ];

  useEffect(() => {
    let interval;
    if (hoveredIndex !== null && issues[hoveredIndex]?.images) {
      interval = setInterval(() => {
        setCarouselIdx((prev) => (prev + 1) % issues[hoveredIndex].images.length);
      }, 3000);
    } else {
      setCarouselIdx(0);
    }
    return () => clearInterval(interval);
  }, [hoveredIndex, issues]);

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>03</span>
        <h2>Diagnostic du système existant</h2>
      </div>

      <div className="bento-grid asymmetrical" style={{ marginTop: '2rem', gap: '6rem' }}>
        {issues.map((issue, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <motion.div 
              key={idx}
              className={`bento-card magnetic ${idx === 1 || idx === 2 ? 'dark' : 'outline'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 + 0.2 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ position: 'relative' }}
            >
              {/* Card Content (Always visible underneath) */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="card-icon" style={{ color: issue.color }}>
                  {issue.icon}
                </div>
                <div>
                  <h3 style={{ 
                    color: idx === 1 || idx === 2 ? 'white' : 'var(--oas-blue)', 
                    marginBottom: '1rem', fontSize: '1.5rem'
                  }}>
                    {issue.title}
                  </h3>
                  <p style={{ 
                    color: idx === 1 || idx === 2 ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)'
                  }}>
                    {issue.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Global Image Modal Popup */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              pointerEvents: 'none' // Crucial: allows hover to continue on the card below
            }}
          >
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              style={{
                color: 'white',
                marginBottom: '2rem',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontFamily: 'Syne',
                textAlign: 'center',
                textTransform: 'uppercase',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              {issues[hoveredIndex].title}
            </motion.h2>

            {issues[hoveredIndex].images ? (
              <div style={{ position: 'relative', width: '85vw', maxWidth: '1400px', height: '65vh' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={carouselIdx}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${issues[hoveredIndex].images[carouselIdx]})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderRadius: '24px',
                      boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)'
                    }}
                  />
                </AnimatePresence>
                
                {/* Carousel Indicators */}
                <div style={{ position: 'absolute', bottom: '-2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.8rem' }}>
                  {issues[hoveredIndex].images.map((_, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        width: '12px', height: '12px', borderRadius: '50%', 
                        background: i === carouselIdx ? 'white' : 'rgba(255,255,255,0.3)', 
                        transition: 'background 0.3s',
                        boxShadow: i === carouselIdx ? '0 0 10px rgba(255,255,255,0.8)' : 'none'
                      }} 
                    />
                  ))}
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateX: -20 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                style={{
                  width: '85vw',
                  height: '70vh',
                  maxWidth: '1400px',
                  backgroundImage: `url(${issues[hoveredIndex].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)'
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Slide>
  );
}
