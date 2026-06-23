import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Monitor, AppWindow, Settings, Route, ClipboardCheck, ShieldCheck, RefreshCw, Box, Braces, Layers, Cloud, Database, ArrowUpDown, ChevronRight, ChevronDown, Folder, FolderOpen, FileCode } from 'lucide-react';
import angularLogo from '../assets/logoTechnos/angular-icon-svgrepo-com.png';

export default function ArchitectureAngular() {
  const Bracket = ({ color }) => (
    <svg width="24" height="100%" viewBox="0 0 24 100" preserveAspectRatio="none" style={{ margin: '0 1rem', overflow: 'visible' }}>
      <path d="M 6 5 C 18 5, 18 40, 22 50 C 18 60, 18 95, 6 95" fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );

  const Divider = ({ color }) => <div style={{ width: '1px', height: '60px', borderRight: `2px dotted ${color}` }} />;

  const IconBlock = ({ icon, title, subtitle }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '140px' }}>
      {icon}
      <div style={{ fontSize: '0.85rem', fontWeight: 'bold', marginTop: '14px', color: '#1e293b', lineHeight: '1.4' }}>{title}</div>
    </div>
  );

  const TreeItem = ({ name, type, depth = 0, isOpen = false }) => {
    const isDir = type === 'dir';
    return (
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: `${depth * 1.2}rem`, color: '#cccccc', fontSize: '0.85rem', fontFamily: 'Consolas, monospace', paddingBottom: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'default' }}>
          {isDir ? (isOpen ? <ChevronDown size={14} color="#858585" /> : <ChevronRight size={14} color="#858585" />) : <span style={{ width: 14 }}></span>}
          {isDir ? (isOpen ? <FolderOpen size={16} color="#60a5fa" /> : <Folder size={16} color="#60a5fa" />) : 
           (name.endsWith('.html') ? <FileCode size={16} color="#e34f26" /> : <img src={angularLogo} style={{width: 14}} alt="ts"/> )}
          <span style={{ color: isDir ? '#cccccc' : '#9cdcfe' }}>{name}</span>
        </div>
      </div>
    );
  };

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '1rem' }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>09</span>
        <h2>Architecture Angular & Structure du Projet</h2>
      </div>

      <div style={{ display: 'flex', gap: '2rem', width: '100%', height: '80vh', maxWidth: '1400px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
        
        {/* LEFT: File Tree (VS Code) */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} style={{ width: '300px', height: 'fit-content', background: '#1e1e1e', borderRadius: '12px', padding: '1rem 0.5rem', overflowY: 'auto', overflowX: 'hidden', border: '1px solid #333', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
          <div style={{ color: '#858585', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '1px', paddingLeft: '1rem' }}>Explorer : oas-front</div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TreeItem name="oas-front" type="dir" isOpen={true} depth={0} />
            <TreeItem name="src" type="dir" isOpen={true} depth={1} />
            <TreeItem name="app" type="dir" isOpen={true} depth={2} />
            
            <TreeItem name="admin" type="dir" depth={3} />
            <TreeItem name="auth" type="dir" depth={3} />
            <TreeItem name="bons-commande" type="dir" isOpen={true} depth={3} />
            <TreeItem name="bons-commande.component.html" type="file" depth={4} />
            <TreeItem name="bons-commande.component.ts" type="file" depth={4} />
            <TreeItem name="bons-de-sortie" type="dir" depth={3} />
            <TreeItem name="bons-livraison" type="dir" depth={3} />
            <TreeItem name="clients" type="dir" depth={3} />
            <TreeItem name="core" type="dir" depth={3} />
            <TreeItem name="dashboard" type="dir" depth={3} />
            <TreeItem name="factures" type="dir" depth={3} />
            <TreeItem name="fiches-atelier" type="dir" depth={3} />
            <TreeItem name="fournisseurs" type="dir" depth={3} />
            <TreeItem name="gestion-recu" type="dir" depth={3} />
          </div>
        </motion.div>

        {/* RIGHT: Architecture Tiers */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          
          {/* TIER 1: FEATURES */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ display: 'flex', width: '100%', height: '220px' }}>
            <div style={{ flex: 1, border: '2px solid #16a34a', borderRadius: '12px', background: '#f0fdf4', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <div style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '1.1rem', textTransform: 'uppercase' }}>MODULES FONCTIONNELS (FEATURES)</div>
              <div style={{ fontSize: '0.9rem', color: '#334155', marginBottom: '1rem' }}>Dossiers indépendants : admin, bons-commande, factures...</div>
              
              <div style={{ display: 'flex', gap: '1rem', width: '100%', height: '100%' }}>
                 {/* View */}
                 <div style={{ flex: 1, border: '1px solid #86efac', background: '#dcfce7', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <AppWindow size={32} color="#16a34a" />
                    <div style={{ fontWeight: 'bold', fontSize: '0.9rem', marginTop: '0.5rem', color: '#14532d' }}>Composants (UI)</div>
                    <div style={{ fontSize: '0.75rem', color: '#166534', textAlign: 'center' }}>.html, .scss, .ts</div>
                 </div>
                 {/* Logic */}
                 <div style={{ flex: 1, border: '1px solid #86efac', background: '#dcfce7', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Settings size={32} color="#16a34a" />
                    <div style={{ fontWeight: 'bold', fontSize: '0.9rem', marginTop: '0.5rem', color: '#14532d' }}>Services Locaux</div>
                    <div style={{ fontSize: '0.75rem', color: '#166534', textAlign: 'center' }}>Logique métier</div>
                 </div>
                 {/* Models */}
                 <div style={{ flex: 1, border: '1px solid #86efac', background: '#dcfce7', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Braces size={32} color="#16a34a" />
                    <div style={{ fontWeight: 'bold', fontSize: '0.9rem', marginTop: '0.5rem', color: '#14532d' }}>Modèles</div>
                    <div style={{ fontSize: '0.75rem', color: '#166534', textAlign: 'center' }}>Interfaces & DTOs</div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* ARROW 1 */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
            <ArrowUpDown color="#64748b" size={24} />
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', marginLeft: '12px', color: '#64748b' }}>Injection de dépendances & État global</span>
          </motion.div>

          {/* TIER 2: CORE */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ display: 'flex', width: '100%', height: '140px' }}>
            <div style={{ flex: 1, border: '2px solid #2563eb', borderRadius: '12px', background: '#eff6ff', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <div style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '1.1rem', textTransform: 'uppercase' }}>MODULE CORE / SHARED</div>
              <div style={{ fontSize: '0.9rem', color: '#334155', marginBottom: '1rem' }}>Dossiers transverses : core, auth</div>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', alignItems: 'center', flex: 1 }}>
                <IconBlock icon={<ShieldCheck size={32} color="#2563eb" />} title="Guards (Auth)" />
                <Divider color="#93c5fd" />
                <IconBlock icon={<Route size={32} color="#2563eb" />} title="Intercepteurs HTTP" />
                <Divider color="#93c5fd" />
                <IconBlock icon={<RefreshCw size={32} color="#2563eb" />} title="Services Globaux" />
              </div>
            </div>
          </motion.div>

          {/* ARROW 2 */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', height: '40px' }}>
            <ArrowUpDown color="#ea580c" size={24} />
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', marginLeft: '12px', color: '#ea580c' }}>Requêtes HTTP (HttpClient)</span>
          </motion.div>

          {/* TIER 3: BACKEND */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} style={{ display: 'flex', width: '100%', height: '100px' }}>
            <div style={{ flex: 1, border: '2px solid #ea580c', borderRadius: '12px', background: '#fff7ed', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
               <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                 <Cloud size={48} color="#ea580c" />
                 <span style={{ position: 'absolute', fontWeight: 'bold', color: '#ea580c', fontSize: '0.9rem', top: '18px' }}>API</span>
               </div>
               <div style={{ textAlign: 'center' }}>
                 <div style={{ color: '#ea580c', fontWeight: 'bold', fontSize: '1.1rem', textTransform: 'uppercase' }}>API REST (SPRING BOOT)</div>
               </div>
               <Database size={48} color="#ea580c" />
            </div>
          </motion.div>

        </div>
      </div>
    </Slide>
  );
}
