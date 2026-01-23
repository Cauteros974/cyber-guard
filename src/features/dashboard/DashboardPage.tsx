import { ShieldAlert, Zap, Monitor, ShieldCheck } from "lucide-react";
import { StatCard } from "./components/StatCard";
import { ActivityChart } from "./components/ActivityChart";
import { AttackMap } from "./components/AttackMap";
import { Grid } from "./components/Grid";
import './Dashboard.css';

const pieData = [
  {name: 'Antivirus', value: 17056, color: '#a855f7'},
  {name: 'Firewall', value: 3, color: '#06b6d4'},
];

export const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Security Overview</h1>
        <p>Real-time threat monitoring and system health.</p>
      </header>

      {/* Stats cards */}
      <div className="stats-grid">
        <StatCard title="Active Incidents" value={12} icon={ShieldAlert} />
        <StatCard title="Critical Threats" value={3} icon={Zap} />
        <StatCard title="Devices Online" value="1,240" icon={Monitor} />
        <StatCard title="Policy Compliance" value="98.2%" icon={ShieldCheck} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px'}}>
        <ActivityChart />
        <AttackMap />
        <Grid />
      </div>

      <div className="dashboard-bottom">
        {/* Main chart */}
        <div className="chart-wrapper">
          <ActivityChart />
        </div>

        {/* Activity feed */}
        <div className="activity-panel">
          <h3>Latest Events</h3>

          <div className="activity-list">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="activity-item">
                <span className="activity-dot" />
                <div>
                  <p className="activity-title">System Update Applied</p>
                  <p className="activity-meta">2 mins ago • WS-OFFICE-09</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
