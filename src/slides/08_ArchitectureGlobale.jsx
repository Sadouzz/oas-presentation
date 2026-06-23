import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Code2, Database, Settings, FileJson, ArrowDown, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ArchitectureGlobale() {
  const [activeStep, setActiveStep] = useState('idle'); 

  useEffect(() => {
    let isMounted = true;
    const runLoop = async () => {
      while (isMounted) {
        setActiveStep('idle');
        await new Promise(r => setTimeout(r, 800));
        if(!isMounted) break;
        
        setActiveStep('front-to-back');
        await new Promise(r => setTimeout(r, 1200));
        if(!isMounted) break;
        
        setActiveStep('back-to-db');
        await new Promise(r => setTimeout(r, 1200));
        if(!isMounted) break;
        
        setActiveStep('db-to-back');
        await new Promise(r => setTimeout(r, 1200));
        if(!isMounted) break;
        
        setActiveStep('back-to-front');
        await new Promise(r => setTimeout(r, 1200));
      }
    };
    runLoop();
    return () => { isMounted = false; };
  }, []);

  const getLayerStyle = (layer, color) => ({
    width: '100%',
    background: activeStep.includes(layer) ? `linear-gradient(135deg, ${color}1A, ${color}2A)` : `linear-gradient(135deg, #ffffff, #fafafa)`,
    border: `2px solid ${color}`,
    borderRadius: '16px',
    padding: '1.5rem',
    boxShadow: activeStep.includes(layer) ? `0 15px 40px ${color}44` : '0 10px 25px rgba(0,0,0,0.05)',
    transition: 'all 0.4s ease',
    transform: activeStep.includes(layer) ? 'scale(1.02)' : 'scale(1)',
    zIndex: 10
  });

  return (
    <Slide title="Architecture 3 Tiers">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '75vh', gap: '4rem' }}>
        
        {/* MAIN DIAGRAM */}
        <div style={{ display: 'flex', flexDirection: 'column', width: '600px' }}>
          
          {/* 1. FRONTEND */}
          <div style={getLayerStyle('front', '#16a34a')}>
            <h3 style={{ color: '#16a34a', textAlign: 'center', margin: '0 0 1.5rem 0', letterSpacing: '1px' }}>COUCHE DE PRÉSENTATION (FRONTEND)</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}><Monitor size={40} color="#16a34a" style={{ margin: '0 auto 0.5rem auto' }} /><p style={{ margin: 0, fontWeight: 600 }}>Web</p></div>
              <div style={{ color: '#16a34a', fontWeight: 'bold' }}>⟷</div>
              <div style={{ textAlign: 'center' }}><Smartphone size={40} color="#16a34a" style={{ margin: '0 auto 0.5rem auto' }} /><p style={{ margin: 0, fontWeight: 600 }}>Mobile</p></div>
              <div style={{ color: '#16a34a', fontWeight: 'bold' }}>⟷</div>
              <div style={{ textAlign: 'center' }}><Code2 size={40} color="#16a34a" style={{ margin: '0 auto 0.5rem auto' }} /><p style={{ margin: 0, fontWeight: 600 }}>ViewModel</p></div>
            </div>
          </div>

          {/* ESPACE DE CONNEXION FRONT -> BACK */}
          <div style={{ height: '80px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', opacity: activeStep === 'front-to-back' ? 1 : 0.3, transition: 'opacity 0.3s' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#16a34a' }}>Requête (HTTP)</span>
              <div style={{ width: '2px', height: '40px', background: '#16a34a33', position: 'relative', overflow: 'hidden' }}>
                {activeStep === 'front-to-back' && <motion.div animate={{ y: [0, 40] }} transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }} style={{ width: '2px', height: '15px', background: '#16a34a' }} />}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', opacity: activeStep === 'back-to-front' ? 1 : 0.3, transition: 'opacity 0.3s' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ea580c' }}>Réponse (JSON)</span>
              <div style={{ width: '2px', height: '40px', background: '#ea580c33', position: 'relative', overflow: 'hidden' }}>
                {activeStep === 'back-to-front' && <motion.div animate={{ y: [40, 0] }} transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }} style={{ width: '2px', height: '15px', background: '#ea580c' }} />}
              </div>
            </div>
          </div>

          {/* 2. BACKEND */}
          <div style={getLayerStyle('back', '#ea580c')}>
            <h3 style={{ color: '#ea580c', textAlign: 'center', margin: '0 0 1.5rem 0', letterSpacing: '1px' }}>COUCHE MÉTIER (BACKEND)</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#ea580c', color: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem auto' }} className={activeStep === 'back-to-db' || activeStep === 'db-to-back' ? 'spin-anim' : ''} >C</div>
                <p style={{ margin: 0, fontWeight: 600 }}>Contrôleurs</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#ea580c', color: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem auto' }} className={activeStep === 'back-to-db' || activeStep === 'db-to-back' ? 'spin-anim' : ''} >S</div>
                <p style={{ margin: 0, fontWeight: 600 }}>Services</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <FileJson size={40} color="#ea580c" style={{ margin: '0 auto 0.5rem auto' }} />
                <p style={{ margin: 0, fontWeight: 600 }}>Modèles</p>
              </div>
            </div>
          </div>

          {/* ESPACE DE CONNEXION BACK -> DB */}
          <div style={{ height: '80px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', opacity: activeStep === 'back-to-db' ? 1 : 0.3, transition: 'opacity 0.3s' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2563eb' }}>Accès données</span>
              <div style={{ width: '2px', height: '40px', background: '#2563eb33', position: 'relative', overflow: 'hidden' }}>
                {activeStep === 'back-to-db' && <motion.div animate={{ y: [0, 40] }} transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }} style={{ width: '2px', height: '15px', background: '#2563eb' }} />}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', opacity: activeStep === 'db-to-back' ? 1 : 0.3, transition: 'opacity 0.3s' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2563eb' }}>Données / Résultat</span>
              <div style={{ width: '2px', height: '40px', background: '#2563eb33', position: 'relative', overflow: 'hidden' }}>
                {activeStep === 'db-to-back' && <motion.div animate={{ y: [40, 0] }} transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }} style={{ width: '2px', height: '15px', background: '#2563eb' }} />}
              </div>
            </div>
          </div>

          {/* 3. DATABASE */}
          <div style={getLayerStyle('db', '#2563eb')}>
            <h3 style={{ color: '#2563eb', textAlign: 'center', margin: '0 0 1rem 0', letterSpacing: '1px' }}>COUCHE DE DONNÉES</h3>
            <div style={{ textAlign: 'center' }}>
              <Database size={48} color="#2563eb" style={{ margin: '0 auto 0.5rem auto' }} className={activeStep === 'db-to-back' ? 'pulse-anim' : ''} />
              <p style={{ margin: 0, fontWeight: 600 }}>Base de données PostgreSQL</p>
            </div>
          </div>

        </div>

        {/* LÉGENDE */}
        <div style={{ width: '250px', border: '2px dashed #cbd5e1', borderRadius: '16px', padding: '1.5rem', background: '#f8fafc', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <h4 style={{ color: 'var(--oas-blue)', margin: '0 0 1.5rem 0', textAlign: 'center', fontSize: '1.2rem' }}>LÉGENDE</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <ArrowDown color="#16a34a" size={24} />
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#16a34a' }}>Requête (Front → Back)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <ArrowUp color="#ea580c" size={24} />
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ea580c' }}>Réponse (Back → Front)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <ArrowDown color="#2563eb" size={24} />
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#2563eb' }}>Accès Base de données</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <ArrowUp color="#2563eb" size={24} />
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#2563eb' }}>Résultat Données</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '0.5rem', paddingTop: '1rem', borderTop: '2px solid #e2e8f0' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '1.5rem' }}>⟷</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#64748b' }}>Interaction Bidirectionnelle</span>
            </div>
          </div>
        </div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .spin-anim { animation: spin 2s linear infinite; }
        .pulse-anim { animation: pulse 1s ease-in-out infinite alternate; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes pulse { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(1.15); opacity: 1; } }
      `}} />
    </Slide>
  );
}
