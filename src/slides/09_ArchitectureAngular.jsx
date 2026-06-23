import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Monitor, AppWindow, Settings, Route, ClipboardCheck, ShieldCheck, RefreshCw, Box, Braces, Layers, Cloud, Database, ArrowUpDown } from 'lucide-react';
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
      {/* <div style={{ fontSize: '0.75rem', color: '#475569', marginTop: '6px', lineHeight: '1.4' }}>{subtitle}</div> */}
    </div>
  );

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '1rem' }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>09</span>
        <h2>Architecture Angular</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', height: '80vh', maxWidth: '1100px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
        
        {/* TIER 1: VIEW */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ display: 'flex', width: '100%', height: '180px' }}>
          <div style={{ flex: 1, border: '2px solid #16a34a', borderRadius: '12px', background: '#f0fdf4', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '1.1rem', textTransform: 'uppercase' }}>COUCHE DE PRÉSENTATION (VIEW)</div>
            <div style={{ fontSize: '0.9rem', color: '#334155', marginBottom: '1rem' }}>Interface utilisateur</div>
            <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: '3rem', padding: '0 2rem' }}>
               <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Monitor size={80} color="#16a34a" />
                  <img src={angularLogo} alt="Angular" style={{ position: 'absolute', top: '16px', width: '36px' }} />
               </div>
               <div style={{ border: '1px solid #86efac', background: '#dcfce7', borderRadius: '8px', padding: '1rem 2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <AppWindow size={36} color="#16a34a" />
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#14532d', fontSize: '1rem' }}>Application Web Angular</div>
                    <div style={{ fontSize: '0.85rem', color: '#166534', marginTop: '4px' }}>Composants Angular<br/>Templates (HTML / SCSS)</div>
                  </div>
               </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', width: '180px' }}>
            <Bracket color="#16a34a" />
            <div style={{ fontSize: '0.9rem' }}>
              <div style={{ color: '#16a34a', fontWeight: 'bold' }}>1ère TIERCE</div>
              <div style={{ color: '#334155' }}>Présentation<br/>(View)</div>
            </div>
          </div>
        </motion.div>

        {/* ARROW 1 */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', height: '40px', paddingRight: '180px' }}>
          <ArrowUpDown color="#16a34a" size={24} />
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', marginLeft: '12px', color: '#16a34a' }}>Data Binding</span>
        </motion.div>

        {/* TIER 2: VIEWMODEL */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ display: 'flex', width: '100%', height: '160px' }}>
          <div style={{ flex: 1, border: '2px solid #2563eb', borderRadius: '12px', background: '#eff6ff', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '1.1rem', textTransform: 'uppercase' }}>COUCHE VIEWMODEL (VM)</div>
            <div style={{ fontSize: '0.9rem', color: '#334155', marginBottom: '1rem' }}>Logique de présentation</div>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', alignItems: 'center', flex: 1 }}>
              <IconBlock icon={<Settings size={36} color="#2563eb" />} title="Services Angular" subtitle="(Appels API)" />
              <Divider color="#93c5fd" />
              <IconBlock icon={<Route size={36} color="#2563eb" />} title="Routage" subtitle="(Navigation)" />
              <Divider color="#93c5fd" />
              <IconBlock icon={<ClipboardCheck size={36} color="#2563eb" />} title="Validation" subtitle="des formulaires" />
              <Divider color="#93c5fd" />
              <IconBlock icon={<ShieldCheck size={36} color="#2563eb" />} title="Authentification" subtitle="JWT" />
              <Divider color="#93c5fd" />
              <IconBlock icon={<RefreshCw size={36} color="#2563eb" />} title="Gestion d'état" subtitle="(State Management)" />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', width: '180px' }}>
            <Bracket color="#2563eb" />
            <div style={{ fontSize: '0.9rem' }}>
              <div style={{ color: '#2563eb', fontWeight: 'bold' }}>2ème TIERCE</div>
              <div style={{ color: '#334155' }}>Logique de<br/>présentation<br/>(ViewModel)</div>
            </div>
          </div>
        </motion.div>

        {/* ARROW 2 */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', height: '40px', paddingRight: '180px' }}>
          <ArrowUpDown color="#2563eb" size={24} />
        </motion.div>

        {/* TIER 3: MODEL */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ display: 'flex', width: '100%', height: '160px' }}>
          <div style={{ flex: 1, border: '2px solid #7c3aed', borderRadius: '12px', background: '#f5f3ff', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ color: '#7c3aed', fontWeight: 'bold', fontSize: '1.1rem', textTransform: 'uppercase' }}>COUCHE MODÈLE (MODEL)</div>
            <div style={{ fontSize: '0.9rem', color: '#334155', marginBottom: '1rem' }}>Gestion des données</div>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', alignItems: 'center', flex: 1 }}>
              <IconBlock icon={<Box size={36} color="#7c3aed" />} title="Modèles TypeScript" subtitle="(Classes / Types)" />
              <Divider color="#c4b5fd" />
              <IconBlock icon={<Braces size={36} color="#7c3aed" />} title="Interfaces" subtitle="(Contrats)" />
              <Divider color="#c4b5fd" />
              <IconBlock icon={<Layers size={36} color="#7c3aed" />} title="DTO" subtitle="(Data Transfer Objects)" />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', width: '180px' }}>
            <Bracket color="#7c3aed" />
            <div style={{ fontSize: '0.9rem' }}>
              <div style={{ color: '#7c3aed', fontWeight: 'bold' }}>3ème TIERCE</div>
              <div style={{ color: '#334155' }}>Données<br/>(Model)</div>
            </div>
          </div>
        </motion.div>

        {/* ARROW 3 */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', height: '40px', paddingRight: '180px' }}>
          <ArrowUpDown color="#7c3aed" size={24} />
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', marginLeft: '12px', color: '#7c3aed' }}>HTTP / HTTPS</span>
        </motion.div>

        {/* TIER 4: BACKEND */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} style={{ display: 'flex', width: '100%', height: '110px' }}>
          <div style={{ flex: 1, border: '2px solid #ea580c', borderRadius: '12px', background: '#fff7ed', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
             <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <Cloud size={56} color="#ea580c" />
               <span style={{ position: 'absolute', fontWeight: 'bold', color: '#ea580c', fontSize: '1rem', top: '22px' }}>API</span>
             </div>
             <div style={{ textAlign: 'center' }}>
               <div style={{ color: '#ea580c', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '4px' }}>API REST (BACKEND)</div>
               {/* <div style={{ fontSize: '0.95rem', color: '#334155', lineHeight: '1.4' }}>Services métier<br/>Base de données</div> */}
             </div>
             <Database size={56} color="#ea580c" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', width: '180px' }}>
            <Bracket color="#ea580c" />
            <div style={{ fontSize: '0.9rem' }}>
              <div style={{ color: '#ea580c', fontWeight: 'bold' }}>Backend</div>
              <div style={{ color: '#334155' }}>(Services &<br/>Données)</div>
            </div>
          </div>
        </motion.div>

      </div>
    </Slide>
  );
}
