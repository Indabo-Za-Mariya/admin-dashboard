import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalMembers: 248,
    activeMembers: 197,
    subscribedPilgrims: 312,
    totalRevenue: 84200
  });

  useEffect(() => {
    // Fetch stats from API
    // For now, using mock data
  }, []);

  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <StatCard
          label="Total Membres"
          value="248"
          change="↑ 12 ce mois"
          icon="👥"
          type="sc1"
        />
        <StatCard
          label="Membres Actifs"
          value="197"
          change="79% du total"
          icon="✝"
          type="sc2"
        />
        <StatCard
          label="Pèlerins Inscrits"
          value="312"
          change="↑ 28 cette semaine"
          icon="🕊️"
          type="sc3"
        />
        <StatCard
          label="Revenus Totaux"
          value="84,200"
          change="RWF — cette année"
          icon="💰"
          type="sc4"
        />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '20px'
      }}>
        <div>
          <Card title="Revenus Mensuels" subtitle="Cotisations, pèlerinages & offrandes">
            <div style={{ height: '80px', display: 'flex', alignItems: 'flex-end', gap: '5px', marginBottom: '16px' }}>
              {[38, 52, 44, 68, 72, 88, 100, 28, 28, 28, 28, 28].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: i === 6 ? 'var(--gold)' : 'var(--blue-mid)',
                    borderRadius: '3px 3px 0 0',
                    height: h + '%',
                    opacity: i >= 7 ? 0.25 : 1,
                    cursor: 'pointer',
                    transition: 'opacity 0.15s'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = 1}
                  onMouseLeave={(e) => e.target.style.opacity = i >= 7 ? 0.25 : 1}
                />
              ))}
            </div>
            <div style={{ display: 'flex', gap: '5px', marginTop: '4px' }}>
              {['JAN', 'FÉV', 'MAR', 'AVR', 'MAI', 'JUN', 'JUL', 'AOÛ', 'SEP', 'OCT', 'NOV', 'DÉC'].map((m, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    fontFamily: "'Cinzel', serif",
                    fontSize: '8px',
                    color: i === 6 ? 'var(--gold)' : 'var(--text-muted)',
                    letterSpacing: '0.5px'
                  }}
                >
                  {m}
                </div>
              ))}
            </div>
          </Card>

          <Card title="Derniers Paiements">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--cream)' }}>
                  <th style={{ textAlign: 'left', padding: '10px 14px', fontFamily: "'Cinzel', serif", fontSize: '9.5px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid var(--border)' }}>Réf.</th>
                  <th style={{ textAlign: 'left', padding: '10px 14px', fontFamily: "'Cinzel', serif", fontSize: '9.5px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid var(--border)' }}>Membre</th>
                  <th style={{ textAlign: 'left', padding: '10px 14px', fontFamily: "'Cinzel', serif", fontSize: '9.5px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid var(--border)' }}>Type</th>
                  <th style={{ textAlign: 'left', padding: '10px 14px', fontFamily: "'Cinzel', serif", fontSize: '9.5px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid var(--border)' }}>Montant</th>
                  <th style={{ textAlign: 'left', padding: '10px 14px', fontFamily: "'Cinzel', serif", fontSize: '9.5px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid var(--border)' }}>Statut</th>
                </tr>
              </thead>
              <tbody>
                <PaymentRow paymentRef="PAY-00241" member="Cecile Uwimana" type="Cotisation" amount="15 000 RWF" status="Paye" />
                <PaymentRow paymentRef="PAY-00240" member="Jean-Paul Nkurunziza" type="Pelerinage" amount="180 000 RWF" status="Paye" />
                <PaymentRow paymentRef="PAY-00239" member="Therese Mukamana" type="Offrande" amount="50 000 RWF" status="Paye" />
                <PaymentRow paymentRef="PAY-00238" member="Emmanuel Habimana" type="Cotisation" amount="15 000 RWF" status="En attente" />
              </tbody>
            </table>
          </Card>
        </div>

        <div>
          <Card title="Prochains Pèlerinages">
            <EventItem date="14" month="AÛO" name="Pèlerinage de Kibeho" location="Nyamasheke, Rwanda" progress={78} spots="22" />
            <EventItem date="03" month="SEP" name="Rome — Vatican" location="Italie" progress={45} spots="55" />
            <EventItem date="20" month="OCT" name="Lourdes — Notre-Dame" location="Lourdes, France" progress={20} spots="80" />
          </Card>

          <Card title="Activité Récente">
            <ActivityItem dot="green" text="Nouveau membre inscrit : Marie-Rose Ingabire" time="Il y a 5 minutes" />
            <ActivityItem dot="gold" text="Paiement PAY-00241 confirmé par le trésorier" time="Il y a 23 minutes" />
            <ActivityItem dot="blue" text="Pèlerinage Kibeho 2026 — capacité mise à jour" time="Il y a 1 heure" />
            <ActivityItem dot="green" text="12 nouveaux pèlerins inscrits pour Rome" time="Il y a 3 heures" />
            <ActivityItem dot="gold" text="Rapport mensuel exporté par le trésorier" time="Hier" />
          </Card>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, change, icon, type }) {
  const bgColors = {
    sc1: 'linear-gradient(90deg, var(--blue-mid), var(--blue-light))',
    sc2: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
    sc3: 'linear-gradient(90deg, var(--red-accent), #c0392b)',
    sc4: 'linear-gradient(90deg, var(--success), #3aaa68)'
  };

  return (
    <div style={{
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '20px 20px 16px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'var(--shadow)'
    }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '3px',
        borderRadius: 'var(--radius) var(--radius) 0 0',
        background: bgColors[type]
      }}></div>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: '9.5px', color: 'var(--text-muted)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
        {label}
      </div>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: '30px', color: 'var(--blue-deep)', lineHeight: 1, marginBottom: '5px' }}>
        {value}
      </div>
      <div style={{ fontSize: '12px', color: 'var(--success)', fontStyle: 'italic' }}>
        {change}
      </div>
      <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '30px', opacity: 0.09 }}>
        {icon}
      </div>
    </div>
  );
}

