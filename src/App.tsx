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
        
      </MainLayout>
    </Router>
  );
}

export default App;