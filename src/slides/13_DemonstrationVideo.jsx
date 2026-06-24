import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import vid from '../assets/vid.mp4';

export default function DemonstrationVideo() {
  return (
    <Slide title="Démonstration de la Plateforme" align="center">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        <motion.div 
          style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p style={{ fontSize: '1.2rem' }}>Workflow Complet : Agent, Chef d'Atelier, Client</p>
          <p>Création Fiche de Réparation → Diagnostic → Proforma → Validation</p>
        </motion.div>

        <motion.div 
          style={{
            width: '80%',
            height: '60%',
            background: 'rgba(0,0,0,0.8)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            position: 'relative',
            cursor: 'pointer',
            border: '2px solid var(--oas-blue)'
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Vidéo de la démonstration */}
          <video 
            src={vid} 
            controls
            style={{ width: '100%', height: '100%', borderRadius: '14px', objectFit: 'cover' }}
            onClick={(e) => {
              const video = e.target;
              if (video.requestFullscreen) {
                video.requestFullscreen();
              } else if (video.webkitRequestFullscreen) { /* Safari */
                video.webkitRequestFullscreen();
              } else if (video.msRequestFullscreen) { /* IE11 */
                video.msRequestFullscreen();
              }
              video.play();
            }}
          />
        </motion.div>

      </div>
    </Slide>
  );
}
