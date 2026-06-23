import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Slide({ title, children }) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Awwwards style entry animation
    const ctx = gsap.context(() => {
      // Animate title
      if (title) {
        gsap.fromTo('.slide-title', 
          { y: 100, opacity: 0, rotate: 2 },
          { y: 0, opacity: 1, rotate: 0, duration: 1, ease: 'power4.out', delay: 0.3 }
        );
      }
      
      // Animate generic elements
      gsap.fromTo('.gsap-reveal',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.5 }
      );
      
      gsap.fromTo('.gsap-scale',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'expo.out', delay: 0.6 }
      );
    }, containerRef);
    
    return () => ctx.revert(); // cleanup
  }, [title]);

  return (
    <div ref={containerRef} style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {title && (
        <div style={{ overflow: 'hidden', paddingBottom: '2rem' }}>
          <h2 className="slide-title huge-title" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
            <span style={{ color: 'var(--oas-red)' }}>/</span> {title}
          </h2>
        </div>
      )}
      <div style={{ flex: 1, position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}
