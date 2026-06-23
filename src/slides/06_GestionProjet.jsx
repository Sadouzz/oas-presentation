import Slide from '../components/Slide';
import { Kanban, GitBranch, PenTool, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import slackLogo from '../assets/logoTechnos/slack.png';
import whatsappLogo from '../assets/logoTechnos/whatsapp.png';
import driveLogo from '../assets/logoTechnos/Google_Drive_icon_(2026).svg.png';

export default function GestionProjet() {
  const tools = [
    {
      icon: <Kanban size={64} />,
      title: "Méthode Scrumban",
      desc: "Approche hybride combinant la structure de Scrum et la flexibilité visuelle de Kanban.",
      color: "var(--oas-red)"
    },
    {
      icon: <GitBranch size={64} />,
      title: "Git & GitHub",
      desc: "Versionning du code, gestion des branches par fonctionnalité et revues de code (Pull Requests).",
      color: "var(--oas-blue)"
    },
    {
      icon: <PenTool size={64} />,
      title: "Figma",
      desc: "Maquettage UI/UX, prototypage interactif et design system avant l'intégration frontend.",
      color: "var(--oas-red)"
    },
    {
      icon: <MessageCircle size={64} />,
      title: "Communication & Partage",
      desc: "Échanges d'équipe via Slack et WhatsApp. Centralisation des documents sur Google Drive.",
      color: "var(--oas-blue)",
      logos: [slackLogo, whatsappLogo, driveLogo]
    }
  ];

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '3rem' }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>06a</span>
        <h2>Gestion de Projet</h2>
      </div>

      <div className="bento-grid" style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {tools.map((tool, idx) => (
          <motion.div 
            key={idx}
            className={`bento-card magnetic ${idx === 0 || idx === 3 ? 'dark' : 'outline'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 + 0.2 }}
            style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
          >
            <div className="card-icon" style={{ color: tool.color, flexShrink: 0 }}>
              {tool.icon}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: idx === 0 || idx === 3 ? 'white' : 'var(--oas-blue)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                {tool.title}
              </h3>
              <p style={{ color: idx === 0 || idx === 3 ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.5' }}>
                {tool.desc}
              </p>
              
              {tool.logos && (
                <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem' }}>
                  {tool.logos.map((logo, i) => (
                    <motion.img 
                      key={i} src={logo} alt="logo" 
                      style={{ width: '80px', height: '80px', objectFit: 'contain' }} 
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
