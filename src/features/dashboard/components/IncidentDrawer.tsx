import { useState, useEffect } from "react";
import { Clock, X, Globe, ShieldAlert, Terminal, Bot } from "lucide-react";
import { useIncidentStore } from "../../../store/useIncidentStore";
import './IncidentDrawer.css';

export const IncidentDrawer = () => {
    const { selectedIncident, setSelectedIncident } = useIncidentStore();

    const AIInsight = ({ description }) => {
        const [analysis, setAnalysis] = useState(null);

        useEffect(() => {
            fetch('http://127.0.0.1:8002/analyze-threat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description })
            })
            .then(res => res.json())
            .then(data => setAnalysis(data.analysis));
        }, [description]);

        if(!analysis) return <span>AI is thinking...</span>;
        return(
            <div>
                <Bot size={16} />
            </div>
        )
    }

    if(!selectedIncident) return null;

    return(
        <div className="{`incident-drawer ${selectedIncident ? 'is-open' : ''}`}">
            <div className="drawer-header">
                <div className="drawer-title">
                    <ShieldAlert size={20} className={selectedIncident.severity} />
                    <span>Incident Details: {selectedIncident.id}</span>
                </div>
                <button onClick={() => setSelectedIncident(null)} className="close-btn">
                    <X size={20} />
                </button>
            </div>

            <div className="drawer-content">
                <div className="detail-group">
                    <label> <Clock size={14} />Detected At</label>
                    <p>{new Date(selectedIncident.timestamp).toLocaleString()}</p>
                </div>

                <div className="detail-group">
                    <label> <Globe size={14} /> Source IP</label>
                    <code className="ip-address">192.168.1.105 </code>
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
                    <button>Block Source</button>
                    <button>Mark as Resolved</button>
                </div>
            </div>
        </div>
    )
}