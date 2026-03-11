import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';
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
import { ProfilePage } from './features/dashboard/components/ProfilePage';
import './index.css';

interface SherlockScannerProps {
  onAnalyze: () => void;
}

export const SherlockScanner = ({ onAnalyze }: SherlockScannerProps) => {
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");

  const stages = [
    { threshold: 20, text: "Analyzing pixels..." },
    { threshold: 50, text: "Looking for matches in the breakdown database..." },
    { threshold: 80, text: "Calculating the cost of spare parts..." },
  ];

  const startScan = () => {
    setIsScanning(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        const next = prev + 1;
        const currentStage = stages.find((s) => next <= s.threshold);

        if (currentStage) setStatus(currentStage.text);

        return next;
      });
    }, 50);
  };

  return (
    <div className="scanner-container">
      {!isScanning ? (
        <button className="scan-button" onClick={startScan}>
          <div className="button-content">
            <span className="icon">📷</span>
            <span>Start diagnostics</span>
          </div>
        </button>
      ) : (
        <div className="progress-section">
          <div className="progress-level">
            <span>{status}</span>
            <span>{progress}%</span>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          {progress === 100 && (
            <button className="view-result-btn" onClick={onAnalyze}>
              View report
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function App() {
  useAttackSimulator();
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    const timer = setTimeout(() => setAppLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (appLoading) {
    return <SherlockScanner onAnalyze={() => setAppLoading(false)} />;
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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </>
  );
}


export default App;