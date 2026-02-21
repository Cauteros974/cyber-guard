import { X, ShieldAlert, Terminal, Globe, Clock } from "lucide-react";
import { useIncidentStore } from "../../../store/useIncidentStore";
import './IncidentDrawer.css';

export const IncidentDrawer = () => {
  const { selectedIncident, setSelectedIncident } = useIncidentStore();

  

  return (
    <div className={`incident-drawer ${selectedIncident ? 'is-open' : ''}`}>
      {selectedIncident && (
        <>
        <div className="drawer-header">
          <div className="drawer-title">
            <ShieldAlert size={20} className={selectedIncident.severity} />
            <span>Incident Details: {selectedIncident.id}</span>
          </div>
          <button onClick={() => setSelectedIncident(null)} className="close-btn">
            <X size={24} />
          </button>
        </div>

        <div className="drawer-content">
        <div className="detail-group">
          <label><Clock size={14} /> Detected At</label>
          <p>{new Date(selectedIncident.timestamp).toLocaleString()}</p>
        </div>

        <div className="detail-group">
          <label><Globe size={14} /> Source IP / Asset</label>
          <code className="ip-address">192.168.1.105 {/* Можно добавить в модель */}</code>
        </div>

        <div className="detail-group terminal-view">
          <label><Terminal size={14} /> Raw Logs</label>
          <pre>
            {`[RECON] Potential directory traversal attempt detected...
            [FILTER] Matched rule ID: 4002
            [ACTION] Connection logged and flagged.`}
          </pre>
        </div>

        <div className="drawer-actions">
          <button className="btn-block">Block Source</button>
          <button className="btn-resolve">Mark as Resolved</button>
        </div>
      </div>
        </>
      )}
      
      
    </div>
  );
};