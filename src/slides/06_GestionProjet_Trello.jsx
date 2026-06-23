import { useState, useEffect } from 'react';
import Slide from '../components/Slide';
import { motion } from 'framer-motion';
import { MoreHorizontal, CheckSquare, Plus, CheckCircle2 } from 'lucide-react';

export default function GestionProjetTrello() {
  const [taskState, setTaskState] = useState('sprint');

  useEffect(() => {
    const interval = setInterval(() => {
      setTaskState(prev => {
        if (prev === 'sprint') return 'progress';
        if (prev === 'progress') return 'review';
        if (prev === 'review') return 'done';
        return 'sprint';
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const KM = { initials: 'KM', color: '#f59e0b' };
  const FT = { initials: 'FT', color: '#ef4444' };
  const MO = { initials: 'MO', color: '#0ea5e9' };
  const AD = { initials: 'AD', color: '#3b82f6' };
  const Y = { initials: 'Y', color: '#10b981' };

  const Avatars = ({ users }) => (
    <div style={{ display: 'flex' }}>
      {users.map((u, i) => (
        <div key={i} style={{ 
          width: '24px', height: '24px', borderRadius: '50%', background: u.color, color: 'white', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 'bold',
          border: '2px solid #22272b', marginLeft: i > 0 ? '-6px' : '0'
        }}>
          {u.initials}
        </div>
      ))}
    </div>
  );

  const TrelloCard = ({ title, done, total, users, isGreen }) => (
    <div style={{ 
      background: '#22272b', padding: '0.8rem', borderRadius: '8px', 
      boxShadow: '0 1px 3px rgba(0,0,0,0.4)', marginBottom: '0.8rem', color: '#b6c2cf' 
    }}>
      {isGreen && <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', marginBottom: '0.3rem', fontSize: '0.8rem', fontWeight: 'bold' }}>
        <CheckCircle2 size={14} fill="#10b981" color="#22272b" />
        {title}
      </div>}
      {!isGreen && <p style={{ fontSize: '0.85rem', marginBottom: '0.8rem', color: '#b6c2cf', lineHeight: 1.4 }}>{title}</p>}
      
      {(done !== undefined || users) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {done !== undefined ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', background: done === total ? '#1f3625' : 'transparent', color: done === total ? '#216e4e' : '#b6c2cf', padding: done === total ? '2px 6px' : '0', borderRadius: '4px' }}>
              <CheckSquare size={14} color={done === total ? "#216e4e" : "#b6c2cf"} />
              <span style={{color: done === total ? '#10b981' : '#b6c2cf'}}>{done}/{total}</span>
            </div>
          ) : <div />}
          {users && <Avatars users={users} />}
        </div>
      )}
    </div>
  );

  const columns = [
    { id: 'backlog', title: 'Backlog Général (Product Backlog)', count: 1 },
    { id: 'sprint', title: 'Sprint Backlog', count: 1 },
    { id: 'progress', title: 'En cours', count: 1 },
    { id: 'review', title: 'Code Review', count: 3 },
    { id: 'done', title: 'Done', count: 31 }
  ];

  return (
    <Slide title="" noDefaultHeader={true}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '2rem' }}>
        <span className="slide-number" style={{ fontFamily: 'Syne', fontSize: '2.5rem', color: 'var(--text-muted)' }}>06b</span>
        <h2>Gestion du Projet (Scrumban)</h2>
      </div>

      {/* Trello Board Container */}
      <div style={{ 
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', 
        height: '65vh', background: 'linear-gradient(to bottom right, #000000, #111827)', 
        borderRadius: '16px', padding: '1rem', overflowX: 'auto', border: '1px solid #333'
      }}>
        
        {/* Column 1: Backlog Général */}
        <div style={{ background: '#101204', borderRadius: '12px', padding: '0.8rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', color: '#b6c2cf', fontSize: '0.9rem', fontWeight: 'bold' }}>
            <span>Backlog Général</span>
            <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>1</span>
              <MoreHorizontal size={16} />
            </div>
          </div>
          <div style={{ background: '#22272b', padding: '0.8rem', borderRadius: '8px', marginBottom: '0.8rem', color: '#b6c2cf', fontSize: '0.85rem' }}>
            Historique des reçus
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b6c2cf', fontSize: '0.9rem', padding: '0.5rem', cursor: 'pointer' }}>
            <Plus size={16} /> Ajouter une carte
          </div>
        </div>

        {/* Column 2: Sprint Backlog */}
        <div style={{ background: '#101204', borderRadius: '12px', padding: '0.8rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', color: '#b6c2cf', fontSize: '0.9rem', fontWeight: 'bold' }}>
            <span>Sprint Backlog</span>
            <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>1</span>
              <MoreHorizontal size={16} />
            </div>
          </div>
          <TrelloCard title="US 6.10 : Messagerie client" done={0} total={4} users={[KM, FT, MO]} />
          
          {taskState === 'sprint' && (
            <motion.div layoutId="animated-task" transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
              <TrelloCard title="US 6.11 : Dashboard Admin" done={0} total={2} users={[AD, Y]} />
            </motion.div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b6c2cf', fontSize: '0.9rem', padding: '0.5rem', cursor: 'pointer', marginTop: 'auto' }}>
            <Plus size={16} /> Ajouter une carte
          </div>
        </div>

        {/* Column 3: En cours */}
        <div style={{ background: '#101204', borderRadius: '12px', padding: '0.8rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', color: '#b6c2cf', fontSize: '0.9rem', fontWeight: 'bold' }}>
            <span>En cours</span>
            <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>1</span>
              <MoreHorizontal size={16} />
            </div>
          </div>
          <TrelloCard title="US 6.6 : Gestion des notifications" done={0} total={3} users={[KM, FT, MO]} />
          
          {taskState === 'progress' && (
            <motion.div layoutId="animated-task" transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
              <TrelloCard title="US 6.11 : Dashboard Admin" done={1} total={2} users={[AD, Y]} />
            </motion.div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b6c2cf', fontSize: '0.9rem', padding: '0.5rem', cursor: 'pointer', marginTop: 'auto' }}>
            <Plus size={16} /> Ajouter une carte
          </div>
        </div>

        {/* Column 4: Code Review */}
        <div style={{ background: '#101204', borderRadius: '12px', padding: '0.8rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', color: '#b6c2cf', fontSize: '0.9rem', fontWeight: 'bold' }}>
            <span>Code Review</span>
            <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>3</span>
              <MoreHorizontal size={16} />
            </div>
          </div>
          <TrelloCard title="US 6.7 : Historique des interventions" done={3} total={3} users={[KM, FT, MO]} isGreen={true} />
          <TrelloCard title="US 6.8 : Historique des factures" done={3} total={3} users={[KM, FT, MO]} isGreen={true} />
          <TrelloCard title="US 6.9 : Historique des reçus" done={3} total={3} users={[KM, FT, MO]} isGreen={true} />
          
          {taskState === 'review' && (
            <motion.div layoutId="animated-task" transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
              <TrelloCard title="US 6.11 : Dashboard Admin" done={2} total={2} users={[AD, Y]} isGreen={true} />
            </motion.div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b6c2cf', fontSize: '0.9rem', padding: '0.5rem', cursor: 'pointer', marginTop: 'auto' }}>
            <Plus size={16} /> Ajouter une carte
          </div>
        </div>

        {/* Column 5: Done */}
        <div style={{ background: '#101204', borderRadius: '12px', padding: '0.8rem', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', color: '#b6c2cf', fontSize: '0.9rem', fontWeight: 'bold' }}>
            <span>Done</span>
            <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>31</span>
              <MoreHorizontal size={16} />
            </div>
          </div>
          <TrelloCard title="0.1 - Analyse des Besoins & Maquettage" done={3} total={3} users={[AD, FT, KM, MO, Y]} isGreen={true} />
          <TrelloCard title="0.2 - Architecture & Base de données" done={2} total={2} users={[Y, MO, KM, FT, AD]} isGreen={true} />
          <TrelloCard title="0.3 - Environnement & Git" done={3} total={3} users={[Y, KM, FT, MO, AD]} isGreen={true} />
          
          {taskState === 'done' && (
            <motion.div layoutId="animated-task" transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
              <TrelloCard title="US 6.11 : Dashboard Admin" done={2} total={2} users={[AD, Y]} isGreen={true} />
            </motion.div>
          )}
        </div>

      </div>
    </Slide>
  );
}
