import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { User, PlaySquare, Box, Server, GitCommit, ShieldCheck } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Step = ({ title, desc, icon, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, type: 'spring' }}
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', flex: 1, zIndex: 10, position: 'relative' }}
  >
    <div style={{ 
      width: '90px', height: '90px', borderRadius: '50%', background: 'white', 
      display: 'flex', justifyContent: 'center', alignItems: 'center', 
      border: `4px solid ${color}`, color: color, boxShadow: `0 15px 30px ${color}44`,
      position: 'relative'
    }}>
      {icon}
    </div>
    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--text-main)', textAlign: 'center' }}>{title}</div>
    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', padding: '0 10px' }}>{desc}</div>
  </motion.div>
);

const Arrow = ({ label, delay }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay }} style={{ flex: 0.6, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 1, position: 'relative', marginTop: '-40px' }}>
    <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem', whiteSpace: 'nowrap' }}>{label}</div>
    <div style={{ width: '100%', height: '4px', background: '#cbd5e1', position: 'relative', borderRadius: '2px' }}>
      <motion.div 
        initial={{ left: '0%' }} animate={{ left: '100%' }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', top: '-4px', width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981', transform: 'translateX(-50%)' }}
      />
    </div>
  </motion.div>
);

export default function PipelineCICD() {

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '4rem' }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>13b</span>
        <h2>Pipeline CI/CD : Intégration et Déploiement Continus</h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', height: '50vh', padding: '0 1rem', position: 'relative' }}>
        
        <Step 
          title="Développeurs" desc="Écriture du code" 
          icon={<User size={40} />} color="#3b82f6" delay={0.2} 
        />
        
        <Arrow label="git push" delay={0.4} />
        
        <Step 
          title="GitHub Repo" desc="Dépôt distant" 
          icon={<FaGithub size={40} />} color="#333" delay={0.6} 
        />
        
        <Arrow label="Déclenche" delay={0.8} />
        
        <Step 
          title="GitHub Actions" desc="Tests & Build" 
          icon={<PlaySquare size={40} />} color="#8b5cf6" delay={1.0} 
        />
        
        <Arrow label="Push Image" delay={1.2} />
        
        <Step 
          title="GHCR" desc="Registre Docker" 
          icon={<Box size={40} />} color="#10b981" delay={1.4} 
        />
        
        <Arrow label="Pull (Watchtower)" delay={1.6} />
        
        <Step 
          title="Serveur VPS" desc="Production" 
          icon={<Server size={40} />} color="#f59e0b" delay={1.8} 
        />

      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', padding: '1rem 2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', color: '#065f46' }}>
          <ShieldCheck size={24} color="#10b981" />
          <span style={{ fontWeight: 500, fontSize: '1.1rem' }}>Automatisation complète : du commit à la mise en ligne sans intervention manuelle.</span>
        </div>
      </motion.div>
    </Slide>
  );
}
