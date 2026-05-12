import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import DashboardScreen from '../components/Dashboard';
import Members from '../components/Members';
import Events from '../components/Events';
import Payments from '../components/Payments';
import Reports from '../components/Reports';
import Users from '../components/Users';

export default function App({ user, onLogout }) {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [pageTitle, setPageTitle] = useState('Tableau de Bord');
  const [pageSubtitle, setPageSubtitle] = useState('Vue d\'ensemble générale');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 960);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 960px)');
    const handleChange = (event) => {
      setIsMobile(event.matches);
      setSidebarOpen(!event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const navigate = (screen, title, subtitle) => {
    setCurrentScreen(screen);
    setPageTitle(title);
    setPageSubtitle(subtitle);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <DashboardScreen />;
      case 'membres':
        return <Members />;
      case 'pelerinages':
        return <Events />;
      case 'paiements':
        return <Payments />;
      case 'rapports':
        return <Reports />;
      case 'utilisateurs':
        return <Users />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      {isMobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(13,31,60,0.42)',
            zIndex: 90,
          }}
        />
      )}
      <Sidebar
        navigate={navigate}
        onLogout={onLogout}
        activeScreen={currentScreen}
        isMobile={isMobile}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar
          title={pageTitle}
          subtitle={pageSubtitle}
          navigate={navigate}
          isMobile={isMobile}
          onOpenMenu={() => setSidebarOpen(true)}
        />
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: isMobile ? '16px' : '28px',
            background: 'var(--ivory)'
          }}
        >
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}
