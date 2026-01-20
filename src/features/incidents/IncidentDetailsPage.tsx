import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Globe, Shield, Target, Terminal } from "lucide-react";
import { useIncidentStore } from "../../store/useIncidentStore";
import { SeverityBadge } from "./components/SeverityBadge";
import './IncidentDetails.css';
export const IncidentDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { incidents } = useIncidentStore();

    const incident = incidents.find(inc => inc.id === id);

    if(!incident) return <div className="p-10">Incident not found</div>

    const evetnts = [
        {time: '10:42:32', title: 'Initial Access', desc: 'Brute force attempt detected on SSH port', type: 'critical'},
        { time: '10:47:05', title: 'Lateral Movement', desc: 'User "admin" accessed internal database server', type: 'warning' },
        { time: '10:52:00', title: 'Data Exfiltration', desc: 'Outbound traffic spike to unknown IP (8.8.4.4)', type: 'critical' },   
    ];

    return(
        <div className="dashboard-container">
            <button onClick={() => navigate(-1)} className="nav-link" style={{ marginBottom: '20px', width: 'fit-content' }}>
                <ArrowLeft size={16} /> Back to Incidents
            </button>

            <div className="incident-details-container">
                {/*Left column: Description and Analysis*/}
                <div className="main-info">
                    <div className="detail-card">
                        <div className="detail-header">
                            <div>
                                <span className="incident-id">{id || 'INC-2024-089'}</span>
                                <h1 className="incident-title">Potencial Data Breach</h1>
                            </div>
                            <span className="badge badge-critical">Critical</span>
                        </div>

                        <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                            <div className="stat-card">
                                <Globe size={20} color="var(--accent)" />
                            </div>
                            <p className="stat-label">Source IP</p>
                            <p className="stat-value">192.168.1.105</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <Server size={20} color = "var(--accent)" />
                        <div>
                            <p className="stat-label">Affected Asset</p>
                            <p className="stat-value">DB-PROD-01</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

