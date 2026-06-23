import Slide from '../components/Slide';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Terminal, Server, Activity, BugOff } from 'lucide-react';
import { useState, useEffect } from 'react';

// Simulation of tests from PDF Tables 22 & 23
const testLogs = [
  { type: 'API', text: 'POST /api/auth/signin', result: '200 OK', time: '45ms' },
  { type: 'API', text: 'GET /api/clients', result: '200 OK', time: '112ms' },
  { type: 'API', text: 'POST /api/clients', result: '201 CREATED', time: '89ms' },
  { type: 'E2E', text: 'Scénario: Création de client', result: 'PASS', time: '1.2s' },
  { type: 'E2E', text: 'Scénario: Ajout pièce au stock', result: 'PASS', time: '0.8s' },
  { type: 'E2E', text: 'Scénario: Génération facture TTC', result: 'PASS', time: '2.1s' },
  { type: 'SEC', text: 'Validation Token JWT (Expiré)', result: '401 UNAUTHORIZED', time: '12ms' },
  { type: 'SEC', text: 'Injection SQL (OWASP ZAP)', result: 'BLOCKED', time: '5ms' },
  { type: 'UNIT', text: 'Service: CalculTotalFacture', result: 'PASS', time: '2ms' },
];

export default function TestsValidation() {
  const [visibleLogs, setVisibleLogs] = useState([]);
  
  useEffect(() => {
    // Typewriter effect for the terminal logs
    const interval = setInterval(() => {
      setVisibleLogs(prev => {
        if (prev.length < testLogs.length) {
          return [...prev, testLogs[prev.length]];
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 600); // Add a new log every 600ms

    return () => clearInterval(interval);
  }, []);

  const tools = [
    { name: 'JUnit 5 & Mockito', desc: 'Tests Unitaires (Backend)', icon: <CheckCircle2 size={24} color="#10b981"/> },
    { name: 'Postman & Swagger', desc: 'Tests API REST (Tableau 23)', icon: <Server size={24} color="#3b82f6"/> },
    { name: 'Tests Manuels E2E', desc: 'Parcours Utilisateurs (Tableau 22)', icon: <Activity size={24} color="#f59e0b"/> },
    { name: 'OWASP ZAP', desc: 'Tests de Vulnérabilité Web', icon: <ShieldCheck size={24} color="#ef4444"/> },
  ];

  return (
    <Slide title="Tests & Validation">
      <div style={{ display: 'flex', gap: '3rem', height: '100%', padding: '1rem', alignItems: 'stretch' }}>
        
        {/* LEFT PANEL: QUALITY DASHBOARD */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            style={{ 
              background: 'linear-gradient(135deg, #0f172a, #1e293b)', 
              borderRadius: '24px', padding: '2rem', color: 'white',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)', position: 'relative', overflow: 'hidden'
            }}
          >
            {/* Background decoration */}
            <BugOff size={150} color="rgba(255,255,255,0.03)" style={{ position: 'absolute', right: -20, bottom: -20 }} />
            
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '2px' }}>Couverture de Test OAS</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1rem' }}>
              <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#334155" strokeWidth="3" />
                  <motion.path 
                    initial={{ strokeDasharray: "0, 100" }} animate={{ strokeDasharray: "100, 100" }} transition={{ duration: 2, ease: "easeOut" }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="100, 100"
                  />
                </svg>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  100%
                </div>
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: '2.5rem', color: '#10b981' }}>Validé</h2>
                <p style={{ margin: '0.5rem 0 0 0', color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.5 }}>
                  Toutes les anomalies détectées ont été corrigées (Conformément au Tableau 26).
                </p>
              </div>
            </div>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', flex: 1 }}>
            {tools.map((tool, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + idx * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                style={{ 
                  background: 'white', borderRadius: '16px', padding: '1.5rem', border: '1px solid #e2e8f0',
                  display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  {tool.icon}
                  <strong style={{ fontSize: '1.1rem', color: '#1e293b' }}>{tool.name}</strong>
                </div>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{tool.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: LIVE TERMINAL ANIMATION */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
          style={{ 
            width: '450px', background: '#020617', borderRadius: '24px', 
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', overflow: 'hidden',
            border: '1px solid #334155'
          }}
        >
          {/* Terminal Header */}
          <div style={{ background: '#0f172a', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem', borderBottom: '1px solid #1e293b' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
            </div>
            <span style={{ color: '#64748b', fontSize: '0.9rem', fontFamily: 'monospace', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Terminal size={16} /> OAS CI/CD Pipeline
            </span>
          </div>

          {/* Terminal Body */}
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontFamily: 'monospace', fontSize: '0.9rem', flex: 1, overflowY: 'auto' }}>
            <div style={{ color: '#3b82f6', marginBottom: '1rem' }}>$ npm run test:all --verbose</div>
            <div style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>Starting test suite for Orient Auto Service...</div>
            
            <AnimatePresence>
              {visibleLogs.map((log, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
                >
                  <span style={{ color: log.type === 'API' ? '#a855f7' : log.type === 'E2E' ? '#eab308' : log.type === 'SEC' ? '#ef4444' : '#3b82f6', fontWeight: 'bold', width: '40px' }}>
                    [{log.type}]
                  </span>
                  <span style={{ color: '#cbd5e1', flex: 1 }}>{log.text}</span>
                  <div style={{ display: 'flex', gap: '1rem', width: '140px', justifyContent: 'flex-end' }}>
                     <span style={{ color: log.result === 'BLOCKED' || log.result === '401 UNAUTHORIZED' ? '#ef4444' : '#10b981', fontWeight: 'bold' }}>{log.result}</span>
                     <span style={{ color: '#64748b' }}>{log.time}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {visibleLogs.length === testLogs.length && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ marginTop: '2rem', borderTop: '1px dashed #334155', paddingTop: '1rem' }}>
                <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem' }}>✔ All test suites passed successfully.</div>
                <div style={{ color: '#64748b', marginTop: '0.5rem' }}>Total time: 4.25s</div>
              </motion.div>
            )}
            
            {/* Blinking cursor */}
            {visibleLogs.length < testLogs.length && (
              <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ width: '10px', height: '18px', background: '#cbd5e1', marginTop: '0.5rem' }} />
            )}
          </div>
        </motion.div>

      </div>
    </Slide>
  );
}
