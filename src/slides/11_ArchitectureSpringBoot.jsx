import { useState } from 'react';
import Slide from '../components/Slide';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, ArrowRightLeft, Settings, Database } from 'lucide-react';

const childNodes = [
  {
    id: 'controllers',
    title: 'Controllers',
    icon: <ArrowRightLeft size={24} />,
    desc: "Exposent les Endpoints HTTP REST. Gèrent la validation des requêtes (DTOs) et les réponses JSON.",
    color: '#e31837'
  },
  {
    id: 'services',
    title: 'Services',
    icon: <Settings size={24} />,
    desc: "Contient toute la logique métier complexe d'OAS (Facturation, Devis, Algorithmes de Diagnostic).",
    color: '#233287'
  },
  {
    id: 'repositories',
    title: 'Data JPA',
    icon: <Database size={24} />,
    desc: "Couche d'accès aux données. Utilise Spring Data JPA et Hibernate pour interagir avec Postgres.",
    color: '#16a34a'
  }
];

export default function ArchitectureSpringBoot() {
  const [activeNode, setActiveNode] = useState(null);

  const currentData = activeNode === 'core' 
    ? { id: 'core', title: 'Spring Boot Core', color: '#6db33f', desc: "Le moteur principal. Gère l'injection de dépendances, l'auto-configuration et le serveur Tomcat intégré." }
    : childNodes.find(n => n.id === activeNode);

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '2rem' }}>
        <span className="slide-number">11</span>
        <h2>Hiérarchie Spring Boot</h2>
      </div>
      
      <div className="split-interactive">
        
        {/* Left Diagram */}
        <div className="interactive-diagram hierarchy-layout">
          <svg className="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path className="svg-line" vectorEffect="non-scaling-stroke" d="M 50 15 Q 50 37.5 20 60" />
            <path className="svg-line" vectorEffect="non-scaling-stroke" d="M 50 15 L 50 60" />
            <path className="svg-line" vectorEffect="non-scaling-stroke" d="M 50 15 Q 50 37.5 80 60" />
          </svg>
          
          <div 
            className={`interactive-node node-root magnetic ${activeNode === 'core' ? 'active' : ''}`}
            onMouseEnter={() => setActiveNode('core')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <Leaf size={24} color="#6db33f" />
            <span>Core</span>
          </div>

          <div className="hierarchy-children">
            {childNodes.map((node, idx) => {
              const isActive = activeNode === node.id;
              return (
                <div 
                  key={node.id}
                  className={`interactive-node hierarchy-child-${idx + 1} magnetic ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <motion.div animate={isActive ? { rotate: 360 } : {}} transition={{ duration: 0.5 }}>
                    {node.icon}
                  </motion.div>
                  <span>{node.title}</span>
                </div>
              );
            })}
          </div>
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
                <p className="text-muted mt-4">Pour explorer l'architecture Backend multicouche de Spring Boot.</p>
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
