import React from 'react';

export default function Reports() {
  const cards = [
    { icon: '👥', title: 'Rapport des Membres', text: 'Total, actifs, inactifs et historique des cotisations' },
    { icon: '🕊️', title: 'Rapport Pèlerinages', text: 'Pèlerins par événement, revenus, places disponibles' },
    { icon: '💰', title: 'Bilan Financier', text: 'Revenus par type, résumé mensuel, historique complet' },
    { icon: '📅', title: 'Rapport Mensuel', text: 'Détail financier complet pour un mois sélectionné' },
    { icon: '👤', title: 'Historique par Membre', text: 'Tous les paiements enregistrés pour un fidèle' },
    { icon: '🏛️', title: 'Rapport Officiel', text: 'Rapport formaté pour soumission aux autorités' },
  ];

  return (
    <div>
      <div className="section-header">
        <span className="section-header-icon">📜</span>
        <div>
          <h2>Rapports et Exportations</h2>
          <p>Générez et téléchargez des rapports en PDF ou Excel</p>
        </div>
      </div>

      <div className="report-grid">
        {cards.map((card) => (
          <div className="report-card" key={card.title}>
            <div className="report-card-icon">{card.icon}</div>
            <h4>{card.title}</h4>
            <p>{card.text}</p>
            <div className="export-btns">
              <button className="export-btn export-pdf">PDF</button>
              <button className="export-btn export-excel">Excel</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
