import React from 'react';

export default function Users() {
  return (
    <div>
      <div className="search-row">
        <div className="search-input-wrap">
          <span className="search-icon">🔍</span>
          <input className="search-input" type="text" placeholder="Rechercher des utilisateurs..." />
        </div>
        <button className="topbar-btn btn-gold">+ Ajouter Utilisateur</button>
      </div>

      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Utilisateurs du Système</div>
            <div className="card-title-sub">Gestion des rôles et permissions</div>
          </div>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nom Complet</th><th>Identifiant</th><th>Rôle</th><th>Téléphone</th><th>Dernière Connexion</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Père Munyankindi</strong></td>
                <td className="mono">admin</td>
                <td><span className="badge badge-admin">Administrateur</span></td>
                <td>+250 788 001 001</td>
                <td>Aujourd'hui, 08:32</td>
                <td><div className="action-row"><button className="action-btn">Modifier</button></div></td>
              </tr>
              <tr>
                <td><strong>Soeur Claudine Uwase</strong></td>
                <td className="mono">tresorier</td>
                <td><span className="badge badge-tresorier">Trésorière</span></td>
                <td>+250 788 200 001</td>
                <td>Aujourd'hui, 09:15</td>
                <td><div className="action-row"><button className="action-btn">Modifier</button><button className="action-btn danger">Désactiver</button></div></td>
              </tr>
              <tr>
                <td><strong>Diacre Hassan Ntawuyiru</strong></td>
                <td className="mono">coordinateur</td>
                <td><span className="badge badge-coordinateur">Coordinateur</span></td>
                <td>+250 788 300 001</td>
                <td>Hier</td>
                <td><div className="action-row"><button className="action-btn">Modifier</button><button className="action-btn danger">Désactiver</button></div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
