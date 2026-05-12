import React from 'react';

export default function Payments() {
  return (
    <div>
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="stat-card sc4"><div className="stat-label">Total Collecté</div><div className="stat-value">84 200</div><div className="stat-change">RWF - Toute période</div><div className="stat-icon">💰</div></div>
        <div className="stat-card sc2"><div className="stat-label">En Attente</div><div className="stat-value">12</div><div className="stat-change warn">Paiements à confirmer</div><div className="stat-icon">⏳</div></div>
        <div className="stat-card sc1"><div className="stat-label">Ce Mois-ci</div><div className="stat-value">18 500</div><div className="stat-change">RWF - Juillet 2026</div><div className="stat-icon">📅</div></div>
      </div>

      <div className="search-row">
        <div className="search-input-wrap">
          <span className="search-icon">🔍</span>
          <input className="search-input" type="text" placeholder="Rechercher par membre, référence..." />
        </div>
        <select className="filter-select"><option>Tous types</option><option>Cotisation</option><option>Pèlerinage</option><option>Offrande</option></select>
        <select className="filter-select"><option>Tous statuts</option><option>Payé</option><option>En attente</option></select>
        <button className="topbar-btn btn-ghost">Export</button>
        <button className="topbar-btn btn-gold">+ Enregistrer</button>
      </div>

      <div className="card">
        <div className="card-header"><div className="card-title">Transactions Financières</div></div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Référence</th><th>Membre</th><th>Type</th><th>Montant</th><th>Date</th><th>Méthode</th><th>Événement</th><th>Statut</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <PaymentRow id="PAY-00241" member="Cécile Uwimana" typeClass="badge-cotisation" type="Cotisation" amount="15 000 RWF" date="5 juil. 2026" method="Mobile Money" event="-" statusClass="badge-paid" status="Payé" />
              <PaymentRow id="PAY-00240" member="Jean-Paul Nkurunziza" typeClass="badge-pelerinage" type="Pèlerinage" amount="180 000 RWF" date="4 juil. 2026" method="Virement Bancaire" event="Kibeho 2026" statusClass="badge-paid" status="Payé" />
              <PaymentRow id="PAY-00239" member="Thérèse Mukamana" typeClass="badge-offrande" type="Offrande" amount="50 000 RWF" date="3 juil. 2026" method="Espèces" event="-" statusClass="badge-paid" status="Payé" />
              <PaymentRow id="PAY-00238" member="Emmanuel Habimana" typeClass="badge-cotisation" type="Cotisation" amount="15 000 RWF" date="2 juil. 2026" method="Espèces" event="-" statusClass="badge-pending" status="En attente" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PaymentRow({ id, member, typeClass, type, amount, date, method, event, statusClass, status }) {
  return (
    <tr>
      <td className="mono">{id}</td>
      <td>{member}</td>
      <td><span className={`badge ${typeClass}`}>{type}</span></td>
      <td><strong>{amount}</strong></td>
      <td>{date}</td>
      <td>{method}</td>
      <td>{event}</td>
      <td><span className={`badge ${statusClass}`}>{status}</span></td>
      <td>
        <div className="action-row">
          <button className="action-btn">Voir</button>
          <button className="action-btn">Modifier</button>
        </div>
      </td>
    </tr>
  );
}
