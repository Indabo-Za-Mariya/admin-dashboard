import React from 'react';

export default function Topbar({ title, subtitle, navigate, isMobile, onOpenMenu }) {
  return (
    <div style={{
      background: 'var(--white)',
      borderBottom: '1px solid var(--border)',
      padding: isMobile ? '0 14px' : '0 28px',
      minHeight: '62px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '10px',
      boxShadow: '0 1px 0 var(--border)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
        {isMobile && (
          <button
            onClick={onOpenMenu}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '16px',
              flexShrink: 0,
            }}
            aria-label="Ouvrir le menu"
          >
            ☰
          </button>
        )}
        <div style={{ minWidth: 0 }}>
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize: isMobile ? '14px' : '17px',
          color: 'var(--blue-deep)',
          letterSpacing: '0.5px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>{title}</div>
        {!isMobile && <div style={{
          fontFamily: "'EB Garamond', serif",
          fontStyle: 'italic',
          fontSize: '12px',
          color: 'var(--text-muted)'
        }}>{subtitle}</div>}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button style={{
          width: '36px', height: '36px', borderRadius: '8px',
          border: '1px solid var(--border)', background: 'transparent',
          cursor: 'pointer', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '15px', position: 'relative'
        }}>
          🔔
          <span style={{
            position: 'absolute', top: '7px', right: '7px',
            width: '6px', height: '6px', background: 'var(--gold)',
            borderRadius: '50%', border: '1.5px solid white'
          }}></span>
        </button>
        {!isMobile && <button style={{
          padding: '7px 16px', borderRadius: '7px', fontFamily: "'EB Garamond', serif",
          fontSize: '14px', fontWeight: '500', cursor: 'pointer', border: '1px solid var(--border)',
          background: 'transparent', color: 'var(--text-mid)', transition: 'all 0.15s'
        }} onClick={() => navigate('membres', 'Membres', 'Gestion des fidèles inscrits')}>
          + Nouveau Membre
        </button>}
        <button style={{
          padding: isMobile ? '7px 10px' : '7px 16px', borderRadius: '7px', fontFamily: "'EB Garamond', serif",
          fontSize: isMobile ? '12px' : '14px', fontWeight: '600', cursor: 'pointer', border: 'none',
          background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
          color: 'var(--blue-deep)', transition: 'all 0.15s'
        }} onClick={() => navigate('paiements', 'Finances', 'Cotisations & offrandes')}>
          {isMobile ? '+ Paiement' : '+ Enregistrer Paiement'}
        </button>
      </div>
    </div>
  );
}
