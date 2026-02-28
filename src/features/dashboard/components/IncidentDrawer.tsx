import { useState, useEffect } from "react";
import { Clock, X, Globe, ShieldAlert, Terminal, Bot, Zap } from "lucide-react";
import { useIncidentStore } from "../../../store/useIncidentStore";
import './IncidentDrawer.css';


interface AIInsightProps{
    description: string;
}


export const IncidentDrawer = () => {
    const { selectedIncident, setSelectedIncident } = useIncidentStore();
    const [analysis, setAnalysis] = useState<{
        predicted_type: string;
        predicted_severity: string;
    } | null>(null);
    const [isExecuting, setIsExecuting] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const AIInsightProps: React.FC<AIInsightProps> = ({description }) => {
        const [analysis, setAnalysis] = useState(null);
      
        useEffect(() => {
          fetch('http://127.0.0.1:8002/analyze-threat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description })
          })
          .then(res => {
            if(!res.ok) throw new Error("AI request failed");
            return res.json();
          })
          .then(data => setAnalysis(data.analysis))
          .catch(err => console.error("AI error:", err));
        }, [description]);
      
        if (!analysis) return <span>AI is thinking...</span>;
      
        return (
          <div className="ai-badge">
            <Bot size={16} />
            <span>AI Predicts: <b>{analysis.predicted_type}</b> ({analysis.predicted_severity})</span>
          </div>
        );
      };
      
    if(!selectedIncident) return null;

    const isCritical = selectedIncident.severity == 'critical';

    const handleCountermeasure = async () => {
        setIsExecuting(true);

        const response = await fetch('http://127.0.0.1:8002/execute-countermeasures', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                incident_id: selectedIncident.id,
            })
        });

        if(response.ok){
            setTimeout(() => {
                setIsExecuting(false);
                setIsDone(true);
            }, 1500);
        }
    };

    return(
        <div className={`incident-drawer ${selectedIncident ? 'is-open' : ''}`}>
            <div className="drawer-header">
                <div className="drawer-title">
                    <ShieldAlert size={20} className={selectedIncident.severity} />
                    <span>Incident Details: {selectedIncident.id}</span>
                </div>
                <button onClick={() => setSelectedIncident(null)} className="close-btn">
                    <X size={20} />
                </button>
            </div>

            <div className="countermeasures-section">
                {isCritical && !isDone && (
                    <button
                        className={`panic-button ${isExecuting ? 'executing' : ''}`}
                        onClick={handleCountermeasure}
                        disabled={isExecuting}
                    >
                        <Zap size={18} />
                        {isExecuting ? 'EXECUTING...' : 'EXECUTE COUNTERMEASURES'}
                    </button>
                )}
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