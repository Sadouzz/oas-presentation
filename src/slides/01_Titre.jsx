import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logoOas from '../assets/logo.ico';
import logoDigitalCampus from '../assets/logoPAGEGARDE/digitalCampusDakar2.png';
import logoIsm from '../assets/logoPAGEGARDE/ism.png';
import logoSn from '../assets/logoPAGEGARDE/sn.png';
import bgImage from '../assets/logoPAGEGARDE/bg.jpeg';

export default function Titre() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Institutional Logos Effect
      gsap.fromTo('.inst-logo',
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );

      // Background Fade-in
      gsap.fromTo('.bg-image',
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
      );

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
    <div ref={containerRef} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>

      {/* Background Image Layer */}
      <div
        className="bg-image"
        style={{
          position: 'fixed',
          top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          opacity: 0
        }}
      />

      {/* Logos Institutionnels */}
      <div style={{ position: 'absolute', top: '0', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img className="logo" src={logoOas} alt="OAS Logo" style={{ height: '100px', width: '100px', borderRadius: '50%', marginBottom: '3rem', objectFit: 'contain', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }} />
        <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
          <img className="inst-logo" src={logoSn} alt="SN Logo" style={{ height: '70px', objectFit: 'contain' }} />
          <img className="inst-logo" src={logoIsm} alt="ISM Logo" style={{ height: '70px', objectFit: 'contain' }} />
          <img className="inst-logo" src={logoDigitalCampus} alt="Digital Campus Logo" style={{ height: '120px', objectFit: 'contain' }} />
        </div>
      </div>



      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', overflow: 'hidden', marginTop: '10rem', paddingBottom: '1rem' }}>
        <h1 className="huge-title title-word" style={{ color: 'white' }}>GESTION</h1>
        <h1 className="huge-title title-word" style={{ color: 'white' }}>INTÉGRÉE</h1>
        <h1 className="huge-title title-word" style={{ color: 'var(--oas-red)' }}>&</h1>
        <h1 className="huge-title title-word" style={{ color: 'white' }}>FACTURATION</h1>
      </div>

      <div style={{ overflow: 'hidden', marginTop: '1rem' }}>
        <h2 className="subtitle" style={{ fontSize: '3rem', fontWeight: 400, color: '#e2e8f0' }}>
          Cas de <strong style={{ color: '#60a5fa', fontWeight: 800 }}>Orient Auto Service</strong>
        </h2>
      </div>

      <div className="credits-box" style={{ marginTop: '5rem', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', padding: '2rem 3rem', color: 'white', display: 'inline-block', maxWidth: '800px', borderRadius: '16px' }}>
        <div className="credits-text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '4rem' }}>
          <div>
            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.6)' }}>Encadreur</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>M. Birane Baïla WANE</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.6)' }}>Année</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>2025 - 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
