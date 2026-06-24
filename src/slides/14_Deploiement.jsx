import React from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Server, Database, Box, Users, Activity, Share2, Globe } from 'lucide-react';
import { FaGithub, FaDocker } from 'react-icons/fa';
import { SiGithubactions, SiNginx, SiSpringboot, SiAngular, SiPrometheus, SiGrafana, SiPostgresql } from 'react-icons/si';

export default function Deploiement() {

  const BoxContainer = ({ top, left, width, height, title, titleColor, color, bg, dashed, children }) => (
    <div style={{ position: 'absolute', top, left, width, height, border: `2px ${dashed ? 'dashed' : 'solid'} ${color}`, borderRadius: '8px', background: bg || 'white', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {title && (
        <div style={{ position: 'absolute', top: -12, left: 16, background: bg === 'transparent' ? 'white' : (bg || 'white'), padding: '0 8px', color: titleColor || color, fontWeight: 'bold', fontSize: '0.85rem', borderRadius: '4px' }}>
          {title}
        </div>
      )}
      {children}
    </div>
  );

  const Path = ({ d, color, dashed = false, markerEnd = true }) => {
    const colorId = color.replace('#', '');
    return (
      <g>
        <motion.path 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }}
          d={d} fill="none" stroke={color} strokeWidth="2" strokeDasharray={dashed ? "6,6" : "none"}
          markerEnd={markerEnd ? `url(#arrow-${colorId})` : "none"}
        />
      </g>
    );
  };

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '0.5rem' }}>
          <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>14</span>
          <h2>Architecture de Déploiement</h2>
        </div>

        {/* Scalable Container for exact pixel mapping */}
        <div style={{ flex: 1, position: 'relative', width: '100%', maxWidth: '100%', margin: '0 auto', background: 'white', borderRadius: '16px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', transform: 'scale(1.1)', transformOrigin: 'center center', width: '1100px', height: '650px' }}>
            
            {/* SVG OVERLAY FOR LINES */}
            <svg width="1100" height="650" style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
              <defs>
                <marker id="arrow-1e293b" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#1e293b" /></marker>
                <marker id="arrow-475569" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#475569" /></marker>
                <marker id="arrow-3b82f6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" /></marker>
                <marker id="arrow-64748b" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#64748b" /></marker>
              </defs>

              {/* 1 to 2 */}
              <Path d="M 220 70 L 260 70" color="#1e293b" />
              
              {/* 2 to 3 */}
              <Path d="M 440 70 L 480 70" color="#1e293b" />

              {/* 3 to Conteneurs */}
              <Path d="M 580 120 L 580 250" color="#1e293b" />

              {/* Users to Nginx */}
              <Path d="M 160 360 L 220 360" color="#1e293b" />
              <motion.text initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} x="190" y="352" fill="#2563eb" fontSize="13" fontWeight="bold" textAnchor="middle">
                oas-test.de
              </motion.text>

              {/* Nginx to Backend */}
              <Path d="M 400 320 L 420 320 L 420 340 L 460 340" color="#1e293b" />
              {/* Nginx to Frontend */}
              <Path d="M 400 420 L 420 420 L 420 450 L 460 450" color="#1e293b" />

              {/* Backend to DB */}
              <Path d="M 680 340 L 760 340" color="#1e293b" />
              
              {/* Backend to Exporter */}
              <Path d="M 680 370 L 710 370 L 710 490 L 760 490" color="#475569" dashed={true} />

              {/* DB to Prometheus */}
              <Path d="M 860 310 L 860 150" color="#475569" dashed={true} />
              
              {/* Exporter to Grafana */}
              <Path d="M 960 490 L 1020 490 L 1020 150" color="#475569" dashed={true} />

            </svg>

            {/* --- HTML NODES --- */}

            {/* TOP ROW */}
            {/* Box 1: CODE SOURCE */}
            <BoxContainer top={20} left={40} width={180} height={100} title="1. CODE SOURCE" titleColor="#2563eb" color="#3b82f6" bg="white">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '12px', padding: '0 10px' }}>
                <FaGithub size={40} color="#1e293b" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '1rem', color: '#1e293b' }}>GitHub</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.2' }}>Repository<br/>(Code source)</span>
                </div>
              </div>
            </BoxContainer>

            {/* Box 2: CI/CD */}
            <BoxContainer top={20} left={260} width={180} height={100} title="2. CI/CD" titleColor="#16a34a" color="#22c55e" bg="white">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '12px', padding: '0 10px' }}>
                <SiGithubactions size={36} color="#2563eb" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '0.95rem', color: '#1e293b' }}>GitHub Actions</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.2' }}>Build, Test<br/>& Push image</span>
                </div>
              </div>
            </BoxContainer>

            {/* Box 3: REGISTRE D'IMAGES */}
            <BoxContainer top={20} left={480} width={220} height={100} title="3. REGISTRE D'IMAGES" titleColor="#7e22ce" color="#a855f7" bg="white">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '12px', padding: '0 10px' }}>
                <div style={{ background: '#7e22ce', padding: '8px', borderRadius: '8px' }}>
                  <Box size={28} color="white" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#1e293b', lineHeight: '1.1' }}>GitHub Container<br/>Registry (GHCR)</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.2', marginTop: '4px' }}>Stockage des images<br/>Docker</span>
                </div>
              </div>
            </BoxContainer>

            {/* Box 5: OBSERVABILITÉ */}
            <BoxContainer top={20} left={740} width={330} height={130} title={<div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>5. OBSERVABILITÉ & SUPERVISION <span style={{background: '#ffedd5', color: '#ea580c', border: '1px solid #ea580c', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px', marginLeft: '6px'}}><Globe size={10} /> oas-network</span></div>} titleColor="#ea580c" color="#f97316" bg="#fffaf5">
              <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', height: '100%', paddingTop: '10px' }}>
                {/* Prometheus */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ background: '#ea580c', borderRadius: '50%', padding: '12px', marginBottom: '8px' }}>
                    <SiPrometheus size={24} color="white" />
                  </div>
                  <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#1e293b' }}>Prometheus</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Collecte des métriques</span>
                </div>
                {/* Grafana */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <SiGrafana size={48} color="#ea580c" style={{ marginBottom: '8px' }} />
                  <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#1e293b' }}>Grafana</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Tableaux de bord<br/>& Visualisation</span>
                </div>
              </div>
            </BoxContainer>

            {/* BOTTOM ROW */}

            {/* UTILISATEURS */}
            <BoxContainer top={280} left={20} width={140} height={160} title="" color="#93c5fd" bg="#eff6ff">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '10px', textAlign: 'center' }}>
                <Users size={32} color="#1d4ed8" style={{ marginBottom: '8px' }} />
                <span style={{ fontWeight: 'bold', fontSize: '0.95rem', color: '#1d4ed8', marginBottom: '12px' }}>UTILISATEURS</span>
                <span style={{ fontSize: '0.8rem', color: '#334155', marginBottom: '8px', lineHeight: '1.2' }}>Navigateur Web<br/>(Angular)</span>
                <span style={{ fontSize: '0.8rem', color: '#334155', lineHeight: '1.2' }}>Application Mobile<br/>(Flutter)</span>
              </div>
            </BoxContainer>

            {/* SERVEUR VPS */}
            <BoxContainer top={190} left={190} width={530} height={350} title="" color="#3b82f6" dashed={true} bg="transparent">
              <div style={{ position: 'absolute', top: -14, left: 16, background: 'white', padding: '0 8px', color: '#1d4ed8', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Server size={16} /> 4. SERVEUR VPS (PRODUCTION)
              </div>

              {/* Nginx */}
              <BoxContainer top={40} left={30} width={180} height={280} title="" color="#22c55e" bg="#f0fdf4">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 10px', width: '100%', height: '100%' }}>
                  <div style={{ background: '#16a34a', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
                    <SiNginx size={32} color="white" />
                  </div>
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#1e293b' }}>Nginx</span>
                  <span style={{ fontSize: '0.8rem', color: '#475569', textAlign: 'center', marginBottom: '16px', lineHeight: '1.2' }}>Reverse Proxy<br/>& Serveur web</span>
                  
                  <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '0.75rem', color: '#1e293b', width: '100%' }}>
                    <li style={{ marginBottom: '4px' }}>HTTPS (SSL/TLS)</li>
                    <li style={{ marginBottom: '4px' }}>Redirection</li>
                    <li style={{ marginBottom: '4px' }}>Routage</li>
                    <li>Fichiers statiques<br/>(Angular SPA)</li>
                  </ul>
                </div>
              </BoxContainer>

              {/* CONTENEURS */}
              <BoxContainer top={40} left={250} width={250} height={280} title={<div style={{display: 'flex', alignItems: 'center', gap: '4px'}}><Globe size={14} /> RÉSEAU INTERNE (oas-network)</div>} titleColor="#2563eb" color="#93c5fd" bg="#eff6ff">
                
                {/* API Backend */}
                <BoxContainer top={40} left={15} width={220} height={90} title="" color="#3b82f6" bg="white">
                  <div style={{ display: 'flex', alignItems: 'center', padding: '10px', width: '100%', height: '100%', position: 'relative' }}>
                    <div style={{ padding: '8px', marginRight: '10px' }}>
                      <SiSpringboot size={36} color="#6db33f" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#1d4ed8' }}>API BACKEND</span>
                      <span style={{ fontSize: '0.75rem', color: '#475569' }}>Spring Boot</span>
                      <span style={{ fontSize: '0.7rem', color: '#64748b' }}>(Application)</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: 6, right: 6 }}>
                      <FaDocker size={18} color="#2563eb" />
                    </div>
                  </div>
                </BoxContainer>

                {/* Frontend */}
                <BoxContainer top={160} left={15} width={220} height={90} title="" color="#22c55e" bg="white">
                  <div style={{ display: 'flex', alignItems: 'center', padding: '10px', width: '100%', height: '100%', position: 'relative' }}>
                    <div style={{ padding: '8px', marginRight: '10px' }}>
                      <SiAngular size={36} color="#dd0031" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#16a34a' }}>FRONTEND</span>
                      <span style={{ fontSize: '0.75rem', color: '#475569' }}>Angular</span>
                      <span style={{ fontSize: '0.7rem', color: '#64748b' }}>(Application)</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: 6, right: 6 }}>
                      <FaDocker size={18} color="#2563eb" />
                    </div>
                  </div>
                </BoxContainer>

              </BoxContainer>

            </BoxContainer>

            {/* BASE DE DONNÉES */}
            <BoxContainer top={260} left={760} width={200} height={120} title="" color="#d97706" bg="#fffbeb">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', padding: '10px', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Database size={20} color="#d97706" />
                  <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#1e293b' }}>BASE DE DONNÉES</span>
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#334155', marginBottom: '4px' }}>PostgreSQL (Neon)</span>
                <span style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: '1.2' }}>Base de données managée<br/>dans le cloud</span>
              </div>
            </BoxContainer>

            {/* EXPORTER */}
            <BoxContainer top={420} left={760} width={200} height={90} title="" color="#3b82f6" bg="#eff6ff">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', padding: '10px', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Share2 size={18} color="#2563eb" />
                  <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#1d4ed8' }}>EXPORTER</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#334155' }}>Spring Boot Actuator</span>
              </div>
            </BoxContainer>

          </div>
        </div>
      </div>
    </Slide>
  );
}
