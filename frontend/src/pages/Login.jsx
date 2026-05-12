import React, { useState } from 'react';
import '../styles/Auth.css';

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('••••••••');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Frontend-only mock auth so UI can run without backend.
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (!username.trim() || !password.trim()) {
        throw new Error('Veuillez remplir les identifiants');
      }

      const mockUser = {
        id: 'local-admin',
        firstName: 'Pere',
        lastName: 'Munyankindi',
        username,
        role: 'Administrateur',
      };

      localStorage.setItem('token', 'local-mock-token');
      localStorage.setItem('user', JSON.stringify(mockUser));
      onLoginSuccess(mockUser);
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-screen open">
      <div className="login-card">
        <span className="login-cross">✝</span>
        <div className="login-title">Indabo za Mariya</div>
        <div className="login-subtitle">Système de Gestion Paroissiale</div>
        <div className="login-sep">
          <span className="login-sep-cross">✦</span>
        </div>
        
        {error && <div style={{ color: '#9b2335', marginBottom: '12px', fontSize: '13px' }}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label>Nom d'utilisateur</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Entrez votre nom d'utilisateur"
              disabled={loading}
            />
          </div>
          <div className="login-field">
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
              disabled={loading}
            />
          </div>
          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? 'Connexion...' : 'Se Connecter ✝'}
          </button>
        </form>
        
        <div className="login-verse">
          "Je suis le chemin, la vérité et la vie."<br />— Jean 14:6
        </div>
      </div>
    </div>
  );
}
