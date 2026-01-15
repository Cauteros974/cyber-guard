import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { DashboardPage } from './features/DashboardPage';
import { IncidentsPage } from './features/incidents/IncidentsPage';
import { useAttackSimulator } from './hooks/useAttackSimulator';
import { Toaster, toast } from 'sonner';

function AppContent() {
  useAttackSimulator();

  return(
  <>
    <Toaster theme="dark" position='top-right' richColors />

    <MainLayout>
      <Routes>
        <Route path="/" element = {<DashboardPage />} />
        <Route path="/incidents" element = {<IncidentsPage />} />
      </Routes>
    </MainLayout>
  </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;