import { ShieldAlert, Zap, Monitor, ShieldCheck, Package, ThermometerSun, Droplets, Droplet } from "lucide-react";
import { StatCard } from "./components/StatCard";
import { ActivityChart } from "./components/ActivityChart";
import { AttackMap } from "./components/AttackMap";
import { Grid } from "./components/Grid";
import { RulesPage } from "./components/RulesPage";
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

      {/* Stats cards */}
      <div className="stats-grid">
        <StatCard title="Active Incidents" value={baseData.total.toLocaleString()} icon={ShieldAlert} />
        <StatCard title="Critical Threats" value={baseData.critical.toLocaleString()} icon={Zap} />
        <StatCard title="Devices Online" value="1,240" icon={Monitor} />
        <StatCard title="Policy Compliance" value="98.2%" icon={ShieldCheck} />
      </div>

      <div className="activity-panel">
        <h3>Important protocols</h3>
        <div className="activity-list">
          <div className="rule-shortcut" onClick={() => RulesPage}>
            <Zap size={16} color="#f59e0b" />
            <span>Electrical safety (SOP-1)</span>
          </div>
          <div className="rule-shortcut">
            <Droplet size={16} color="#3b82f6" />
            <span>Shutting off risers (SOP-2)</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px'}}>
        <ActivityChart />
        <AttackMap />
        <Grid />
      </div>
      
      <div className="dashboard-middle-grid">
        <div className="inventory-panel">
          <h3>Supplies and consumables</h3>
          <div className="inventory-list">
            <div className="inventory-item">
              <span>Water filter (Geyser)</span>
              <span className="status-badge warning">Replacement in 5 days</span>
            </div>
            <div className="inventory-item">
              <span>E27 LED Bulbs</span>
              <span className="status-badge ok">In stock: 4 pcs.</span>
            </div>
            <div className="intentory-item">
              <span>Batteries (smoke detectors)</span>
              <span className="status-badge critical">Buy!</span>
            </div>
          </div>
        </div>

        <div className="climate-panel">
          <h3>Status of zones</h3>
          <div className="zone-grid">
            <div className="zone-card">
              <ThermometerSun size={18} />
              <p>Living room: 22°C</p>
            </div>
            <div className="zone-card alert">
              <Droplets size={18} />
              <p>Basement: Humidity 80%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-bottom">
        {/* Main chart */}
        <div className="chart-wrapper">
          <ActivityChart />
        </div>

        {/* Activity feed */}
        <div className="activity-panel">
          <h3>Latest Events</h3>

          <div className="activity-table">
            <div className="activity-row header">
              <span>Event</span>
              <span>Time</span>
              <span>Host</span>
            </div>

            {[1,2,3,4].map((_, i) => (
              <div key={i} className="activity-row">
                <span className="activity-tittle">System Update Applied</span>
                <span className="activity-time">2 mins ago</span>
                <span className="activity-host">WS-OFFICE-09</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
