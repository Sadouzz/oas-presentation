import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, ShieldCheck, Smartphone } from 'lucide-react';

export default function Solution() {
  const benefits = [
    { icon: <CheckCircle2 size={24} />, text: "Centraliser l'ensemble des données" },
    { icon: <TrendingUp size={24} />, text: "Automatiser les processus métier" },
    { icon: <CheckCircle2 size={24} />, text: "Améliorer la coordination entre les acteurs" },
    { icon: <ShieldCheck size={24} />, text: "Sécuriser les informations" },
    { icon: <Smartphone size={24} />, text: "Offrir des services numériques aux clients" },
  ];

  return (
    <Slide title="Solution Proposée">
      <div className="grid-2">
        {/* Solution Objectives */}
        <div>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--oas-blue)' }}>Objectifs de la solution</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {benefits.map((b, idx) => (
              <motion.div 
                key={idx}
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '1rem', 
                  background: 'var(--slide-bg)', padding: '1rem 1.5rem', 
                  borderRadius: '12px', border: '1px solid var(--border-color)'
                }}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.2 }}
              >
                <div style={{ color: 'var(--oas-red)' }}>{b.icon}</div>
                <div style={{ fontWeight: 500 }}>{b.text}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SWOT / Impacts */}
        <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '1.5rem' }}>
          <motion.div 
            className="card" 
            style={{ borderTop: '4px solid #10b981' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h4 style={{ color: '#10b981', fontSize: '1.2rem', marginBottom: '1rem' }}>Atouts & Forces</h4>
            <ul className="styled-list">
              <li>Meilleure traçabilité des interventions</li>
              <li>Gain de temps et productivité accrue</li>
              <li>Satisfaction client améliorée</li>
            </ul>
          </motion.div>

          <motion.div 
            className="card" 
            style={{ borderTop: '4px solid #f59e0b' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h4 style={{ color: '#f59e0b', fontSize: '1.2rem', marginBottom: '1rem' }}>Risques & Défis</h4>
            <ul className="styled-list" style={{ '--oas-red': '#f59e0b' }}>
              <li>Adoption du nouvel outil par le personnel</li>
              <li>Migration des anciennes données</li>
              <li>Dépendance à la connexion internet</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
