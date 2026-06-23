import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Database, Leaf, ShieldCheck, Zap, Code, Link, Lock, Settings, Server, Cloud, ArrowUpRight, CopyCheck, RefreshCw, Box, Users, BarChart3, FileText, CreditCard } from 'lucide-react';
import postgresLogo from '../assets/logoTechnos/postgresql-svgrepo-com.png';
import springLogo from '../assets/logoTechnos/spring-boot-svgrepo-com.png';

export default function ArchitecturePostgres() {
  
  const pointsCles = [
    { icon: <FileText size={24} color="#2563eb" />, title: 'Standards SQL', desc: 'Compatibilité maximale et portabilité assurée' },
    { icon: <Link size={24} color="#2563eb" />, title: 'Relations complexes', desc: 'Gestion efficace des données fortement interdépendantes' },
    { icon: <ShieldCheck size={24} color="#2563eb" />, title: 'Propriétés ACID', desc: 'Fiabilité des transactions et cohérence garantie en cas d\'erreur' },
    { icon: <Zap size={24} color="#2563eb" />, title: 'Haute performance', desc: 'Optimisé pour les charges élevées et requêtes complexes' },
    { icon: <Users size={24} color="#2563eb" />, title: 'Open Source', desc: 'Communauté active, documentation riche et solution pérenne' }
  ];

  const casUtilisation = [
    { icon: <FileText size={24} color="#16a34a" />, title: 'Création de factures', desc: 'Transaction ACID pour garantir l\'exactitude' },
    { icon: <CreditCard size={24} color="#16a34a" />, title: 'Enregistrement des paiements', desc: 'Opérations sécurisées et cohérentes' },
    { icon: <Box size={24} color="#16a34a" />, title: 'Gestion du stock', desc: 'Mises à jour fiables et synchronisées' },
    { icon: <Users size={24} color="#16a34a" />, title: 'Gestion des clients, véhicules...', desc: 'Relations multiples et intégrité des données' },
    { icon: <BarChart3 size={24} color="#16a34a" />, title: 'Reporting & Analyses', desc: 'Requêtes complexes et agrégations performantes' }
  ];

  const neonFeatures = [
    { icon: <Cloud size={30} />, title: 'Hébergement managé', desc: 'Aucune gestion de serveur' },
    { icon: <RefreshCw size={30} />, title: 'Sauvegardes automatiques', desc: 'Backups continus et restauration simplifiée' },
    { icon: <Code size={30} />, title: 'Branching et isolation', desc: 'Environnements isolés pour le dev, test, staging, prod' },
    { icon: <ArrowUpRight size={30} />, title: 'Scalabilité à la demande', desc: 'Adaptation facile à la croissance du système' },
    { icon: <ShieldCheck size={30} />, title: 'Haute disponibilité & Sécurité', desc: 'Infrastructure fiable, redondée et sécurisée' }
  ];

  const postgresProps = [
    { icon: <ShieldCheck size={32} color="#2563eb" />, title: 'Conformité aux standards SQL', desc: 'Respect strict des standards SQL' },
    { icon: <Link size={32} color="#2563eb" />, title: 'Relations avancées', desc: 'Gestion optimale des relations entre les tables' },
    { icon: <Lock size={32} color="#16a34a" />, title: 'Contraintes d\'intégrité', desc: 'Clés primaires, étrangères et règles d\'intégrité référentielle' },
    { icon: <Settings size={32} color="#2563eb" />, title: 'Transactions ACID', desc: 'Atomicité, Cohérence, Isolation, Durabilité' },
    { icon: <Database size={32} color="#2563eb" />, title: 'Performance & Extensibilité', desc: 'Indexation avancée, requêtes complexes, vues matérialisées' }
  ];

  return (
    <Slide title="" noDefaultHeader={true}>
      
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center' }}>
        
        {/* Slide Header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '0.5rem', flexShrink: 0, width: '100%' }}>
          <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>12</span>
          <h2 style={{ margin: 0 }}>Base de Données & Infrastructure</h2>
        </div>
        
        {/* TOP: Spring Boot */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          style={{ 
            border: '2px solid #16a34a', borderRadius: '12px', padding: '0.5rem 1.5rem', 
            display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#f0fdf4', width: 'fit-content'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src={springLogo} alt="Spring" style={{ width: '30px' }} />
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#16a34a' }}>Spring Boot</div>
              <div style={{ fontSize: '0.75rem', color: '#15803d' }}>(Backend)</div>
            </div>
          </div>
          <div style={{ borderLeft: '2px solid #bbf7d0', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#15803d' }}>
              <Leaf size={14} /> Spring Data JPA
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#15803d' }}>
              <Database size={14} /> Hibernate ORM
            </div>
          </div>
        </motion.div>

        {/* Arrow Down */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#2563eb' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>JDBC / JPA</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>(SQL)</div>
          <div style={{ width: '2px', height: '10px', background: '#2563eb', margin: '2px 0' }}></div>
        </div>

        {/* CENTER SECTION: 3 Columns */}
        <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center', flex: 1, minHeight: 0 }}>
          
          {/* LEFT: POINTS CLÉS */}
          {/* <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            style={{ width: '260px', border: '2px solid #1e3a8a', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', background: 'white', height: 'fit-content', alignSelf: 'center' }}
          >
            <div style={{ background: '#1e3a8a', color: 'white', padding: '0.5rem', textAlign: 'center', fontWeight: 'bold', fontSize: '0.85rem' }}>POINTS CLÉS</div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '0.5rem', gap: '0.5rem' }}>
              {pointsCles.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', borderBottom: i < pointsCles.length - 1 ? '1px dashed #e2e8f0' : 'none', paddingBottom: i < pointsCles.length - 1 ? '0.5rem' : '0' }}>
                  <div style={{ background: '#eff6ff', padding: '0.4rem', borderRadius: '50%' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#1e3a8a' }}>{item.title}</div>
                    {/* <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.2 }}>{item.desc}</div> 
                  </div>
                </div>
              ))}
            </div>
          </motion.div> */}

          {/* MIDDLE: POSTGRESQL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
            style={{ width: '600px', border: '2px solid #3b82f6', borderRadius: '16px', padding: '2rem', background: '#eff6ff', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
              <img src={postgresLogo} alt="PostgreSQL" style={{ width: '80px' }} />
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e3a8a' }}>PostgreSQL</div>
                <div style={{ fontSize: '1rem', color: '#3b82f6', fontWeight: '500' }}>Base de données relationnelle<br/>avancée et fiable</div>
              </div>
            </div>
            
            <div style={{ borderTop: '2px dashed #93c5fd', margin: '1rem 0' }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', overflowY: 'auto' }}>
              {postgresProps.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#1e3a8a' }}>{item.title}</div>
                    {/* <div style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.3 }}>{item.desc}</div> */}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: CAS D'UTILISATION */}
          {/* <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
            style={{ width: '260px', border: '2px solid #1e3a8a', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', background: 'white', height: 'fit-content', alignSelf: 'center' }}
          >
            <div style={{ background: '#1e3a8a', color: 'white', padding: '0.5rem', textAlign: 'center', fontWeight: 'bold', fontSize: '0.85rem' }}>CAS D'UTILISATION OAS</div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '0.5rem', gap: '0.5rem' }}>
              {casUtilisation.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', borderBottom: i < casUtilisation.length - 1 ? '1px dashed #e2e8f0' : 'none', paddingBottom: i < casUtilisation.length - 1 ? '0.5rem' : '0' }}>
                  <div style={{ background: '#f0fdf4', padding: '0.4rem', borderRadius: '50%' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#1e3a8a' }}>{item.title}</div>
                    {/* <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.2 }}>{item.desc}</div> 
                  </div>
                </div>
              ))}
            </div>
          </motion.div> */}

        </div>

        {/* Arrow Down to NEON */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb' }}>
          <div style={{ width: '2px', height: '10px', background: '#2563eb' }}></div>
          <div style={{ fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', flexDirection: 'column' }}>
            <span>Connexion sécurisée</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Lock size={10}/> SSL/TLS</span>
          </div>
        </div>

        {/* BOTTOM: NEON CLOUD PLATFORM */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          style={{ 
            border: '2px solid #16a34a', borderRadius: '12px', padding: '0.8rem 1.5rem', 
            background: 'white', width: '100%'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <div style={{ width: '24px', height: '24px', background: '#10b981', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>N</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#16a34a', letterSpacing: '1px' }}>NEON CLOUD PLATFORM</div>
            <Cloud color="#16a34a" size={24} style={{ marginLeft: '1rem' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
            {neonFeatures.map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1, position: 'relative' }}>
                <div style={{ color: '#16a34a', marginBottom: '0.2rem' }}>{item.icon}</div>
                <div style={{ fontWeight: 'bold', fontSize: '0.8rem', color: '#1e293b', marginBottom: '0.1rem' }}>{item.title}</div>
                {/* <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.2 }}>{item.desc}</div> */}
                {i < neonFeatures.length - 1 && (
                  <div style={{ borderRight: '1px dashed #cbd5e1', height: '30px', position: 'absolute', right: '-0.5rem', top: '50%', transform: 'translateY(-50%)' }}></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </Slide>
  );
}
