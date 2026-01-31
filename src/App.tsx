import { Routes, Route, Navigate, RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { DashboardPage } from './features/dashboard/DashboardPage';
import { IncidentsPage } from './features/incidents/IncidentsPage';
import { IncidentDetailsPage } from './features/incidents/IncidentDetailsPage';
import { DevicesPage } from './features/devices/DevicesPage';
import { PoliciesPage } from './features/policies/PoliciesPage';
import { useAttackSimulator } from './hooks/useAttackSimulator';
import { SettingPage } from './features/setttings/SettingsPage';
import './index.css';
import { useEffect } from 'react';

function App() {
  useAttackSimulator();

  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setTimeout(() => setAppLoading(false), 2000);
  }, []);
  
if(appLoading){


  return (
    <>
      <Toaster theme="dark" position="top-right" richColors closeButton />
      <Toaster position="top-right" toastOptions={{
        style: {
          background: 'var(--panel-bg)',
          color: 'var(--text-main)',
          border: '1px solid var(--border-color)',
        },
      }} />
      
      <div className="initial-loader">
        <div className="loader-content">
          <h2>CyberGuard <span>_</span></h2>
          <p>Initializing security modules...</p>
        </div>
      </div>
      

      <MainLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/incidents" element={<IncidentsPage />} />
          <Route path="/incidents/:id" element={<IncidentDetailsPage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/settings" element={<SettingPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}
}

export default App;