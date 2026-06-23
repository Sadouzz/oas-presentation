import { useState } from 'react';
import Slide from '../components/Slide';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, RefreshCw, FileCode, Network } from 'lucide-react';

const nodesData = [
  {
    id: 'view',
    title: 'View',
    icon: <Monitor size={24} />,
    desc: "Composants et Templates HTML. Gère le Data Binding et les interactions utilisateur (DOM).",
    color: '#e31837'
  },
  {
    id: 'viewmodel',
    title: 'ViewModel',
    icon: <RefreshCw size={24} />,
    desc: "Logique de présentation. Utilise RxJS et le State Management pour faire le lien avec la vue.",
    color: '#233287'
  },
  {
    id: 'model',
    title: 'Model',
    icon: <FileCode size={24} />,
    desc: "Interfaces TypeScript et DTOs représentant les structures de données strictes.",
    color: '#0f172a'
  },
  {
    id: 'api',
    title: 'HTTP Client',
    icon: <Network size={24} />,
    desc: "Communication asynchrone avec l'API Backend via les services injectables Angular.",
    color: '#16a34a'
  }
];

export default function ArchitectureAngular() {
  const [activeNode, setActiveNode] = useState(null);

  const currentData = activeNode ? nodesData.find(n => n.id === activeNode) : null;

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '2rem' }}>
        <span className="slide-number">09</span>
        <h2>Processus Angular</h2>
      </div>
      
      <div className="split-interactive">
        
        {/* Left Diagram */}
        <div className="interactive-diagram process-layout">
          <div className="process-line"></div>
          
          {nodesData.map((node) => {
            const isActive = activeNode === node.id;
            return (
              <div 
                key={node.id}
                className={`interactive-node magnetic ${isActive ? 'active' : ''}`}
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
                <p className="text-muted mt-4">Pour découvrir les détails de l'architecture Angular (MVVM).</p>
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
