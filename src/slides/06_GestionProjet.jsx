import Slide from '../components/Slide';
import { Kanban, GitBranch, PenTool, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GestionProjet() {
  const tools = [
    {
      icon: <Kanban size={40} />,
      title: "Jira & Trello",
      desc: "Gestion des tâches via la méthode Agile (Scrum). Suivi rigoureux des sprints et des tickets.",
      color: "var(--oas-red)"
    },
    {
      icon: <GitBranch size={40} />,
      title: "Git & GitHub",
      desc: "Versionning du code, gestion des branches par fonctionnalité et revues de code (Pull Requests).",
      color: "var(--oas-blue)"
    },
    {
      icon: <PenTool size={40} />,
      title: "Figma",
      desc: "Maquettage UI/UX, prototypage interactif et design system avant l'intégration frontend.",
      color: "var(--oas-red)"
    },
    {
      icon: <Users size={40} />,
      title: "Méthodologie Agile",
      desc: "Daily meetings, itérations courtes et adaptations constantes aux retours des utilisateurs.",
      color: "var(--oas-blue)"
    }
  ];

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '3rem' }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>06</span>
        <h2>Gestion de Projet</h2>
      </div>

      <div className="bento-grid asymmetrical" style={{ marginTop: '2rem' }}>
        {tools.map((tool, idx) => (
          <motion.div 
            key={idx}
            className={`bento-card magnetic ${idx === 0 || idx === 3 ? 'dark' : 'outline'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 + 0.2 }}
          >
            <div className="card-icon" style={{ color: tool.color }}>
              {tool.icon}
            </div>
            <div>
              <h3 style={{ color: idx === 0 || idx === 3 ? 'white' : 'var(--oas-blue)', marginBottom: '1rem', fontSize: '1.5rem' }}>
                {tool.title}
              </h3>
              <p style={{ color: idx === 0 || idx === 3 ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)' }}>
                {tool.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
