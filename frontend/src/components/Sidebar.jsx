import React from 'react';

export default function Sidebar({ navigate, onLogout, activeScreen, isMobile, isOpen, onClose }) {
  const sidebarStyle = {
    width: '252px',
    background: 'var(--blue-deep)',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflowY: 'auto',
    color: 'white',
    position: isMobile ? 'fixed' : 'relative',
    top: isMobile ? 0 : 'auto',
    left: isMobile ? 0 : 'auto',
    zIndex: isMobile ? 120 : 'auto',
    transform: isMobile ? (isOpen ? 'translateX(0)' : 'translateX(-106%)') : 'none',
    transition: isMobile ? 'transform 0.22s ease' : 'none',
    boxShadow: isMobile && isOpen ? '0 16px 40px rgba(0,0,0,0.35)' : 'none',
    flexShrink: 0,
  };

  const navigateAndClose = (screen, title, subtitle) => {
    navigate(screen, title, subtitle);
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <div style={sidebarStyle}>
      <div style={{ padding: '28px 22px 22px', borderBottom: '1px solid rgba(201,168,76,0.2)', textAlign: 'center' }}>
        <div style={{ fontSize: '36px', marginBottom: '6px', filter: 'drop-shadow(0 2px 8px rgba(201,168,76,0.4))' }}>✝</div>
        <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '13px', color: 'var(--gold-light)', lineHeight: '1.35', letterSpacing: '0.5px', marginBottom: '4px' }}>
          Indabo za Mariya
        </div>
        <div style={{ fontFamily: "'EB Garamond', serif", fontStyle: 'italic', fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '1px' }}>
          Gestion Paroissiale
        </div>
      </div>

      <div style={{ padding: '16px 22px 6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.2)' }}></div>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: '8.5px', color: 'rgba(201,168,76,0.5)', letterSpacing: '2.5px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          Principal
        </div>
        <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.2)' }}></div>
      </div>

      <NavItem
        icon="⛪"
        label="Tableau de Bord"
        isActive={activeScreen === 'dashboard'}
        onClick={() => navigateAndClose('dashboard', 'Tableau de Bord', 'Vue d\'ensemble générale')}
      />

      <div style={{ padding: '16px 22px 6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.2)' }}></div>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: '8.5px', color: 'rgba(201,168,76,0.5)', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
          Gestion
        </div>
        <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.2)' }}></div>
      </div>

      <NavItem
        icon="👥"
        label="Membres"
        badge="248"
        isActive={activeScreen === 'membres'}
        onClick={() => navigateAndClose('membres', 'Membres', 'Gestion des fidèles inscrits')}
      />
      <NavItem
        icon="🕊️"
        label="Pèlerinages"
        isActive={activeScreen === 'pelerinages'}
        onClick={() => navigateAndClose('pelerinages', 'Pèlerinages', 'Événements & inscriptions')}
      />
      <NavItem
        icon="💰"
        label="Paiements"
        isActive={activeScreen === 'paiements'}
        onClick={() => navigateAndClose('paiements', 'Finances', 'Cotisations & offrandes')}
      />

      <div style={{ padding: '16px 22px 6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.2)' }}></div>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: '8.5px', color: 'rgba(201,168,76,0.5)', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
          Analyse
        </div>
        <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.2)' }}></div>
      </div>

      <NavItem
        icon="📜"
        label="Rapports"
        isActive={activeScreen === 'rapports'}
        onClick={() => navigateAndClose('rapports', 'Rapports', 'Export PDF & Excel')}
      />

      <div style={{ padding: '16px 22px 6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.2)' }}></div>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: '8.5px', color: 'rgba(201,168,76,0.5)', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
          Administration
        </div>
        <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.2)' }}></div>
      </div>

      <NavItem
        icon="⚙️"
        label="Utilisateurs"
        isActive={activeScreen === 'utilisateurs'}
        onClick={() => navigateAndClose('utilisateurs', 'Utilisateurs & Rôles', 'Gestion des accès')}
      />

      <div
        style={{ marginTop: 'auto', padding: '14px', borderTop: '1px solid rgba(255,255,255,0.06)', cursor: 'pointer' }}
        onClick={() => {
          onLogout();
          if (isMobile && onClose) {
            onClose();
          }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 10px' }}>
          <div style={{
            width: '34px', height: '34px', borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Cinzel', serif", fontSize: '12px', fontWeight: '600',
            color: 'var(--blue-deep)', boxShadow: '0 2px 8px rgba(201,168,76,0.3)'
          }}>PM</div>
          <div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', fontWeight: '500' }}>Père Munyankindi</div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>Administrateur</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, badge, onClick, isActive }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '9px 18px',
        cursor: 'pointer',
        color: isActive ? 'var(--gold-light)' : 'rgba(255,255,255,0.5)',
        fontFamily: "'EB Garamond', serif",
        fontSize: '14px',
        margin: '1px 10px',
        borderRadius: '7px',
        transition: 'all 0.18s',
        background: isActive ? 'rgba(201,168,76,0.14)' : 'transparent',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
          e.currentTarget.style.color = 'rgba(255,255,255,0.82)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
        }
      }}
    >
      <span style={{ fontSize: '15px', width: '20px', textAlign: 'center' }}>{icon}</span>
      {label}
      {badge && <span style={{
        marginLeft: 'auto',
        background: 'rgba(201,168,76,0.25)',
        color: 'var(--gold-light)',
        fontFamily: "'DM Mono', monospace",
        fontSize: '10px',
        fontWeight: '500',
        padding: '1px 7px',
        borderRadius: '10px',
        border: '1px solid rgba(201,168,76,0.3)'
      }}>{badge}</span>}
    </div>
  );
}
