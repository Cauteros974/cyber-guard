import { useState, useEffect } from "react";
import { Clock, X, Globe, ShieldAlert, Terminal, Bot, Zap } from "lucide-react";
import { useIncidentStore } from "../../../store/useIncidentStore";
import './IncidentDrawer.css';

interface AIInsightProps{
    description: string;
}

const AIInsight: React.FC<AIInsightProps> = ({ description }) => {
    const [analysis, setAnalysis] = useState<{
        predicted_type: string;
        predicted_severity: string;
    } | null>(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('http://127.0.0.1:8002/analyze-threat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description })
        })
            .then(res => res.json())
            .then(data => {
                setAnalysis(data.analysis)
                setLoading(false);
            })
            .catch(err => {
                console.error("AI error:", err);
                setLoading(false);
            });
    }, [description]);

    if (loading) return <div className="ai-loading"> <Bot size={16} className="spin" /> AI is analyzing...</div>;
    if (!analysis) return null;

    return(
        <div className={`ai-badge ${analysis.predicted_severity}`}>
            <Bot size={16} />
            <span>AI Predicted: <b>{analysis.predicted_type}</b> ({analysis.predicted_severity})</span>
        </div>
    );
};

export const IncidentDrawer = () => {
    const {selectedIncident, setSelectedIncident} = useIncidentStore();
    const [isExecuting, setIsExecuting] = useState(false);
    const [isDone, setIsDone] = useState(false);

    if(!selectedIncident) return null;

    const isCritical = selectedIncident.severity === 'critical';

    const handleCountermeasure = async () => {
        setIsExecuting(true);
        try{
            const response = await fetch('http://127.0.0.1:8002/execute-countermeasures', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ incident_id: selectedIncident.id })
            });

            if(response.ok) {
                setTimeout(() => {
                    setIsExecuting(false);
                    setIsDone(true);
                }, 1500);
            }
        } catch(error) {
            console.log("Action failed", error);
            setIsExecuting(false);
        }
    };

    return(
        <div className={`incident-drawer ${selectedIncident ? 'is-open' : ''}`}>
            <div className="drawer-heder">
                <div className="drawer-title">
                    <ShieldAlert size={20} className={selectedIncident.severity} />
                    <span>Incident Details: {selectedIncident.id}</span>
                </div>
                <button onClick={() => setSelectedIncident(null)} className="close-btn">
                    <X size={20} />
                </button>
            </div>

            <div className="drawer-content">
                <AIInsight description={selectedIncident.title} />

                <div className="countermeasures-section">
                    {isCritical && !isDone && (
                        <button 
                            className={`panic-button ${isExecuting ? 'executing' : ''}`}
                            onClick={handleCountermeasure}
                            disabled={isExecuting}
                        >
                            {isExecuting ? 'EXECUTING...' : 'EXECUTE COUNTERMEASURES'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}