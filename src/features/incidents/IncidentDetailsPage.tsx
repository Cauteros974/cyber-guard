import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { ArrowLeft, ShieldX, Lock, CheckCircle, FileDown, Globe, Server } from 'lucide-react';
import './IncidentDetails.css';

export const IncidentDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { incidents, resolveIncident, isolateDevice } = useStore();

  const incident = incidents.find(i => i.id === id) || incidents[0];

  const handleExportPDF = () => {
    window.print();
  };

  const events = [
    {
      time: '10:45:22',
      title: 'Initial Access',
      desc: 'Brute force attempt detected on SSH port',
      type: 'critical'
    },
    {
      time: '10:47:05',
      title: 'Lateral Movement',
      desc: 'User "admin" accessed internal database server',
      type: 'warning'
    },
    {
      time: '10:52:00',
      title: 'Data Exfiltration',
      desc: 'Outbound traffic spike to unknown IP (8.8.4.4)',
      type: 'critical'
    }
  ];

  return (
    <div className="dashboard-container">
      {/* Back navigation */}
      <button
        onClick={() => navigate(-1)}
        className="nav-link"
        style={{ marginBottom: '20px', width: 'fit-content' }}
      >
        <ArrowLeft size={16} /> Back to Incidents
      </button>

      {/* Header */}
      <div className="detail-header">
        <h1>{incident.title}</h1>

        <div className="header-buttons">
          <button onClick={handleExportPDF} className="btn-secondary">
            <FileDown size={18} /> Export PDF
          </button>
        </div>
      </div>

      <div className="incident-grid">
        {/* LEFT COLUMN */}
        <div className="main-content">
          {/* Summary */}
          <div className="detail-card">
            <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div className="stat-card">
                <Globe size={20} color="var(--accent)" />
                <div>
                  <p className="stat-label">Source IP</p>
                  <p className="stat-value">{incident.sourceIp}</p>
                </div>
              </div>

              <div className="stat-card">
                <Server size={20} color="var(--accent)" />
                <div>
                  <p className="stat-label">Affected Asset</p>
                  <p className="stat-value">{incident.targetDevice}</p>
                </div>
              </div>
            </div>
          </div>

          {/* MITRE */}
          <div className="detail-card">
            <h3>MITRE ATT&CK® Mapping</h3>
            <div className="mitre-badge">
              <span className="mitre-id">{incident.technique}</span>
              <span className="mitre-label">Credential Access</span>
            </div>
          </div>

          {/* Description */}
          <div className="detail-card">
            <h3>Incident Description</h3>
            <p>
              Detected anomalous activity involving
              <strong> {incident.targetDevice}</strong>. The source IP
              <strong> {incident.sourceIp}</strong> attempted unauthorized access.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="actions-sidebar">
          {/* Quick Response */}
          <div className="detail-card">
            <h3>Quick Response</h3>

            <div className="actions-buttons">
              <button
                className="btn-danger"
                onClick={() => isolateDevice(incident.targetDevice)}
              >
                <ShieldX size={18} /> Isolate Device
              </button>

              <button className="btn-warning">
                <Lock size={18} /> Block Source IP
              </button>

              <button
                className="btn-success"
                onClick={() => resolveIncident(incident.id)}
              >
                <CheckCircle size={18} /> Resolve Incident
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="detail-card">
            <h3 style={{ marginBottom: '24px' }}>Attack Timeline</h3>

            <div className="timeline-list">
              {events.map((event, index) => (
                <div key={index} className="timeline-item">
                  <div
                    className={`timeline-dot ${
                      event.type === 'critical' ? 'critical' : ''
                    }`}
                  />
                  <div className="timeline-time">{event.time}</div>
                  <div className="timeline-content">
                    <h4>{event.title}</h4>
                    <p>{event.desc}</p>
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
