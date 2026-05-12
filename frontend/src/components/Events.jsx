import React from 'react';

export default function Events() {
  return (
    <div>
      <div className="search-row">
        <div className="search-input-wrap">
          <span className="search-icon">🔍</span>
          <input className="search-input" type="text" placeholder="Rechercher des événements..." />
        </div>
        <select className="filter-select">
          <option>Tous les statuts</option>
          <option>Ouvert</option>
          <option>Fermé</option>
          <option>Terminé</option>
        </select>
        <button className="topbar-btn btn-gold">+ Nouvel Événement</button>
      </div>

      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Pèlerinages et Événements</div>
            <div className="card-title-sub">Gestion des voyages spirituels</div>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Réf.</th>
                <th>Événement</th>
                <th>Destination</th>
                <th>Date</th>
                <th>Capacité</th>
                <th>Inscrits</th>
                <th>Prix Ticket</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <EventRow id="EVT-2026-001" event="Pèlerinage Kibeho 2026" destination="Nyamasheke, Rwanda" date="14 août 2026" cap="100" reg="78 (78%)" price="180 000 RWF" status="badge-open" statusText="Ouvert" />
              <EventRow id="EVT-2026-002" event="Rome - Vatican 2026" destination="Rome, Italie" date="3 sep. 2026" cap="100" reg="45 (45%)" price="950 000 RWF" status="badge-open" statusText="Ouvert" />
              <EventRow id="EVT-2026-003" event="Lourdes - Notre-Dame" destination="Lourdes, France" date="20 oct. 2026" cap="100" reg="20 (20%)" price="1 200 000 RWF" status="badge-open" statusText="Ouvert" />
              <EventRow id="EVT-2025-001" event="Kibeho 2025" destination="Nyamasheke, Rwanda" date="15 août 2025" cap="80" reg="80 (100%)" price="150 000 RWF" status="badge-completed" statusText="Terminé" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function EventRow({ id, event, destination, date, cap, reg, price, status, statusText }) {
  return (
    <tr>
      <td className="mono">{id}</td>
      <td><strong>{event}</strong></td>
      <td>{destination}</td>
      <td>{date}</td>
      <td>{cap}</td>
      <td>{reg}</td>
      <td>{price}</td>
      <td><span className={`badge ${status}`}>{statusText}</span></td>
      <td>
        <div className="action-row">
          <button className="action-btn">Voir</button>
          <button className="action-btn">Modifier</button>
        </div>
      </td>
    </tr>
  );
}
