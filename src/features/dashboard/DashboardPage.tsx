import { ShieldAlert, Zap, Monitor, ShieldCheck } from "lucide-react";
import { StatCard } from "./components/StatCard";
import { ActivityChart } from "./components/ActivityChart";
import { AttackMap } from "./components/AttackMap";
import { Grid } from "./components/Grid";
import { TimeframeFilter } from "./components/TimeframeFilter";
import { useIncidentStore } from "../../store/useIncidentStore";
import './Dashboard.css';


export const DashboardPage = () => {
  const selectedTimeframe = useIncidentStore(state => state.selectedTimeframe);
  
  const multiplier = selectedTimeframe === 'today' ? 0.5 : selectedTimeframe === '30d' ? 4 : 1;
  const baseData = {
    total: Math.floor(17059 * multiplier),
    critical: Math.floor(17058 * multiplier),
    warning: Math.floor(1 * multiplier)
  };

  return (
    <div className="dashboard-container">
      {/*Header*/}
      <header className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-title">Security Overview</h1>
          <p className="page-description">Monitoring assets and threats in real-time.</p>
        </div>
        <TimeframeFilter />
      </header>

      {/* Stats? cards */}
      <div className="stats-grid">
        <StatCard title="Active Incidents" value={baseData.total.toLocaleString()} icon={ShieldAlert} />
        <StatCard title="Critical Threats" value={baseData.critical.toLocaleString()} icon={Zap} />
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
            {[ 1, 2, 3, 4].map(i =>(
              <div key={i} className="activity-item">
                <span className="activity-chart">
                  <div>
                    <p className="activity-title">System Update Applied</p>
                    <p className="activity-meta">2 mins ago • WS-OFFICE-09</p>
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
