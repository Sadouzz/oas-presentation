import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { MonitorSmartphone, ServerCog, Database, ArrowRightLeft } from 'lucide-react';

export default function Architecture3Tiers() {
  const tiers = [
    {
      title: "Couche Présentation",
      subtitle: "Client (Frontend)",
      icon: <MonitorSmartphone size={48} />,
      color: "#3b82f6", // Blue
      items: ["Interface Utilisateur", "Interactions", "Affichage des données"],
      delay: 0.2
    },
    {
      title: "Couche Métier",
      subtitle: "Serveur d'application (Backend)",
      icon: <ServerCog size={48} />,
      color: "#10b981", // Green
      items: ["Logique applicative", "Traitements métier", "Sécurité & Contrôle"],
      delay: 0.4
    },
    {
      title: "Couche Données",
      subtitle: "Serveur de Base de données",
      icon: <Database size={48} />,
      color: "#8b5cf6", // Purple
      items: ["Stockage persistant", "Intégrité des données", "Requêtes optimisées"],
      delay: 0.6
    }
  ];

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '4rem', position: 'relative', zIndex: 10 }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>06c</span>
        <h2>Architecture 3 Tiers</h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', position: 'relative', padding: '0 2rem' }}>
        
        {/* Connection Lines Background */}
        <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '4px', background: 'var(--border-color)', transform: 'translateY(-50%)', zIndex: 0, borderRadius: '2px' }}>
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ height: '100%', background: 'linear-gradient(90deg, #3b82f6, #10b981, #8b5cf6)', borderRadius: '2px' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', zIndex: 10 }}>
          {tiers.map((tier, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: tier.delay, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -10 }}
                style={{ 
                  background: 'white',
                  border: `2px solid ${tier.color}`,
                  borderRadius: '24px',
                  padding: '2.5rem 2rem',
                  width: '320px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: `0 20px 40px ${tier.color}22`,
                  position: 'relative'
                }}
              >
                <div style={{ 
                  background: tier.color, 
                  color: 'white', 
                  width: '100px', 
                  height: '100px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: `0 10px 20px ${tier.color}66`
                }}>
                  {tier.icon}
                </div>
                
                <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem', fontSize: '1.4rem', textAlign: 'center' }}>
                  {tier.title}
                </h3>
                <h4 style={{ color: tier.color, marginBottom: '2rem', fontSize: '1rem', fontWeight: 600, textAlign: 'center' }}>
                  {tier.subtitle}
                </h4>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
                  {tier.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: tier.delay + 0.3 + i * 0.1 }}
                      style={{ 
                        padding: '0.8rem 1rem', 
                        background: `${tier.color}11`, 
                        marginBottom: '0.5rem', 
                        borderRadius: '8px',
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: tier.color }} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Data Flow Arrows */}
              {index < tiers.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tier.delay + 0.4 }}
                  style={{ color: 'var(--text-muted)', background: 'white', padding: '10px', borderRadius: '50%', border: '1px solid var(--border-color)', zIndex: 5 }}
                >
                  <ArrowRightLeft size={32} />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
