import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { AppWindow, Paintbrush, Layers, Pointer, Box, Database, Key, Settings, FileJson, Server, Cloud, ChevronRight, ChevronDown, Folder, FolderOpen, FileCode, Image as ImageIcon } from 'lucide-react';
import flutterLogo from '../assets/logoTechnos/flutter-svgrepo-com.png';
import springLogo from '../assets/logoTechnos/spring-boot-svgrepo-com.png';

export default function ArchitectureFlutter() {
  
  const boxStyle = (color) => ({
    border: `2px solid ${color}`,
    borderRadius: '16px',
    padding: '1.2rem',
    background: 'white',
    boxShadow: `0 10px 30px ${color}22`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.8rem',
    position: 'absolute',
    zIndex: 10
  });

  const TreeItem = ({ name, type, depth = 0, isOpen = false }) => {
    const isDir = type === 'dir';
    return (
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: `${depth * 1.2}rem`, color: '#cccccc', fontSize: '0.85rem', fontFamily: 'Consolas, monospace', paddingBottom: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'default' }}>
          {isDir ? (isOpen ? <ChevronDown size={14} color="#858585" /> : <ChevronRight size={14} color="#858585" />) : <span style={{ width: 14 }}></span>}
          {isDir ? (isOpen ? <FolderOpen size={16} color="#60a5fa" /> : <Folder size={16} color="#60a5fa" />) : 
           (name.endsWith('.dart') ? <img src={flutterLogo} style={{width: 14}} alt="dart"/> : 
            name.endsWith('.jpg') ? <ImageIcon size={16} color="#4ade80" /> : <FileCode size={16} color="#9ca3af" /> )}
          <span style={{ color: isDir ? '#cccccc' : '#9cdcfe' }}>{name}</span>
        </div>
      </div>
    );
  };

  return (
    <Slide title="" noDefaultHeader={true}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '1rem', flexShrink: 0 }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>10</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h2 style={{ margin: 0 }}>Architecture Flutter & Structure du Projet</h2>
          <img src={flutterLogo} alt="Flutter" style={{ width: '40px', transform: 'translateY(5px)' }} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', width: '100%', height: '80vh', maxWidth: '1400px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
        
        {/* LEFT: File Tree (VS Code) */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} style={{ width: '320px', height: 'fit-content', background: '#1e1e1e', borderRadius: '12px', padding: '1rem 0.5rem', overflowY: 'auto', overflowX: 'hidden', border: '1px solid #333', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
          <div style={{ color: '#858585', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '1px', paddingLeft: '1rem' }}>Explorer : oas-mobile</div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TreeItem name="oas-mobile" type="dir" isOpen={true} depth={0} />
            <TreeItem name=".dart_tool" type="dir" depth={1} />
            <TreeItem name="android" type="dir" depth={1} />
            <TreeItem name="assets\images" type="dir" isOpen={true} depth={1} />
            <TreeItem name="logo_oas.jpg" type="file" depth={2} />
            <TreeItem name="build" type="dir" depth={1} />
            <TreeItem name="ios" type="dir" depth={1} />
            <TreeItem name="lib" type="dir" isOpen={true} depth={1} />
            <TreeItem name="core" type="dir" depth={2} />
            <TreeItem name="modules" type="dir" isOpen={true} depth={2} />
            <TreeItem name="accueil" type="dir" depth={3} />
            <TreeItem name="authentification" type="dir" depth={3} />
            <TreeItem name="client" type="dir" depth={3} />
            <TreeItem name="factures" type="dir" isOpen={true} depth={3} />
            <TreeItem name="models" type="dir" isOpen={true} depth={4} />
            <TreeItem name="facture.dart" type="file" depth={5} />
            <TreeItem name="repository" type="dir" isOpen={true} depth={4} />
            <TreeItem name="facture_repository.dart" type="file" depth={5} />
            <TreeItem name="detail_facture_ecran.dart" type="file" depth={4} />
            <TreeItem name="facture_ecran.dart" type="file" depth={4} />
          </div>
        </motion.div>

        {/* RIGHT: Architecture Graph */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div style={{ position: 'relative', width: '820px', height: '580px', transform: 'scale(1)', transformOrigin: 'center center' }}>
          
            {/* SVG ARROWS LAYER */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, overflow: 'visible' }}>
              <defs>
                <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
                </marker>
                <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#16a34a" />
                </marker>
                <marker id="arrow-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#9333ea" />
                </marker>
                <marker id="arrow-orange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#ea580c" />
                </marker>
              </defs>

              {/* 1. UI -> Logic */}
              <motion.path 
                animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                d="M 320 70 C 400 70, 420 120, 496 120" 
                fill="none" stroke="#2563eb" strokeWidth="3" markerEnd="url(#arrow-blue)" strokeDasharray="8 8" 
              />
              {/* Logic -> UI */}
              <motion.path 
                animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                d="M 500 150 C 420 150, 400 100, 324 100" 
                fill="none" stroke="#16a34a" strokeWidth="3" markerEnd="url(#arrow-green)" strokeDasharray="8 8" 
              />
              <text x="408" y="80" fill="#2563eb" fontSize="11" fontWeight="bold" textAnchor="middle">Événements</text>
              <text x="412" y="140" fill="#16a34a" fontSize="11" fontWeight="bold" textAnchor="middle">Mise à jour d'état</text>

              {/* 2. Logic -> Data */}
              <motion.path 
                animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                d="M 500 170 C 420 170, 400 270, 324 270" 
                fill="none" stroke="#16a34a" strokeWidth="3" markerEnd="url(#arrow-green)" strokeDasharray="8 8" 
              />
              {/* Data -> Logic */}
              <motion.path 
                animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                d="M 320 300 C 400 300, 420 200, 496 200" 
                fill="none" stroke="#9333ea" strokeWidth="3" markerEnd="url(#arrow-purple)" strokeDasharray="8 8" 
              />
              <text x="412" y="210" fill="#16a34a" fontSize="11" fontWeight="bold" textAnchor="middle">Demande de données</text>
              <text x="408" y="260" fill="#9333ea" fontSize="11" fontWeight="bold" textAnchor="middle">Retour Modèles</text>

              {/* 3. Data -> Backend */}
              <motion.path 
                animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                d="M 250 340 C 250 440, 400 440, 496 440" 
                fill="none" stroke="#9333ea" strokeWidth="3" markerEnd="url(#arrow-purple)" strokeDasharray="8 8" 
              />
              {/* Backend -> Data */}
              <motion.path 
                animate={{ strokeDashoffset: [0, -24] }} transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
                d="M 500 460 C 350 460, 150 440, 150 344" 
                fill="none" stroke="#ea580c" strokeWidth="3" markerEnd="url(#arrow-orange)" strokeDasharray="8 8" 
              />
              <text x="337" y="420" fill="#9333ea" fontSize="11" fontWeight="bold" textAnchor="middle">Requête HTTP (Dio)</text>
              <text x="268" y="455" fill="#ea580c" fontSize="11" fontWeight="bold" textAnchor="middle">Réponse API (JSON)</text>
            </svg>

            {/* 1. TOP-LEFT: UI */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} style={{ ...boxStyle('#2563eb'), width: '280px', top: '10px', left: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <AppWindow size={24} color="#2563eb" />
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#1e3a8a' }}>Interface (UI)</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}><Paintbrush size={20} color="#3b82f6" /><div style={{ fontSize: '0.7rem' }}>Widgets</div></div>
                <div style={{ textAlign: 'center' }}><Layers size={20} color="#3b82f6" /><div style={{ fontSize: '0.7rem' }}>Layouts</div></div>
                <div style={{ textAlign: 'center' }}><Pointer size={20} color="#3b82f6" /><div style={{ fontSize: '0.7rem' }}>Events</div></div>
              </div>
            </motion.div>

            {/* 2. MIDDLE-RIGHT: LOGIC & STATE */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} style={{ ...boxStyle('#16a34a'), width: '280px', top: '100px', left: '500px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Settings size={24} color="#16a34a" />
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#14532d' }}>Logique & État</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}><Box size={20} color="#22c55e" /><div style={{ fontSize: '0.7rem' }}>Provider</div></div>
                <div style={{ textAlign: 'center' }}><Settings size={20} color="#22c55e" /><div style={{ fontSize: '0.7rem' }}>Métier</div></div>
              </div>
            </motion.div>

            {/* 3. BOTTOM-LEFT: DATA & REPOS */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} style={{ ...boxStyle('#9333ea'), width: '280px', top: '240px', left: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Database size={24} color="#9333ea" />
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#581c87' }}>Modèles & Repositories</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}><Server size={20} color="#a855f7" /><div style={{ fontSize: '0.7rem' }}>Dio HTTP</div></div>
                <div style={{ textAlign: 'center' }}><FileJson size={20} color="#a855f7" /><div style={{ fontSize: '0.7rem' }}>JSON</div></div>
                <div style={{ textAlign: 'center' }}><Key size={20} color="#a855f7" /><div style={{ fontSize: '0.7rem' }}>Auth</div></div>
              </div>
            </motion.div>

            {/* 4. BOTTOM-RIGHT: BACKEND */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} style={{ ...boxStyle('#ea580c'), width: '280px', top: '420px', left: '500px', background: '#fff7ed' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <img src={springLogo} alt="Spring Boot" style={{ width: '25px' }} />
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#9a3412' }}>API Backend</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </Slide>
  );
}
