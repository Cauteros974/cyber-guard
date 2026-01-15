import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
  useAttackSimulator();

  return (
    <Router>
      <Toaster 
        theme="dark" 
        position="top-right" 
        richColors 
        closeButton
      />

      <MainLayout>
      <Routes>
          {/* Main Page with graphics */}
          <Route path="/" element={<DashboardPage />} />
          
          {/* List of all incidents*/}
          <Route path="/incidents" element={<IncidentsPage />} />
          
          {/* Detailed page of a specific incident */}
          <Route path="/incidents/:id" element={<IncidentDetailsPage />} />
          
          {/* Device monitoring */}
          <Route path="/devices" element={<DevicesPage />} />
          
          {/* Security policies */}
          <Route path="/policies" element={<PoliciesPage />} />

          {/* Plug of settings */}
          <Route path="/settings" element={
            <div style={{ padding: '20px' }}>
              <h2>Settings</h2>
              <p style={{ color: 'var(--text-muted)' }}>Configuration options coming soon...</p>
            </div>
          } />

          {/* Redirect to the main page if the page is not found*/}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;