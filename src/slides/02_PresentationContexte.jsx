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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {infos.map((info, idx) => (
            <motion.div 
              key={idx}
              className={`bento-card magnetic outline`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 + 0.1 }}
              style={{ padding: '2rem' }}
            >
              <div className="card-icon" style={{ color: info.color, marginBottom: '1rem' }}>
                {info.icon}
              </div>
              <div>
                <h3 style={{ color: 'var(--oas-blue)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  {info.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {info.desc}
                </p>
              </div>
            </motion.div>
          ))}
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
