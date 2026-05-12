import React from 'react';

export default function Members() {
  return (
    <div>
      <div className="search-row">
        <div className="search-input-wrap">
          <span className="search-icon">🔍</span>
          <input className="search-input" type="text" placeholder="Rechercher par nom, ID, téléphone..." />
        </div>
        <select className="filter-select">
          <option>Tous les statuts</option>
          <option>Actif</option>
          <option>Inactif</option>
          <option>En attente</option>
        </select>
        <button className="topbar-btn btn-ghost">Export</button>
        <button className="topbar-btn btn-gold">+ Nouveau Membre</button>
      </div>

      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Registre des Membres</div>
            <div className="card-title-sub">248 fidèles inscrits</div>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom Complet</th>
                <th>Téléphone</th>
                <th>Date d'Inscription</th>
                <th>Statut</th>
                <th>Total Versé</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <MemberRow id="MEM-0001" name="Père Munyankindi" initials="PM" phone="+250 788 001 001" date="15 jan. 2023" status="badge-active" paid="45 000 RWF" />
              <MemberRow id="MEM-0002" name="Cécile Uwimana" initials="CU" phone="+250 788 002 002" date="3 fév. 2023" status="badge-active" paid="30 000 RWF" />
              <MemberRow id="MEM-0003" name="Jean-Paul Nkurunziza" initials="JN" phone="+250 788 003 003" date="20 mar. 2023" status="badge-active" paid="195 000 RWF" />
              <MemberRow id="MEM-0004" name="Thérèse Mukamana" initials="TM" phone="+250 788 004 004" date="5 avr. 2023" status="badge-pending" paid="0 RWF" />
              <MemberRow id="MEM-0005" name="Emmanuel Habimana" initials="EH" phone="+250 788 005 005" date="12 avr. 2023" status="badge-inactive" paid="15 000 RWF" />
              <MemberRow id="MEM-0248" name="Marie-Rose Ingabire" initials="MI" phone="+250 788 248 001" date="5 juil. 2026" status="badge-pending" paid="0 RWF" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function MemberRow({ id, name, initials, phone, date, status, paid }) {
  const statusText = {
    'badge-active': 'Actif',
    'badge-pending': 'En attente',
    'badge-inactive': 'Inactif',
  };

  return (
    <tr>
      <td className="mono">{id}</td>
      <td>
        <div className="member-name-cell">
          <span className="avatar-sm">{initials}</span>
          <strong>{name}</strong>
        </div>
      </td>
      <td>{phone}</td>
      <td>{date}</td>
      <td><span className={`badge ${status}`}>{statusText[status]}</span></td>
      <td>{paid}</td>
      <td>
        <div className="action-row">
          <button className="action-btn">Voir</button>
          <button className="action-btn">Modifier</button>
          <button className="action-btn danger">Suppr.</button>
        </div>
      </td>
    </tr>
  );
}
