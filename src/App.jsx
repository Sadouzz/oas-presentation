import { useState, useEffect, useCallback, useRef } from 'react';
import Deck from './components/Deck';
import { ChevronLeft, ChevronRight, MonitorPlay } from 'lucide-react';
import './index.css';
import logoOas from './assets/logo.ico';

import Titre from './slides/01_Titre';
import PresentationContexte from './slides/02_PresentationContexte';
import Diagnostic from './slides/03_Diagnostic';
import Problematique from './slides/04_Problematique';
import Solution from './slides/05_Solution';
import GestionProjet from './slides/06_GestionProjet';
import GestionProjetTrello from './slides/06_GestionProjet_Trello';
import GestionProjetGithub from './slides/06_GestionProjet_Github';
import ConceptionUML from './slides/06b_ConceptionUML';
import Architecture3Tiers from './slides/06c_Architecture3Tiers';
import ChoixTechnologiques from './slides/07_ChoixTech';
import ArchitectureGlobale from './slides/08_ArchitectureGlobale';
import ArchitectureAngular from './slides/09_ArchitectureAngular';
import ArchitectureFlutter from './slides/10_ArchitectureFlutter';
import ArchitectureSpringBoot from './slides/11_ArchitectureSpringBoot';
import ArchitecturePostgres from './slides/12_ArchitecturePostgres';
import DemonstrationVideo from './slides/13_DemonstrationVideo';
import PipelineCICD from './slides/13b_PipelineCICD';
import Deploiement from './slides/14_Deploiement';
import TestsValidation from './slides/15_TestsValidation';
import Conclusion from './slides/16_Conclusion';

const slides = [
  <Titre key="1" />,
  <PresentationContexte key="2" />,
  <Diagnostic key="3" />,
  <Problematique key="4" />,
  <Solution key="5" />,
  <GestionProjet key="6" />,
  <GestionProjetTrello key="6_trello" />,
  <GestionProjetGithub key="6_github" />,
  <ConceptionUML key="6b" />,
  <Architecture3Tiers key="7" />,
  <ChoixTechnologiques key="8" />,
  <ArchitectureAngular key="9" />,
  <ArchitectureFlutter key="10" />,
  <ArchitectureSpringBoot key="11" />,
  <ArchitecturePostgres key="12" />,
  <PipelineCICD key="14" />,
  <Deploiement key="15" />,
  <TestsValidation key="16" />,
  <DemonstrationVideo key="13" />,
  <Conclusion key="17" />
];

function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  
  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };
    
    const animate = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    };
    
    window.addEventListener('mousemove', onMouseMove);
    const animId = requestAnimationFrame(animate);
    
    // Add hover effects globally to all clickable / magnetic elements
    const handleMouseOver = (e) => {
      if(e.target.closest('button, a, .interactive-node, .magnetic')) {
        followerRef.current?.classList.add('active');
      } else {
        followerRef.current?.classList.remove('active');
      }
    };
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);
  
  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="custom-cursor-follower" />
    </>
  );
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const progress = ((currentSlide + 1) / slides.length) * 100;
  const slideCountFormat = (num) => num < 10 ? `0${num}` : num;

  return (
    <div className="app-container">
      {/* Background Noise & Cursor */}
      <div className="noise-overlay" />
      <CustomCursor />
      
      {/* Top Bar */}
      <header className="top-bar">
        <div className="logo-text magnetic" style={{ opacity: currentSlide === 0 ? 0 : 1, transition: 'opacity 0.5s ease', pointerEvents: currentSlide === 0 ? 'none' : 'auto' }}>
          <img src={logoOas} alt="OAS Logo" style={{ height: '40px', borderRadius: '4px' }} />
        </div>
        <div className="slide-counter">
          <span>{slideCountFormat(currentSlide + 1)}</span> &mdash; <span>{slideCountFormat(slides.length)}</span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <Deck currentSlide={currentSlide}>
        {slides[currentSlide]}
      </Deck>

      {/* Navigation Controls */}
      <div className="controls-container">
        <button className="control-btn magnetic" onClick={prevSlide} disabled={currentSlide === 0}>
          <ChevronLeft size={24} />
        </button>
        <button className="control-btn magnetic" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
          <ChevronRight size={24} />
        </button>
        <button className="control-btn magnetic" title="Plein écran" onClick={() => {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
          } else {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            }
          }
        }}>
          <MonitorPlay size={20} />
        </button>
      </div>
    </div>
  );
}

export default App;
