import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Database, LayoutTemplate, Network, Server, Webhook, BoxSelect } from 'lucide-react';
import springLogo from '../assets/logoTechnos/spring-boot-svgrepo-com.png';
import angularLogo from '../assets/logoTechnos/angular-icon-svgrepo-com.png';
import flutterLogo from '../assets/logoTechnos/flutter-svgrepo-com.png';
import postgresLogo from '../assets/logoTechnos/postgresql-svgrepo-com.png';

export default function ArchitectureSpringBoot() {
  
  const boxStyle = {
    border: '3px solid #233287',
    background: 'white',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    position: 'absolute',
    zIndex: 10,
    width: '200px',
    height: '80px',
    fontWeight: 'bold',
    color: '#111827',
    fontSize: '1.1rem'
  };

  const textStyle = {
    fill: '#e31837',
    fontSize: '14px',
    fontWeight: '900',
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase'
  };

  return (
    <Slide title="" noDefaultHeader={true}>
      
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '0.5rem', flexShrink: 0 }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>11</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h2 style={{ margin: 0, color: '#e31837' }}>Spring Boot <span style={{ color: '#111' }}>Model-View-Controller (MVC)</span></h2>
          <img src={springLogo} alt="Spring Boot" style={{ width: '40px', transform: 'translateY(5px)' }} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%', flex: 1, marginTop: '3rem' }}>
        <div style={{ position: 'relative', width: '900px', height: '600px', transform: 'scale(1.3)', transformOrigin: 'top center' }}>
        
          {/* SVG ARROWS LAYER */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, overflow: 'visible' }}>
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#111827" />
              </marker>
            </defs>

            {/* 1. Client -> Routing */}
            <motion.path 
              animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
              d="M 250 260 L 350 120" fill="none" stroke="#111827" strokeWidth="4" strokeDasharray="12 12" markerEnd="url(#arrow)" 
            />
            
            {/* 2. Routing -> Controller */}
            <motion.path 
              animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
              d="M 440 120 L 440 240" fill="none" stroke="#111827" strokeWidth="4" strokeDasharray="12 12" markerEnd="url(#arrow)" 
            />
            {/* 2b. Controller -> Routing */}
            <motion.path 
              animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
              d="M 460 240 L 460 120" fill="none" stroke="#111827" strokeWidth="4" strokeDasharray="12 12" markerEnd="url(#arrow)" 
            />

            {/* 3. Controller -> Model */}
            <motion.path 
              animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
              d="M 490 320 L 590 420" fill="none" stroke="#111827" strokeWidth="4" strokeDasharray="12 12" markerEnd="url(#arrow)" 
            />
            {/* 3b. Model -> Controller */}
            <motion.path 
              animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
              d="M 610 410 L 510 310" fill="none" stroke="#111827" strokeWidth="4" strokeDasharray="12 12" markerEnd="url(#arrow)" 
            />

            {/* 4. Model -> Database */}
            <motion.path 
              animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
              d="M 700 410 L 760 320" fill="none" stroke="#111827" strokeWidth="4" strokeDasharray="12 12" markerEnd="url(#arrow)" 
            />
            {/* 4b. Database -> Model */}
            <motion.path 
              animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
              d="M 775 330 L 715 420" fill="none" stroke="#111827" strokeWidth="4" strokeDasharray="12 12" markerEnd="url(#arrow)" 
            />

            {/* 5. Controller -> View */}
            <motion.path 
              animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
              d="M 400 320 L 300 420" fill="none" stroke="#111827" strokeWidth="4" strokeDasharray="12 12" markerEnd="url(#arrow)" 
            />

            {/* 6. View -> Client */}
            <motion.path 
              animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
              d="M 200 420 L 140 290" fill="none" stroke="#111827" strokeWidth="4" strokeDasharray="12 12" markerEnd="url(#arrow)" 
            />

            {/* Labels aligned with lines */}
            <text x="270" y="190" style={textStyle} textAnchor="middle">1. REQUÊTE HTTP</text>
            <text x="590" y="170" style={textStyle} textAnchor="middle">2. ROUTAGE VERS</text>
            <text x="590" y="190" style={textStyle} textAnchor="middle">LE CONTRÔLEUR</text>
            
            <text x="630" y="360" style={textStyle} textAnchor="middle">3. INTERACTION AVEC</text>
            <text x="630" y="380" style={textStyle} textAnchor="middle">LE MODÈLE</text>

            <text x="250" y="360" style={textStyle} textAnchor="middle">4. LE CONTRÔLEUR</text>
            <text x="250" y="380" style={textStyle} textAnchor="middle">RETOURNE LE DTO</text>

            <text x="110" y="370" style={textStyle} textAnchor="middle">5. RÉPONSE</text>
            <text x="110" y="390" style={textStyle} textAnchor="middle">JSON</text>
          </svg>

          {/* BOXES */}

          {/* Client (Google Request Box Equivalent) */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={{ ...boxStyle, top: '230px', left: '30px', border: '1px solid #ccc', borderRadius: '24px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', width: '220px', padding: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <img src={angularLogo} alt="Angular" style={{ width: '25px' }} />
              <img src={flutterLogo} alt="Flutter" style={{ width: '20px' }} />
              <span style={{ color: '#666', fontSize: '0.9rem', fontWeight: 'normal' }}>Applications Clientes</span>
            </div>
            <div style={{ width: '90%', height: '30px', border: '1px solid #ddd', borderRadius: '15px', marginTop: '0.5rem', display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
              <Network size={14} color="#999" />
            </div>
          </motion.div>

          {/* Routing */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ ...boxStyle, top: '40px', left: '350px' }}>
            ROUTING
            <div style={{ fontSize: '0.65rem', color: '#666', marginTop: '0.2rem', fontWeight: 'normal' }}>(DispatcherServlet)</div>
          </motion.div>

          {/* Controller */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ ...boxStyle, top: '240px', left: '350px' }}>
            CONTROLLER
            <div style={{ fontSize: '0.65rem', color: '#666', marginTop: '0.2rem', fontWeight: 'normal' }}>(@RestController)</div>
          </motion.div>

          {/* Model */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} style={{ ...boxStyle, top: '420px', left: '550px' }}>
            MODEL
            <div style={{ fontSize: '0.65rem', color: '#666', marginTop: '0.2rem', fontWeight: 'normal' }}>(@Service / @Repository)</div>
          </motion.div>

          {/* View */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} style={{ ...boxStyle, top: '420px', left: '150px' }}>
            VIEW
            <div style={{ fontSize: '0.65rem', color: '#666', marginTop: '0.2rem', fontWeight: 'normal' }}>(JSON Response)</div>
          </motion.div>

          {/* Database */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} style={{ position: 'absolute', top: '220px', left: '720px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
            <div style={{ border: '3px solid #111', background: 'white', padding: '0.5rem 1rem', fontWeight: 'bold', marginBottom: '0.5rem', boxShadow: '0 4px 0 #111' }}>
              DATABASE
            </div>
            <img src={postgresLogo} alt="PostgreSQL" style={{ width: '60px', marginTop: '0.5rem' }} />
            <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#1e3a8a', marginTop: '0.5rem' }}>PostgreSQL</div>
          </motion.div>

        </div>
      </div>
    </Slide>
  );
}
