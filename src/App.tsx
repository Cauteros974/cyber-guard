import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useState, useEffect } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { DashboardPage } from './features/dashboard/DashboardPage';
import { IncidentsPage } from './features/incidents/IncidentsPage';
import { IncidentDetailsPage } from './features/incidents/IncidentDetailsPage';
import { DevicesPage } from './features/devices/DevicesPage';
import { PoliciesPage } from './features/policies/PoliciesPage';
import { useAttackSimulator } from './hooks/useAttackSimulator';
import { SettingPage } from './features/setttings/SettingsPage';
import './index.css';

function App() {
  useAttackSimulator();

  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const timer = setTimeout(() => setAppLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  
  if (appLoading) {
    return (
      <>
        <div className="initial-loader">
          <div className="loader-content">
            <h2>CyberGuard <span className="blink">...</span></h2>
            <p>Initializing security modules...</p>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <>
      <Toaster theme="dark" position="top-right" richColors closeButton />

      <MainLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/incidents" element={<IncidentsPage />} />
          <Route path="/incidents/:id" element={<IncidentDetailsPage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;