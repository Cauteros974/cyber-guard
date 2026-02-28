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
    )
}