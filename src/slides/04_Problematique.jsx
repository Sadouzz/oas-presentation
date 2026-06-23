import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export default function Problematique() {
  return (
    <Slide title="Problématique">
      <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <motion.div 
          style={{ 
            background: 'var(--slide-bg)',
            border: '2px dashed var(--oas-blue)',
            borderRadius: '24px',
            padding: '4rem',
            textAlign: 'center',
            maxWidth: '900px',
            boxShadow: '0 20px 40px rgba(35, 50, 135, 0.1)',
            position: 'relative'
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div style={{ 
            position: 'absolute', 
            top: '-30px', 
            left: '50%', 
            transform: 'translateX(-50%)',
            background: 'var(--bg-color)',
            borderRadius: '50%',
            padding: '10px'
          }}>
            <div style={{ background: 'var(--oas-red)', borderRadius: '50%', padding: '15px', color: 'white' }}>
              <HelpCircle size={48} />
            </div>
          </div>
          
          <h3 style={{ fontSize: '2.2rem', lineHeight: 1.5, color: 'var(--oas-blue)', marginTop: '2rem' }}>
            Comment concevoir une solution intégrée, moderne et sécurisée permettant d'améliorer la fiabilité des données, d'automatiser les processus métiers et d'optimiser la gestion globale du garage OAS ?
          </h3>
        </motion.div>
      </div>
    </Slide>
  );
}
