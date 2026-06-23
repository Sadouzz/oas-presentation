import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Kanban, GitBranch, Layout, FileCode2 } from 'lucide-react';

export default function GestionEtConception() {
  return (
    <Slide title="Gestion de Projet & Conception UML">
      <div className="grid-2">
        {/* Gestion de projet */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ color: 'var(--oas-blue)', marginBottom: '0.5rem' }}>Outils de Gestion</h3>
          
          <motion.div className="card" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className="card-title"><Kanban size={24} color="var(--oas-red)"/> Jira / Trello</div>
            <p>Gestion des tâches via la méthode Agile (Scrum). Suivi des sprints et des tickets.</p>
          </motion.div>

          <motion.div className="card" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <div className="card-title"><GitBranch size={24} color="var(--oas-red)"/> Git & GitHub</div>
            <p>Versionning du code, gestion des branches par fonctionnalité et revues de code (Pull Requests).</p>
          </motion.div>
        </div>

        {/* Conception UML */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ color: 'var(--oas-blue)', marginBottom: '0.5rem' }}>Conception UML</h3>
          
          <motion.div className="card" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
            <div className="card-title"><Layout size={24} color="var(--oas-blue)"/> Diagramme de Cas d'Utilisation</div>
            <p>Définition claire des rôles (Agent, Super Agent, Client) et de leurs interactions avec le système.</p>
          </motion.div>

          <motion.div className="card" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
            <div className="card-title"><FileCode2 size={24} color="var(--oas-blue)"/> Diagramme de Classes</div>
            <p>Modélisation de la base de données : entités Fiche de Réparation, Facture, Client, Véhicule, etc.</p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
