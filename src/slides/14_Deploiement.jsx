import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, LineChart } from 'lucide-react';

export default function Deploiement() {

  const steps = [
    {
      id: 'nginx',
      title: 'Nginx & Certbot',
      color: '#e8751a', // Orange
      labelPos: 'bottom',
      icon: <ShieldCheck size={24} />,
      points: [
        'Serveur Web & Reverse Proxy',
        'Sert l\'application Angular',
        'Gestion des certificats SSL (HTTPS)'
      ]
    },
    {
      id: 'backend',
      title: 'Spring Boot API',
      color: '#6b7280', // Grey
      labelPos: 'top',
      icon: <Server size={24} />,
      points: [
        'Conteneur Backend (ghcr.io)',
        'Réseau interne sécurisé',
        'Connexion distante à Neon DB'
      ]
    },
    {
      id: 'monitoring',
      title: 'Supervision',
      color: '#eab308', // Yellow
      labelPos: 'bottom',
      icon: <LineChart size={24} />,
      points: [
        'Prometheus (Collecte des métriques)',
        'Grafana (Tableaux de bord visuels)',
        'Surveillance de l\'état du VPS'
      ]
    }
  ];

  return (
    <Slide title="Architecture de Déploiement">
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem' }}>
        
        {/* INTERACTIVE FLOW AREA */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          
          {/* SVG ARROWS (Background) */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
            {/* Arrow 1 (Bottom curve from Step 1 to Step 2) */}
            <motion.path 
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              d="M 330 350 Q 420 450 510 350" 
              fill="none" stroke="#e8751a" strokeWidth="4" strokeLinecap="round" strokeDasharray="10,10"
            />
            {/* Arrowhead 1 */}
            <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} d="M 500 360 L 510 350 L 500 340" fill="none" stroke="#e8751a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

            {/* Arrow 2 (Top curve from Step 2 to Step 3) */}
            <motion.path 
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
              d="M 690 150 Q 780 50 870 150" 
              fill="none" stroke="#6b7280" strokeWidth="4" strokeLinecap="round" strokeDasharray="10,10"
            />
            {/* Arrowhead 2 */}
            <motion.path initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} d="M 860 140 L 870 150 L 860 160" fill="none" stroke="#6b7280" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* THE 3 BLOCKS */}
          <div style={{ display: 'flex', gap: '80px', position: 'relative', zIndex: 10 }}>
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.4, type: 'spring' }}
                whileHover={{ scale: 1.05, y: step.labelPos === 'bottom' ? -10 : 10 }}
                style={{ 
                  width: '280px', height: '200px', 
                  border: `3px solid ${step.color}`, borderRadius: '24px', 
                  background: 'white', position: 'relative',
                  display: 'flex', flexDirection: 'column', padding: '2rem 1.5rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)', cursor: 'pointer'
                }}
              >
                {/* Bullets */}
                <ul style={{ margin: 0, paddingLeft: '1.5rem', color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  {step.points.map((pt, i) => (
                    <li key={i} style={{ marginBottom: '0.8rem' }}>{pt}</li>
                  ))}
                </ul>

                {/* Overlapping Label Block */}
                <div style={{
                  position: 'absolute',
                  [step.labelPos === 'bottom' ? 'bottom' : 'top']: '-25px',
                  left: '50%', transform: 'translateX(-50%)',
                  background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                  color: 'white', padding: '0.8rem 1.5rem', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', gap: '0.8rem',
                  boxShadow: `0 10px 20px ${step.color}66`,
                  fontWeight: 'bold', fontSize: '1.2rem', whiteSpace: 'nowrap'
                }}>
                  {step.icon} {step.title}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* BOTTOM EXPLANATION TEXT (Matching image style) */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
          style={{ borderTop: '2px solid #cbd5e1', paddingTop: '1.5rem', marginTop: '2rem' }}
        >
          <h3 style={{ color: '#334155', margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>Flux de déploiement (Conteneurs Docker)</h3>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.5 }}>
            Cette séquence représente les groupes de services mis en place sur le serveur VPS. Le flux met en évidence les relations séquentielles depuis la réception de la requête (Proxy), son traitement (API), jusqu'à la supervision globale de l'infrastructure en temps réel.
          </p>
        </motion.div>

      </div>
    </Slide>
  );
}
