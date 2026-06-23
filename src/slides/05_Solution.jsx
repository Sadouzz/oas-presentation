import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Database, Zap, Users, ShieldCheck, Smartphone } from 'lucide-react';

export default function Solution() {
  const objectives = [
    {
      icon: <Database size={40} />,
      title: "Centralisation des données",
      desc: "Regrouper toutes les informations (clients, véhicules, réparations) dans un point unique et accessible.",
      color: "var(--oas-blue)"
    },
    {
      icon: <Zap size={40} />,
      title: "Automatisation métier",
      desc: "Accélérer la création de devis, la facturation et le suivi des fiches de réparation.",
      color: "var(--oas-red)"
    },
    {
      icon: <Users size={40} />,
      title: "Meilleure coordination",
      desc: "Fluidifier la communication entre les différents agents, mécaniciens et l'administration.",
      color: "var(--oas-blue)"
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Sécurité renforcée",
      desc: "Contrôler les accès, chiffrer les données sensibles et garantir des sauvegardes régulières.",
      color: "var(--oas-red)"
    },
    {
      icon: <Smartphone size={40} />,
      title: "Services numériques",
      desc: "Offrir aux clients la possibilité de suivre l'état de leur véhicule et leurs devis en temps réel.",
      color: "var(--oas-blue)"
    }
  ];

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '3rem' }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>05</span>
        <h2>Solution Proposée</h2>
      </div>

      <div className="bento-grid asymmetrical" style={{ marginTop: '2rem', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {objectives.map((obj, idx) => (
          <motion.div 
            key={idx}
            className={`bento-card magnetic ${idx === 1 || idx === 3 ? 'dark' : 'outline'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 + 0.2 }}
            style={idx === 4 ? { gridColumn: 'span 2' } : {}}
          >
            <div className="card-icon" style={{ color: obj.color }}>
              {obj.icon}
            </div>
            <div>
              <h3 style={{ color: idx === 1 || idx === 3 ? 'white' : 'var(--oas-blue)', marginBottom: '1rem', fontSize: '1.3rem' }}>
                {obj.title}
              </h3>
              <p style={{ color: idx === 1 || idx === 3 ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)', fontSize: '0.95rem' }}>
                {obj.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
