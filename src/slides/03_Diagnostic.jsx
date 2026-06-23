import Slide from '../components/Slide';
import { Database, MonitorX, ShieldAlert, Link } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Diagnostic() {
  const issues = [
    {
      icon: <Database size={40} />,
      title: "Base de données non normalisée",
      desc: "Structure fragmentée, redondances et incohérences des données.",
      color: "var(--oas-red)"
    },
    {
      icon: <MonitorX size={40} />,
      title: "Interfaces peu ergonomiques et complexes",
      desc: "Inventaire imprécis, ruptures fréquentes et rapports de gestion inexacts.",
      color: "var(--oas-red)"
    },
    {
      icon: <ShieldAlert size={40} />,
      title: "Sécurité insuffisante",
      desc: "Accès non contrôlés, absence de sauvegarde régulière et données non chiffrées.",
      color: "var(--oas-red)"
    },
    {
      icon: <Link size={40} />,
      title: "Dépendances mal gérées",
      desc: "Couplage fort entre modules, maintenance difficile et risques de pannes en cascade.",
      color: "var(--oas-red)"
    }
  ];

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '3rem' }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>03</span>
        <h2>Diagnostic du système existant</h2>
      </div>

      <div className="bento-grid asymmetrical" style={{ marginTop: '2rem' }}>
        {issues.map((issue, idx) => (
          <motion.div 
            key={idx}
            className={`bento-card magnetic ${idx === 1 || idx === 2 ? 'dark' : 'outline'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 + 0.2 }}
          >
            <div className="card-icon" style={{ color: issue.color }}>
              {issue.icon}
            </div>
            <div>
              <h3 style={{ color: idx === 1 || idx === 2 ? 'white' : 'var(--oas-blue)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                {issue.title}
              </h3>
              <p style={{ color: idx === 1 || idx === 2 ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)' }}>
                {issue.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
