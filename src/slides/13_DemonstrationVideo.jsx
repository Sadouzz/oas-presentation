import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

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
          {/* PLACEHOLDER FOR THE USER'S VIDEO */}
          {/* Once the user has the video, they can replace this div with a <video> tag */}
          <div style={{ textAlign: 'center', color: 'white' }}>
            <PlayCircle size={64} color="var(--oas-red)" style={{ marginBottom: '1rem' }} />
            <h3>Cliquez pour lancer la vidéo (Placeholder)</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>Intégrez votre vidéo MP4 ici</p>
          </div>
        </motion.div>

      </div>
    </Slide>
  );
}
