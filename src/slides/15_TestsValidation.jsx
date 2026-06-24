import React, { useState, useEffect } from 'react';
import Slide from '../components/Slide';
import { motion, AnimatePresence } from 'framer-motion';
import { SiPostman, SiSwagger } from 'react-icons/si';

import postman1 from '../assets/tests/postman/postman-1.png';
import postman2 from '../assets/tests/postman/postman-2.png';
import swagger1 from '../assets/tests/swagger/swagger-1.png';
import swagger2 from '../assets/tests/swagger/swagger-2.png';
import swagger3 from '../assets/tests/swagger/swagger-3.png';

export default function TestsValidation() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const tools = [
    { 
      id: 'swagger', 
      name: 'Swagger', 
      desc: 'Documentation Interactive', 
      icon: <SiSwagger size={64} color="#85EA2D" />,
      color: '#85EA2D',
      bg: '#f6fdf0',
      images: [swagger1, swagger2, swagger3]
    },
    { 
      id: 'postman', 
      name: 'Postman', 
      desc: 'Tests API REST & Scénarios', 
      icon: <SiPostman size={64} color="#FF6C37" />,
      color: '#FF6C37',
      bg: '#fff5f2',
      images: [postman1, postman2]
    },
  ];

  useEffect(() => {
    setCarouselIdx(0);
  }, [hoveredIndex]);

  useEffect(() => {
    let interval;
    if (hoveredIndex !== null && tools[hoveredIndex].images.length > 1) {
      interval = setInterval(() => {
        setCarouselIdx(prev => (prev + 1) % tools[hoveredIndex].images.length);
      }, 2500); // Change l'image toutes les 2.5 secondes
    }
    return () => clearInterval(interval);
  }, [hoveredIndex, tools]);

  return (
    <Slide title="Tests & Validation API">
      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        <div style={{ display: 'flex', gap: '4rem', zIndex: 10 }}>
          {tools.map((tool, idx) => (
            <motion.div 
              key={tool.id}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.15 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05, y: -10, boxShadow: `0 20px 40px rgba(0,0,0,0.15)` }}
              style={{ 
                background: 'white', 
                borderRadius: '24px', 
                padding: '3rem', 
                border: `2px solid ${tool.color}30`,
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: '1.5rem', 
                cursor: 'pointer',
                width: '320px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Cercle décoratif en arrière-plan */}
              <div style={{ position: 'absolute', top: -50, right: -50, width: '150px', height: '150px', borderRadius: '50%', background: tool.bg, zIndex: 0 }} />
              
              <div style={{ zIndex: 1 }}>{tool.icon}</div>
              <div style={{ zIndex: 1, textAlign: 'center' }}>
                <strong style={{ fontSize: '1.8rem', color: '#1e293b', display: 'block', marginBottom: '0.5rem' }}>{tool.name}</strong>
                <span style={{ fontSize: '1rem', color: '#64748b' }}>{tool.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Image Modal Popup */}
        <AnimatePresence>
          {hoveredIndex !== null && tools[hoveredIndex].images && (
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
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontFamily: 'Syne',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                }}
              >
                Aperçu : {tools[hoveredIndex].name}
              </motion.h2>

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
                      backgroundImage: `url(${tools[hoveredIndex].images[carouselIdx]})`,
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
                <div style={{ position: 'absolute', bottom: '-2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.8rem' }}>
                  {tools[hoveredIndex].images.map((_, i) => (
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
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </Slide>
  );
}
