import Slide from '../components/Slide';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import angularLogo from '../assets/logoTechnos/angular-icon-svgrepo-com.png';
import springLogo from '../assets/logoTechnos/spring-boot-svgrepo-com.png';
import flutterLogo from '../assets/logoTechnos/flutter-svgrepo-com.png';
import postgresLogo from '../assets/logoTechnos/postgresql-svgrepo-com.png';

export default function ChoixTech() {
  const [activeTech, setActiveTech] = useState(null);

  const techs = [
    { 
      id: 'angular', name: "Angular", desc: "Frontend Web & Admin", color: "#dd0031", logo: angularLogo,
      features: ["Architecture MVVM robuste", "Data Binding Bidirectionnel", "TypeScript Fortement Typé", "Lazy Loading"],
      pos: { top: '15%', left: '15%' },
      path: "M 250 250 Q 150 250 100 100" // Curve from center to top-left
    },
    { 
      id: 'spring', name: "Spring Boot", desc: "Backend & API REST", color: "#6db33f", logo: springLogo,
      features: ["Sécurité avancée (JWT, RBAC)", "Logique Métier Centralisée", "Hautes Performances"],
      pos: { top: '15%', right: '15%' },
      path: "M 250 250 Q 350 250 400 100" // Curve from center to top-right
    },
    { 
      id: 'flutter', name: "Flutter", desc: "App Mobile Native", color: "#02569b", logo: flutterLogo,
      features: ["Multi-plateforme (iOS/Android)", "UI Moderne orientée Widgets", "Intégration API Fluide"],
      pos: { bottom: '15%', left: '15%' },
      path: "M 250 250 Q 150 250 100 400" // Curve from center to bottom-left
    },
    { 
      id: 'postgres', name: "PostgreSQL", desc: "Base de données Cloud", color: "#336791", logo: postgresLogo,
      features: ["Transactions ACID", "Neon Serverless", "Requêtes complexes performantes"],
      pos: { bottom: '15%', right: '15%' },
      path: "M 250 250 Q 350 250 400 400" // Curve from center to bottom-right
    }
  ];

  return (
    <Slide title="Choix Technologiques">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: '2rem', padding: '0 2rem' }}>
        
        {/* LEFT COLUMN: HUB & SPOKES */}
        <div style={{ position: 'relative', width: '500px', height: '500px', flexShrink: 0 }}>
          
          {/* SVG Connection Lines */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
            {techs.map(t => (
              <motion.path
                key={`path-${t.id}`}
                d={t.path}
                fill="none"
                stroke={activeTech && activeTech.id === t.id ? t.color : '#cbd5e1'}
                strokeWidth={activeTech && activeTech.id === t.id ? 4 : 2}
                strokeDasharray={activeTech && activeTech.id === t.id ? "5,5" : "none"}
                animate={{
                  strokeDashoffset: activeTech && activeTech.id === t.id ? [0, -20] : 0
                }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{ transition: 'stroke 0.3s' }}
              />
            ))}
          </svg>

          {/* Central Hub (OAS Logo) */}
          <div style={{ 
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '160px', height: '160px', borderRadius: '50%', background: 'white',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)', zIndex: 10, border: '4px solid var(--oas-blue)'
          }}>
            <img src="/src/assets/logo.ico" alt="Logo OAS" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'contain' }} />
          </div>

          {/* Tech Nodes (Spokes) */}
          {techs.map((t, idx) => (
            <motion.div 
              key={t.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + idx * 0.1, type: "spring", stiffness: 150 }}
              onHoverStart={() => setActiveTech(t)}
              onHoverEnd={() => setActiveTech(null)}
              style={{ 
                position: 'absolute', ...t.pos, transform: 'translate(-50%, -50%)',
                width: '100px', height: '100px', borderRadius: '50%', 
                background: 'white',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                cursor: 'pointer', boxShadow: `0 10px 20px ${t.color}66`,
                border: `4px solid ${t.color}`, zIndex: 10,
                opacity: activeTech && activeTech.id !== t.id ? 0.4 : 1,
                transition: 'opacity 0.3s'
              }}
              whileHover={{ scale: 1.15 }}
            >
              <img src={t.logo} alt={t.name} style={{ width: '55px', height: '55px', objectFit: 'contain' }} />
            </motion.div>
          ))}
        </div>

        {/* RIGHT COLUMN: DETAILS */}
        <div style={{ flex: 1, height: '400px', position: 'relative' }}>
          <AnimatePresence mode="wait">
            {activeTech ? (
              <motion.div
                key={activeTech.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  background: 'white', padding: '3rem', borderRadius: '24px', 
                  boxShadow: `0 20px 40px ${activeTech.color}22`,
                  borderLeft: `8px solid ${activeTech.color}`,
                  height: '100%', boxSizing: 'border-box',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center'
                }}
              >
                <h2 style={{ color: activeTech.color, fontSize: '3rem', margin: '0 0 0.5rem 0' }}>{activeTech.name}</h2>
                <h4 style={{ color: 'var(--text-muted)', fontSize: '1.2rem', margin: '0 0 2rem 0', fontWeight: 500 }}>{activeTech.desc}</h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {activeTech.features.map((f, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.1 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#f8fafc', padding: '1rem', borderRadius: '12px' }}
                    >
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: activeTech.color, flexShrink: 0 }}></div>
                      <span style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 500 }}>{f}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ 
                  height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', fontSize: '1.5rem', fontWeight: 300, fontStyle: 'italic',
                  border: '2px dashed #cbd5e1', borderRadius: '24px'
                }}
              >
                Survolez une technologie pour afficher les détails.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </Slide>
  );
}
