import Slide from '../components/Slide';
import { MapPin, Settings, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PresentationContexte() {
  const infos = [
    {
      icon: <MapPin size={40} />,
      title: "Localisation",
      desc: "Fondé en 2008, situé à Dakar, route de Rufisque.",
      color: "var(--oas-red)"
    },
    {
      icon: <Settings size={40} />,
      title: "Activités",
      desc: "Mécanique générale, tôlerie-peinture et entretien spécialisé.",
      color: "var(--oas-blue)"
    },
    {
      icon: <Users size={40} />,
      title: "Organisation",
      desc: "Super-agent, chef d'atelier, mécaniciens & accueil.",
      color: "var(--oas-red)"
    },
    {
      icon: <Star size={40} />,
      title: "Positionnement",
      desc: "Garage haut de gamme orienté vers un service premium & qualité.",
      color: "var(--oas-blue)"
    }
  ];

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '3rem' }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>02</span>
        <h2>Présentation & Contexte</h2>
      </div>

      <div className="bento-grid asymmetrical" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* Left Side: 4 Bento Cards */}
        {/* Left Side: Cards and Org Chart */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Localisation */}
            <motion.div className="bento-card magnetic outline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ padding: '2rem' }}>
              <div className="card-icon" style={{ color: 'var(--oas-red)', marginBottom: '1rem' }}><MapPin size={40} /></div>
              <div>
                <h3 style={{ color: 'var(--oas-blue)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Localisation</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Fondé en 2008, situé à Dakar, route de Rufisque.</p>
              </div>
            </motion.div>

            {/* Activités */}
            <motion.div className="bento-card magnetic outline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ padding: '2rem' }}>
              <div className="card-icon" style={{ color: 'var(--oas-blue)', marginBottom: '1rem' }}><Settings size={40} /></div>
              <div>
                <h3 style={{ color: 'var(--oas-blue)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Activités</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Mécanique générale, tôlerie-peinture et entretien spécialisé.</p>
              </div>
            </motion.div>
          </div>

          {/* Organisation (Org Chart) */}
          <motion.div className="bento-card magnetic outline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ color: 'var(--oas-blue)', marginBottom: '1.5rem', fontSize: '1.5rem', alignSelf: 'flex-start' }}>Organisation</h3>
            
            {/* Custom Org Chart Tree */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.8rem', width: '100%' }}>
              
              {/* Level 1 */}
              <div style={{ background: 'var(--oas-blue)', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: 'bold', zIndex: 2 }}>Fondateur / Directeur Général</div>
              
              {/* Connector to Level 2 (Direct to Réceptionniste) */}
              <div style={{ width: '2px', height: '20px', background: 'var(--text-muted)' }} />
              <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '6px solid var(--text-muted)', marginBottom: '4px' }} />
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%' }}>
                <div style={{ background: 'var(--oas-red)', color: 'white', padding: '0.5rem', borderRadius: '6px', width: '100%', textAlign: 'center', zIndex: 2 }}>Réceptionniste</div>
                
                {/* Connector to Level 3 */}
                <div style={{ width: '2px', height: '15px', background: 'var(--text-muted)' }} />
                <div style={{ width: '80%', height: '2px', background: 'var(--text-muted)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '2px', height: '15px', background: 'var(--text-muted)' }} />
                    <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '6px solid var(--text-muted)', marginBottom: '4px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '2px', height: '15px', background: 'var(--text-muted)' }} />
                    <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '6px solid var(--text-muted)', marginBottom: '4px' }} />
                  </div>
                </div>
                
                {/* Level 3 */}
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%' }}>
                    <div style={{ background: '#10b981', color: 'white', padding: '0.4rem', borderRadius: '6px', width: '100%', textAlign: 'center', fontSize: '0.75rem', zIndex: 2 }}>Chef d'Atelier</div>
                    
                    {/* Connector to Level 4 */}
                    <div style={{ width: '2px', height: '15px', background: 'var(--text-muted)' }} />
                    <div style={{ width: '80%', height: '2px', background: 'var(--text-muted)' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '2px', height: '15px', background: 'var(--text-muted)' }} />
                        <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '6px solid var(--text-muted)', marginBottom: '4px' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '2px', height: '15px', background: 'var(--text-muted)' }} />
                        <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '6px solid var(--text-muted)', marginBottom: '4px' }} />
                      </div>
                    </div>

                    {/* Level 4 */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '0.2rem', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%' }}>
                        <div style={{ background: '#8b5cf6', color: 'white', padding: '0.3rem', borderRadius: '6px', width: '100%', textAlign: 'center', fontSize: '0.65rem', zIndex: 2 }}>Eq. Techniciens</div>
                        
                        {/* Connector to Level 5 */}
                        <div style={{ width: '2px', height: '10px', background: 'var(--text-muted)' }} />
                        <div style={{ width: 0, height: 0, borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: '5px solid var(--text-muted)', marginBottom: '3px' }} />
                        
                        <div style={{ background: '#c4b5fd', color: '#4c1d95', padding: '0.2rem', borderRadius: '4px', width: '90%', textAlign: 'center', fontSize: '0.6rem', marginBottom: '0.2rem' }}>Mécaniciens</div>
                        <div style={{ background: '#c4b5fd', color: '#4c1d95', padding: '0.2rem', borderRadius: '4px', width: '90%', textAlign: 'center', fontSize: '0.6rem' }}>Electriciens</div>
                      </div>
                      <div style={{ background: '#8b5cf6', color: 'white', padding: '0.3rem', borderRadius: '6px', width: '45%', textAlign: 'center', fontSize: '0.65rem', zIndex: 2 }}>Stagiaires</div>
                    </div>

                  </div>
                  
                  <div style={{ background: '#10b981', color: 'white', padding: '0.4rem', borderRadius: '6px', width: '45%', textAlign: 'center', fontSize: '0.75rem', zIndex: 2 }}>Chef Magasin</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Right Side: Big Context Card */}
        <motion.div 
          className="bento-card dark magnetic"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '1rem' }}>
            Contexte du Stage
          </h3>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            La <strong>transformation digitale</strong> devient un levier essentiel pour améliorer la performance des entreprises.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)' }}>
            Malgré l'existence d'un système informatisé, OAS rencontre plusieurs difficultés dans la gestion quotidienne de ses activités, justifiant ainsi la mise en place d'un projet de refonte précis pour ce stage.
          </p>
        </motion.div>

      </div>
    </Slide>
  );
}
