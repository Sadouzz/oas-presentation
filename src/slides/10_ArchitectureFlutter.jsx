import { useState } from 'react';
import Slide from '../components/Slide';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Layers, Server, FileJson } from 'lucide-react';

const nodesData = [
  {
    id: 'ui',
    title: 'UI Widgets',
    className: 'pos-top',
    icon: <Smartphone size={24} />,
    desc: "Arbre de Widgets réactifs et Material Design pour une expérience utilisateur native et fluide.",
    color: '#e31837'
  },
  {
    id: 'provider',
    title: 'Provider',
    className: 'pos-right',
    icon: <Layers size={24} />,
    desc: "State Management pour réagir aux événements utilisateur et mettre à jour l'UI en temps réel.",
    color: '#233287'
  },
  {
    id: 'dio',
    title: 'Client HTTP',
    className: 'pos-bottom',
    icon: <Server size={24} />,
    desc: "Client HTTP performant (Dio) pour l'envoi et la réception de requêtes REST sécurisées.",
    color: '#0f172a'
  },
  {
    id: 'models',
    title: 'Models',
    className: 'pos-left',
    icon: <FileJson size={24} />,
    desc: "Sérialisation et désérialisation automatiques des données Dart / JSON.",
    color: '#16a34a'
  }
];

export default function ArchitectureFlutter() {
  const [activeNode, setActiveNode] = useState(null);

  const currentData = activeNode ? nodesData.find(n => n.id === activeNode) : null;

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '2rem' }}>
        <span className="slide-number">10</span>
        <h2>Cycle Flutter</h2>
      </div>
      
      <div className="split-interactive">
        
        {/* Left Diagram */}
        <div className="interactive-diagram cycle-layout">
          <svg className="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path className="svg-line" vectorEffect="non-scaling-stroke" d="M 50 15 A 35 35 0 0 1 85 50" />
              <path className="svg-line" vectorEffect="non-scaling-stroke" d="M 85 50 A 35 35 0 0 1 50 85" />
              <path className="svg-line" vectorEffect="non-scaling-stroke" d="M 50 85 A 35 35 0 0 1 15 50" />
              <path className="svg-line" vectorEffect="non-scaling-stroke" d="M 15 50 A 35 35 0 0 1 50 15" />
          </svg>
          
          {nodesData.map((node) => {
            const isActive = activeNode === node.id;
            return (
              <div 
                key={node.id}
                className={`interactive-node cycle-node ${node.className} magnetic ${isActive ? 'active' : ''}`}
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

          <div className="cycle-center"><Smartphone size={80} /></div>
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
                <p className="text-muted mt-4">Pour examiner le cycle de vie réactif de l'App Mobile Flutter.</p>
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
