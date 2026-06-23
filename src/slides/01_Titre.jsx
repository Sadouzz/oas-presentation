import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Titre() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Magnetic Logo Effect
      gsap.fromTo('.logo', 
        { scale: 0, rotation: -180 }, 
        { scale: 1, rotation: 0, duration: 1.5, ease: 'expo.out', delay: 0.2 }
      );
      
      // Split Text equivalent for huge title
      gsap.fromTo('.title-word', 
        { y: '100%', opacity: 0 }, 
        { y: '0%', opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out', delay: 0.5 }
      );

      gsap.fromTo('.subtitle',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 1.2 }
      );
      
      gsap.fromTo('.credits-box',
        { scaleX: 0, transformOrigin: 'left' },
        { scaleX: 1, duration: 1, ease: 'power4.inOut', delay: 1.5 }
      );
      
      gsap.fromTo('.credits-text',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 2.2 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <img className="logo" src="/src/assets/logo_oas.jpg" alt="OAS Logo" style={{ height: '100px', width: '100px', borderRadius: '50%', marginBottom: '3rem' }} />
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', overflow: 'hidden', paddingBottom: '1rem' }}>
        <h1 className="huge-title title-word">GESTION</h1>
        <h1 className="huge-title title-word">INTÉGRÉE</h1>
        <h1 className="huge-title title-word" style={{ color: 'var(--oas-red)' }}>&</h1>
        <h1 className="huge-title title-word">FACTURATION</h1>
      </div>
      
      <div style={{ overflow: 'hidden', marginTop: '1rem' }}>
        <h2 className="subtitle" style={{ fontSize: '3rem', fontWeight: 400, color: 'var(--text-muted)' }}>
          Cas de <strong style={{ color: 'var(--oas-blue)', fontWeight: 800 }}>Orient Auto Service</strong>
        </h2>
      </div>

      <div className="credits-box" style={{ marginTop: '5rem', background: 'var(--text-main)', padding: '2rem 3rem', color: 'white', display: 'inline-block', maxWidth: '800px' }}>
        <div className="credits-text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)' }}>Encadreur</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>M. Birane Baïla WANE</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)' }}>Année</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>2025 - 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
