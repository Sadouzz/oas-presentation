import { useState, useEffect } from 'react';
import Slide from '../components/Slide';
import { Layout, FileCode2, Share2, Workflow } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import useCaseAgent from '../assets/uml/useCaseAgent.png';
import useCaseAgentMagasin from '../assets/uml/useCaseAgentMagasin.png';
import useCaseChefAtelier from '../assets/uml/useCaseChefAtelier.png';
import useCaseClient from '../assets/uml/useCaseClient.png';
import useCaseSuperAgent from '../assets/uml/useCaseSuperAgent.png';
import classDiag from '../assets/uml/class.jpeg';

export default function ConceptionUML() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const diagrams = [
    {
      icon: <Layout size={80} />,
      title: "Cas d'Utilisation",
      desc: "Définition claire des rôles (Super Agent, Agent, Chef Atelier, Agent Magasin, Client) et de leurs interactions avec le système.",
      color: "var(--oas-blue)",
      images: [useCaseSuperAgent, useCaseAgent, useCaseChefAtelier, useCaseAgentMagasin, useCaseClient]
    },
    {
      icon: <FileCode2 size={80} />,
      title: "Diagramme de Classes",
      desc: "Modélisation des entités en base de données : Fiche de Réparation, Facture, Client, Véhicule.",
      color: "var(--oas-red)",
      image: classDiag
    },
  ];

  useEffect(() => {
    setCarouselIdx(0);
  }, [hoveredIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.code === 'Space' || e.key === ' ') && hoveredIndex !== null && diagrams[hoveredIndex]?.images) {
        e.preventDefault();
        e.stopPropagation();
        setCarouselIdx((prev) => (prev + 1) % diagrams[hoveredIndex].images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [hoveredIndex, diagrams]);

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '3rem', position: 'relative', zIndex: 10 }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>07</span>
        <h2>Conception UML</h2>
      </div>

      <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', height: '50vh' }}>
        {diagrams.map((diag, idx) => (
          <motion.div 
            key={idx}
            className={`bento-card magnetic ${idx === 1 ? 'dark' : 'outline'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 + 0.2 }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '3rem' }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div className="card-icon" style={{ color: diag.color, display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                {diag.icon}
              </div>
              <div>
                <h3 style={{ color: idx === 1 ? 'white' : 'var(--oas-blue)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>
                  {diag.title}
                </h3>
                <p style={{ color: idx === 1 ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.6' }}>
                  {diag.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Global Image Modal Popup */}
      <AnimatePresence>
        {hoveredIndex !== null && (diagrams[hoveredIndex].image || diagrams[hoveredIndex].images) && (
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
              {diagrams[hoveredIndex].title}
            </motion.h2>

            {diagrams[hoveredIndex].images ? (
              <div style={{ position: 'relative', width: '85vw', maxWidth: '1400px', height: '65vh' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={carouselIdx}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 400 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${diagrams[hoveredIndex].images[carouselIdx]})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      borderRadius: '24px',
                      backgroundColor: 'white', // Ensure transparent PNGs look good
                      boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)'
                    }}
                  />
                </AnimatePresence>
                
                {/* Carousel Indicators */}
                <div style={{ position: 'absolute', bottom: '-2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.8rem' }}>
                  {diagrams[hoveredIndex].images.map((_, i) => (
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
                  backgroundImage: `url(${diagrams[hoveredIndex].image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  borderRadius: '24px',
                  backgroundColor: 'white', // Ensure transparent PNGs/JPEGs look good
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

