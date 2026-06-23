import { useState } from 'react';
import Slide from '../components/Slide';
import { motion, AnimatePresence } from 'framer-motion';
import { Database } from 'lucide-react';

const satellites = [
  {
    id: 'integrite',
    title: 'Intégrité ACID',
    className: 'pos-tl',
    desc: "Garantit la fiabilité absolue des transactions financières (Factures, Devis).",
    color: '#e31837'
  },
  {
    id: 'relations',
    title: 'Relations FK',
    className: 'pos-tr',
    desc: "Modèle relationnel strict via clés étrangères pour éviter toute donnée orpheline.",
    color: '#233287'
  },
  {
    id: 'perf',
    title: 'Performance',
    className: 'pos-bl',
    desc: "Indexation optimisée sur les recherches fréquentes (Plaques d'immatriculation, Clients).",
    color: '#16a34a'
  },
  {
    id: 'cloud',
    title: 'Neon Serverless',
    className: 'pos-br',
    desc: "Architecture Cloud permettant le Branching de BD et le Scaling dynamique selon la charge.",
    color: '#f59e0b'
  }
];

export default function ArchitecturePostgres() {
  const [activeNode, setActiveNode] = useState(null);

  const currentData = activeNode === 'center'
    ? { id: 'center', title: 'PostgreSQL Neon', color: '#336791', desc: "Base de données relationnelle hébergée dans le Cloud (Serverless) pour une scalabilité automatique." }
    : satellites.find(n => n.id === activeNode);

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '2rem' }}>
        <span className="slide-number">12</span>
        <h2>Relation Base de données</h2>
      </div>
      
      <div className="split-interactive">
        
        {/* Left Diagram */}
        <div className="interactive-diagram mindmap-layout">
          <svg className="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path className="svg-line" vectorEffect="non-scaling-stroke" d="M 50 50 L 20 20" />
            <path className="svg-line" vectorEffect="non-scaling-stroke" d="M 50 50 L 80 20" />
            <path className="svg-line" vectorEffect="non-scaling-stroke" d="M 50 50 L 20 80" />
            <path className="svg-line" vectorEffect="non-scaling-stroke" d="M 50 50 L 80 80" />
          </svg>
          
          <div 
            className={`interactive-node mindmap-center magnetic ${activeNode === 'center' ? 'active' : ''}`}
            onMouseEnter={() => setActiveNode('center')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <Database size={32} />
            <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>Postgres</span>
          </div>

          {satellites.map((node) => {
            const isActive = activeNode === node.id;
            return (
              <div 
                key={node.id}
                className={`interactive-node mindmap-node ${node.className} magnetic ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <span>{node.title}</span>
              </div>
            );
          })}
        </div>
        
        {/* Right Details Panel */}
        <div className="interactive-details">
          <AnimatePresence mode="wait">
            {!currentData ? (
              <motion.div 
                key="default"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Survolez un nœud</h3>
                <p className="text-muted mt-4">Pour comprendre la modélisation et l'hébergement des données.</p>
              </motion.div>
            ) : (
              <motion.div 
                key={currentData.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{ color: currentData.color }}>{currentData.title}</h3>
                <p className="text-muted mt-4">{currentData.desc}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </Slide>
  );
}
