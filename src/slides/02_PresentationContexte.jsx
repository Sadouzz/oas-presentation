import Slide from '../components/Slide';
import { MapPin, Settings, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PresentationContexte() {
  return (
    <Slide title="Présentation & Contexte">
      <div className="grid-2">
        {/* Left: Presentation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ color: 'var(--oas-red)', marginBottom: '1rem' }}>Orient Auto Service (O.A.S)</h3>
          
          <motion.div className="card" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
            <div className="card-title"><MapPin size={24} /> Localisation & Origine</div>
            <p>Fondé en 2008, situé à Dakar, route de Rufisque.</p>
          </motion.div>

          <motion.div className="card" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className="card-title"><Settings size={24} /> Activités principales</div>
            <p>Mécanique générale, tôlerie-peinture et entretien spécialisé.</p>
          </motion.div>

          <motion.div className="card" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <div className="card-title"><Users size={24} /> Organisation</div>
            <p>Super-agent, chef d'atelier, mécaniciens & accueil.</p>
          </motion.div>
          
          <motion.div className="card" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
            <div className="card-title"><Star size={24} /> Positionnement</div>
            <p>Garage haut de gamme orienté vers un service premium & qualité.</p>
          </motion.div>
        </div>

        {/* Right: Contexte */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <motion.div 
            style={{ 
              background: 'var(--oas-blue)', 
              color: 'white', 
              padding: '2rem', 
              borderRadius: '24px',
              boxShadow: '0 15px 35px rgba(35, 50, 135, 0.2)'
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 style={{ color: 'white', borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '1rem' }}>Contexte du Stage</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.6, marginTop: '1rem' }}>
              La <strong>transformation digitale</strong> devient un levier essentiel pour améliorer la performance des entreprises.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.6, marginTop: '1rem', color: 'rgba(255,255,255,0.8)' }}>
              Malgré l'existence d'un système informatisé, OAS rencontre plusieurs difficultés dans la gestion quotidienne de ses activités, justifiant ainsi la mise en place d'un projet de refonte précis pour ce stage.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