function Card({ title, subtitle, children }) {
  return (
    <div style={{
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      marginBottom: '20px',
      boxShadow: 'var(--shadow)'
    }}>
      <div style={{
        padding: '14px 20px',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: '13.5px', color: 'var(--blue-deep)', letterSpacing: '0.5px' }}>
            {title}
          </div>
          {subtitle && <div style={{ fontFamily: "'EB Garamond', serif", fontStyle: 'italic', fontSize: '11px', color: 'var(--text-muted)', marginTop: '1px' }}>
            {subtitle}
          </div>}
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </div>
  );
}

function PaymentRow({ paymentRef, member, type, amount, status }) {
  const badgeColors = {
    'Cotisation': { bg: '#edf3fb', color: '#1a3e80' },
    'Pelerinage': { bg: '#f5f0f8', color: '#6b3fa0' },
    'Offrande': { bg: '#edf7f2', color: '#1e6b40' }
  };

  const statusColors = {
    'Paye': { bg: '#edf7f2', color: '#1e6b40' },
    'En attente': { bg: '#fdf8ed', color: '#996010' }
  };

  return (
    <tr style={{ borderBottom: '1px solid rgba(226,221,212,0.6)' }}>
      <td style={{ padding: '12px 14px', fontFamily: "'DM Mono', monospace", fontSize: '11.5px', color: 'var(--text-muted)' }}>
        {paymentRef}
      </td>
      <td style={{ padding: '12px 14px', fontSize: '14.5px', color: 'var(--text)' }}>{member}</td>
      <td style={{ padding: '12px 14px' }}>
        <span style={{
          display: 'inline-block', padding: '2px 10px', borderRadius: '20px',
          fontFamily: "'Cinzel', serif", fontSize: '10px', letterSpacing: '0.5px',
          background: badgeColors[type].bg, color: badgeColors[type].color,
          border: '1px solid rgba(201,168,76,0.3)'
        }}>
          {type}
        </span>
      </td>
      <td style={{ padding: '12px 14px', fontSize: '14.5px', fontWeight: 'bold', color: 'var(--text)' }}>{amount}</td>
      <td style={{ padding: '12px 14px' }}>
        <span style={{
          display: 'inline-block', padding: '2px 10px', borderRadius: '20px',
          fontFamily: "'Cinzel', serif", fontSize: '10px', letterSpacing: '0.5px',
          background: statusColors[status].bg, color: statusColors[status].color,
          border: '1px solid rgba(201,168,76,0.3)'
        }}>
          {status}
        </span>
      </td>
    </tr>
  );
}

function EventItem({ date, month, name, location, progress, spots }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 0', borderBottom: '1px solid rgba(226,221,212,0.5)' }}>
      <div style={{
        width: '46px', height: '46px',
        background: 'var(--gold-pale)',
        border: '1px solid rgba(201,168,76,0.35)',
        borderRadius: '8px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', flexShrink: 0
      }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: '18px', color: 'var(--blue-deep)', lineHeight: 1 }}>
          {date}
        </div>
        <div style={{ fontSize: '9px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: "'Cinzel', serif" }}>
          {month}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '13.5px', fontWeight: '500', color: 'var(--text)' }}>{name}</div>
        <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '1px', fontStyle: 'italic' }}>{location}</div>
        <div style={{ height: '5px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden', marginTop: '5px' }}>
          <div style={{ height: '100%', borderRadius: '3px', background: 'linear-gradient(90deg, var(--blue-mid), var(--gold))', width: progress + '%' }}></div>
        </div>
      </div>
      <div style={{ marginLeft: 'auto', textAlign: 'right', fontSize: '11.5px', color: 'var(--text-muted)' }}>
        <strong style={{ fontFamily: "'Cinzel', serif", fontSize: '16px', color: 'var(--blue-mid)', display: 'block' }}>
          {spots}
        </strong>
        places
      </div>
    </div>
  );
}

function ActivityItem({ dot, text, time }) {
  const dotColor = {
    green: 'var(--success)',
    gold: 'var(--gold)',
    blue: 'var(--blue-light)',
    red: 'var(--red-accent)'
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '10px 0', borderBottom: '1px solid rgba(226,221,212,0.5)' }}>
      <div style={{
        width: '7px', height: '7px',
        borderRadius: '50%',
        marginTop: '6px',
        flexShrink: 0,
        background: dotColor[dot]
      }}></div>
      <div>
        <div style={{ fontSize: '13.5px', color: 'var(--text)', lineHeight: '1.45' }}>{text}</div>
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '1px', fontStyle: 'italic' }}>{time}</div>
      </div>
    </div>
  );
}
