import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { Server, Shield, Database, Box, LineChart, Activity, Globe, FileKey, HardDrive, Users } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import springLogo from '../assets/logoTechnos/spring-boot-svgrepo-com.png';
import postgresLogo from '../assets/logoTechnos/postgresql-svgrepo-com.png';

export default function Deploiement() {
  const NodeCard = ({ title, icon, subtitle, border, highlight }) => (
    <div style={{ 
      background: 'white', borderRadius: '12px', padding: '12px', 
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
      boxShadow: highlight ? '0 8px 16px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.05)', 
      border: `1px solid ${border || '#e2e8f0'}`, 
      width: '100%', height: '100%', zIndex: 10, position: 'relative' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: '#1e293b', fontSize: '0.9rem' }}>
        {icon} {title}
      </div>
      {subtitle && <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '8px' }}>{subtitle}</div>}
    </div>
  );

  const BoxContainer = ({ top, left, width, height, title, icon, color, bg, children }) => (
    <div style={{ position: 'absolute', top, left, width, height, border: `2px solid ${color}`, borderRadius: '12px', background: bg, zIndex: 2 }}>
      {title && (
        <div style={{ position: 'absolute', top: -14, left: 24, background: bg === 'transparent' ? 'white' : bg, padding: '0 12px', color: color, fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', borderRadius: '4px' }}>
          {icon} {title}
        </div>
      )}
      {children}
    </div>
  );

  const Path = ({ d, color, label, labelX, labelY, dashed = true, markerEnd = true }) => {
    const colorId = color.replace('#', '');
    return (
      <g>
        <motion.path 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }}
          d={d} fill="none" stroke={color} strokeWidth="2" strokeDasharray={dashed ? "6,6" : "none"}
          markerEnd={markerEnd ? `url(#arrow-${colorId})` : "none"}
        />
        {label && (
          <motion.text 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            x={labelX} y={labelY} fill={color} fontSize="12" fontWeight="bold" textAnchor="middle"
            style={{ background: 'white' }}
          >
            {label}
          </motion.text>
        )}
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
        <div style={{ flex: 1, position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto', background: 'white', borderRadius: '16px', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, transform: 'scale(1)', transformOrigin: 'top left', width: '1100px', height: '650px' }}>
            
            {/* SVG OVERLAY FOR LINES */}
            <svg width="1100" height="650" style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
              <defs>
                <marker id="arrow-475569" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#475569" /></marker>
                <marker id="arrow-7c3aed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#7c3aed" /></marker>
                <marker id="arrow-10b981" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#10b981" /></marker>
              </defs>

              {/* Internet to Nginx */}
              <Path d="M 520 70 L 520 160 L 310 160 L 310 240" color="#475569" label="HTTP/HTTPS" labelX="415" labelY="150" />
              {/* Internet to Grafana */}
              <Path d="M 580 70 L 580 180 L 680 180 L 680 250 L 660 250" color="#475569" label="Ports 9091, 3000" labelX="630" labelY="170" />

              {/* Proxy lines */}
              <Path d="M 400 280 L 475 280" color="#7c3aed" />
              <Path d="M 310 320 L 310 355" color="#7c3aed" />
              <Path d="M 400 300 L 440 300 L 440 380 L 475 380" color="#7c3aed" label="Reverse Proxy" labelX="430" labelY="345" />

              {/* Metrics */}
              <Path d="M 370 410 L 520 410 L 520 325" color="#10b981" label="Lecture métriques" labelX="460" labelY="400" />

              {/* Certs */}
              <Path d="M 110 395 L 110 585 L 135 585" color="#10b981" label="Écriture certificats" labelX="110" labelY="490" />
              <Path d="M 220 280 L 160 280 L 160 550 L 220 550" color="#10b981" label="Lecture certificats" labelX="160" labelY="450" />

              {/* Data Storage */}
              <Path d="M 310 440 L 310 510 L 400 510 L 400 555" color="#7c3aed" label="Stockage" labelX="355" labelY="500" />
              <Path d="M 570 320 L 650 320 L 650 510 L 580 510 L 580 555" color="#7c3aed" />
              <Path d="M 570 440 L 570 510" color="#7c3aed" label="Stockage" labelX="610" labelY="480" />

              {/* External Connections */}
              <Path d="M 660 400 L 850 400 L 850 245" color="#7c3aed" label="Connexion JDBC" labelX="750" labelY="390" />
              
              {/* Image Pulling */}
              <Path d="M 940 245 L 940 450 L 660 450" color="#10b981" />
              <Path d="M 720 200 L 310 200 L 310 235" color="#10b981" />
              <Path d="M 900 150 L 720 150 L 720 400 L 660 400" color="#10b981" label="Pull images : latest" labelX="810" labelY="140" />

              {/* Junction Dots */}
              <circle cx="720" cy="200" r="5" fill="#10b981" />
              <circle cx="720" cy="400" r="5" fill="#10b981" />
            </svg>

            {/* --- HTML NODES --- */}

            {/* Internet */}
            <div style={{ position: 'absolute', top: 20, left: 450, width: 200, height: 50, zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: '#1e3a8a', fontSize: '1.2rem' }}>
              <Users size={28} /> Internet / Clients
            </div>

            {/* INFRASTRUCTURE DE PRODUCTION */}
            <div style={{ position: 'absolute', top: 100, left: 20, width: 720, height: 530, border: '2px solid #1e3a8a', borderRadius: '12px', background: 'transparent', zIndex: 1 }}>
              <div style={{ padding: '12px 20px', fontWeight: 'bold', color: '#1e3a8a', fontSize: '1.1rem' }}>INFRASTRUCTURE DE PRODUCTION</div>
              <div style={{ padding: '0 20px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: '#334155' }}>
                <Server size={20} /> Serveur de production
              </div>

              {/* Docker Host */}
              <BoxContainer top={80} left={20} width={680} height={430} title="Docker Host" icon={<Box size={16} />} color="#3b82f6" bg="#f8fafc">
                
                {/* Certbot */}
                <div style={{ position: 'absolute', top: 245, left: 20, width: 140, height: 70 }}>
                  <NodeCard title="oas-certbot" icon={<Shield size={20} color="#10b981" />} subtitle="Renouvellement SSL" />
                </div>

                {/* Réseau Docker */}
                <BoxContainer top={40} left={160} width={500} height={260} title="Réseau Docker (oas-network)" icon={<Globe size={16} />} color="#60a5fa" bg="#eff6ff">
                  <div style={{ position: 'absolute', top: 40, left: 40, width: 180, height: 80 }}>
                    <NodeCard title="oas-nginx" icon={<div style={{ background: '#10b981', color: 'white', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>N</div>} subtitle="Ports : 80, 443" />
                  </div>
                  <div style={{ position: 'absolute', top: 40, left: 300, width: 180, height: 80 }}>
                    <NodeCard title="oas-grafana" icon={<LineChart size={20} color="#f59e0b" />} subtitle="Port : 3000" />
                  </div>
                  <div style={{ position: 'absolute', top: 160, left: 40, width: 180, height: 80 }}>
                    <NodeCard title="oas-prometheus" icon={<Activity size={20} color="#ef4444" />} subtitle="Port : 9091" />
                  </div>
                  <div style={{ position: 'absolute', top: 160, left: 300, width: 180, height: 80 }}>
                    <NodeCard title="oas-backend" icon={<img src={springLogo} alt="Spring" style={{ width: 20 }} />} subtitle="Spring Boot API" />
                  </div>
                </BoxContainer>

                {/* Volumes Docker */}
                <BoxContainer top={350} left={100} width={560} height={60} title="Volumes Docker" icon={<HardDrive size={16} />} color="#60a5fa" bg="#eff6ff">
                  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%', paddingTop: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 'bold', color: '#1e3a8a' }}><Database size={16} color="#3b82f6" /> Certificats SSL</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 'bold', color: '#1e3a8a' }}><Database size={16} color="#3b82f6" /> prometheus_data</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 'bold', color: '#1e3a8a' }}><Database size={16} color="#3b82f6" /> grafana_data</div>
                  </div>
                </BoxContainer>

              </BoxContainer>
            </div>

            {/* SERVICES EXTERNES */}
            <BoxContainer top={100} left={760} width={320} height={180} title="SERVICES EXTERNES" color="#7c3aed" bg="#f5f3ff">
              <div style={{ position: 'absolute', top: 40, left: 20, width: 130, height: 110 }}>
                <NodeCard title="Neon PostgreSQL" icon={<img src={postgresLogo} alt="PG" style={{ width: 32, marginBottom: '8px' }} />} />
              </div>
              <div style={{ position: 'absolute', top: 40, left: 170, width: 130, height: 110 }}>
                <NodeCard title={<div style={{ textAlign: 'center', lineHeight: '1.2' }}>GitHub Container<br/>Registry (ghcr.io)</div>} icon={<FaGithub size={32} color="#1e293b" style={{ marginBottom: '8px' }} />} />
              </div>
            </BoxContainer>

          </div>
        </div>
      </div>
    </Slide>
  );
}
