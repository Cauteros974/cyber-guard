import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { MainLayout } from './components/layout/MainLayout';
import { DashboardPage } from './features/DashboardPage';
import { IncidentsPage } from './features/incidents/IncidentsPage';
import { IncidentDetailsPage } from './features/incidents/IncidentDetailsPage';
import { DevicesPage } from './features/devices/DevicesPage';
import { PoliciesPage } from './features/policies/PoliciesPage';
import { useAttackSimulator } from './hooks/useAttackSimulator';
import './index.css';

function App() {
  // Теперь useNavigate внутри этого хука найдет роутер без ошибок!
  useAttackSimulator();

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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;