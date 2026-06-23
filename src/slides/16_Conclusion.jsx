import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Globe, Mail, AtSign } from 'lucide-react';

export default function Conclusion() {
  return (
    <Slide title="Conclusion & Perspectives" align="center">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        <motion.div 
          style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '3rem' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p style={{ fontSize: '1.5rem', color: 'var(--oas-blue)', lineHeight: 1.6 }}>
            Ce projet de stage a permis de concevoir et développer une solution complète pour digitaliser et optimiser les processus métiers de Orient Auto Service, posant ainsi les bases d'une gestion moderne et évolutive.
          </p>
        </motion.div>

        <motion.div 
          style={{ display: 'flex', gap: '3rem', marginTop: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
            <Mail color="var(--oas-red)" /> hello@orientautoservice.sn
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
            <Globe color="var(--oas-red)" /> www.orientautoservice.sn
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
            <AtSign color="var(--oas-red)" /> @OrientAutoService
          </div>
        </motion.div>

        <motion.h2 
          style={{ marginTop: '4rem', fontSize: '3rem', color: 'var(--oas-blue)' }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
        >
          Merci de votre attention !
        </motion.h2>

      </div>
    </Slide>
  );
}
