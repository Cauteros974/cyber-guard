import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { ArrowLeft, ShieldX, CheckCircle, FileDown, ShieldAlert, Globe, Server, User } from 'lucide-react';
import './IncidentDetails.css';

export const IncidentDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {incidents, resolveIncident, isolateDevice } = useStore();
  const incident = incidents.find(i => i.id === id) || incidents[0];
  
  const events = [
    { time: '10:45:22', title: 'Initial Access', desc: 'Brute force attempt detected on SSH port', type: 'critical' },
    { time: '10:47:05', title: 'Lateral Movement', desc: 'User "admin" accessed internal database server', type: 'warning' },
    { time: '10:52:00', title: 'Data Exfiltration', desc: 'Outbound traffic spike to unknown IP (8.8.4.4)', type: 'critical' },
  ];

  return (
    <div className="dashboard-container">
      <button onClick={() => navigate(-1)} className="nav-link" style={{ marginBottom: '20px', width: 'fit-content' }}>
        <ArrowLeft size={16} /> Back to Incidents
      </button>

      <div className="incident-details-container">
        {/* Left column: Description and Analysis */}
        <div className="main-info">
          <div className="detail-card">
            <div className="detail-header">
              <div>
                <span className="incident-id">{id || 'INC-2024-089'}</span>
                <h1 className="incident-title">Potential Data Breach</h1>
              </div>
              <span className="badge badge-critical">Critical</span>
            </div>

            <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="stat-card">
                <Globe size={20} color="var(--accent)" />
                <div>
                  <p className="stat-label">Source IP</p>
                  <p className="stat-value">192.168.1.105</p>
                </div>
              </div>
              <div className="stat-card">
                <Server size={20} color="var(--accent)" />
                <div>
                  <p className="stat-label">Affected Asset</p>
                  <p className="stat-value">DB-PROD-01</p>
                </div>
              </div>
            </div>
          </div>

          <div className="detail-card">
            <h3>Investigation Notes</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '16px' }}>
              Multiple failed login attempts followed by a successful authentication from an unusual location. 
              The actor is currently attempting to query the "Customers" table.
            </p>
          </div>
        </div>

        {/* Right column: Timeline of events */}
        <div className="sidebar-info">
          <div className="detail-card">
            <h3 style={{ marginBottom: '24px' }}>Attack Timeline</h3>
            <div className="timeline-list">
              {events.map((event, index) => (
                <div key={index} className="timeline-item">
                  <div className={`timeline-dot ${event.type === 'critical' ? 'critical' : ''}`} />
                  <div className="timeline-time">{event.time}</div>
                  <div className="timeline-content">
                    <h4 style={{ fontSize: '14px' }}>{event.title}</h4>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};