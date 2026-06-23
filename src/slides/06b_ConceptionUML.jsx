import Slide from '../components/Slide';
import { Layout, FileCode2, Share2, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ConceptionUML() {
  const diagrams = [
    {
      icon: <Layout size={40} />,
      title: "Cas d'Utilisation",
      desc: "Définition claire des rôles (Agent, Super Agent, Client) et de leurs interactions avec le système.",
      color: "var(--oas-blue)"
    },
    {
      icon: <FileCode2 size={40} />,
      title: "Diagramme de Classes",
      desc: "Modélisation des entités en base de données : Fiche de Réparation, Facture, Client, Véhicule.",
      color: "var(--oas-red)"
    },
    {
      icon: <Share2 size={40} />,
      title: "Diagramme de Séquence",
      desc: "Orchestration temporelle des appels entre l'interface client, l'API et la base de données.",
      color: "var(--oas-blue)"
    },
    {
      icon: <Workflow size={40} />,
      title: "Diagramme d'Activité",
      desc: "Représentation logique du flux de travail, de l'entrée du véhicule à sa restitution.",
      color: "var(--oas-red)"
    }
  ];

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '3rem' }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>07</span>
        <h2>Conception UML</h2>
      </div>

      <div className="bento-grid asymmetrical" style={{ marginTop: '2rem' }}>
        {diagrams.map((diag, idx) => (
          <motion.div 
            key={idx}
            className={`bento-card magnetic ${idx === 1 || idx === 2 ? 'dark' : 'outline'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 + 0.2 }}
          >
            <div className="card-icon" style={{ color: diag.color }}>
              {diag.icon}
            </div>
            <div>
              <h3 style={{ color: idx === 1 || idx === 2 ? 'white' : 'var(--oas-blue)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                {diag.title}
              </h3>
              <p style={{ color: idx === 1 || idx === 2 ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)' }}>
                {diag.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
