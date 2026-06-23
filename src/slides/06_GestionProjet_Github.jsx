import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { GitMerge, GitPullRequest } from 'lucide-react';
import backScreenshot from '../assets/screenshots/github/back.png';
import frontScreenshot from '../assets/screenshots/github/front.png';
import mobileScreenshot from '../assets/screenshots/github/mobile.png';

export default function GestionProjetGithub() {
  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '3rem' }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>06c</span>
        <h2>Collaboration : Git & GitHub</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', height: '55vh' }}>
        
        {/* Left: Branching Strategy Visual */}
        <div style={{ position: 'relative', background: 'rgba(255,255,255,0.4)', borderRadius: '24px', padding: '2rem', border: '1px solid var(--border-color)', height: '100%', overflow: 'hidden' }}>
          <h3 style={{ color: 'var(--oas-blue)', marginBottom: '2rem' }}>Stratégie de Branches</h3>
          
          <div style={{ position: 'relative', height: '300px' }}>
            {/* Main Branch Line */}
            <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '4px', background: 'var(--oas-blue)', borderRadius: '2px' }} />
            
            {/* Dev Branch Line */}
            <div style={{ position: 'absolute', left: '80px', top: '50px', bottom: '50px', width: '4px', background: 'var(--oas-red)', borderRadius: '2px' }} />
            <svg style={{ position: 'absolute', left: '20px', top: '50px', width: '60px', height: '60px', overflow: 'visible' }}>
              <path d="M 2 2 Q 2 30 60 30" fill="none" stroke="var(--oas-red)" strokeWidth="4" strokeDasharray="5,5" />
            </svg>

            {/* Feature Branch Line */}
            <div style={{ position: 'absolute', left: '140px', top: '120px', bottom: '120px', width: '4px', background: '#10b981', borderRadius: '2px' }} />
            <svg style={{ position: 'absolute', left: '80px', top: '120px', width: '60px', height: '60px', overflow: 'visible' }}>
              <path d="M 2 2 Q 2 30 60 30" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="5,5" />
            </svg>

            {/* Commits */}
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} style={{ position: 'absolute', left: '12px', top: '20px', background: 'white', border: '4px solid var(--oas-blue)', width: '20px', height: '20px', borderRadius: '50%' }} />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} style={{ position: 'absolute', left: '72px', top: '80px', background: 'white', border: '4px solid var(--oas-red)', width: '20px', height: '20px', borderRadius: '50%' }} />
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} style={{ position: 'absolute', left: '132px', top: '150px', background: 'white', border: '4px solid #10b981', width: '20px', height: '20px', borderRadius: '50%' }} />

            {/* Merges */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} style={{ position: 'absolute', left: '80px', bottom: '120px' }}>
              <GitPullRequest color="#10b981" size={24} style={{ transform: 'translateX(-50%) translateY(50%)' }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} style={{ position: 'absolute', left: '20px', bottom: '50px' }}>
              <GitMerge color="var(--oas-red)" size={24} style={{ transform: 'translateX(-50%) translateY(50%)' }} />
            </motion.div>

            {/* Labels */}
            <div style={{ position: 'absolute', left: '40px', top: '15px', fontWeight: 'bold', color: 'var(--oas-blue)' }}>main (Production)</div>
            <div style={{ position: 'absolute', left: '100px', top: '75px', fontWeight: 'bold', color: 'var(--oas-red)' }}>dev (Intégration)</div>
            <div style={{ position: 'absolute', left: '160px', top: '145px', fontWeight: 'bold', color: '#10b981' }}>feature/auth</div>
          </div>
        </div>

        {/* Right: GitHub Screenshots (Infinite Auto-Scroll) */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', paddingRight: '1rem' }}>
          <h3 style={{ color: 'var(--oas-blue)', marginBottom: '1rem', flexShrink: 0, zIndex: 10 }}>Dépôts GitHub (Web & Mobile)</h3>
          
          <div style={{ flex: 1, position: 'relative', overflow: 'hidden', maskImage: 'linear-gradient(to bottom, transparent, black 2%, black 98%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 2%, black 98%, transparent)' }}>
            <motion.div 
              animate={{ y: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}
            >
              {/* Card component to avoid repetition */}
              {[1, 2].map((setIndex) => (
                <div key={setIndex} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="bento-card outline magnetic" style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', position: 'relative', flexShrink: 0 }}>
                    <img src={backScreenshot} alt="GitHub Backend" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
                    <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(227, 24, 55, 0.9)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>Backend Repository</div>
                  </div>

                  <div className="bento-card outline magnetic" style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', position: 'relative', flexShrink: 0 }}>
                    <img src={frontScreenshot} alt="GitHub Frontend" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
                    <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(35, 50, 135, 0.9)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>Frontend Repository</div>
                  </div>

                  <div className="bento-card outline magnetic" style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', position: 'relative', flexShrink: 0 }}>
                    <img src={mobileScreenshot} alt="GitHub Mobile" style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} />
                    <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(2, 86, 155, 0.9)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>Mobile Repository</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
