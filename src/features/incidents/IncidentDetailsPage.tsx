import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { useIncidentStore } from "../../store/useIncidentStore";
import { SeverityBadge } from "./components/SeverityBadge";

export const IncidentDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { incidents } = useIncidentStore();

    const incident = incidents.find(inc => inc.id === id);

    if(!incident) return <div className="p-10">Incident not found</div>

    return(
        <div className="space-y-6 max-w-5xl mx-auto">
            <button
                onClick={() => navigate('/incidents')}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
                <ArrowLeft size={18} /> Back to Incidents
            </button>

            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl font-bold">{incident.title}</h1>
                        <SeverityBadge level={incident.severity} />
                    </div>
                    <p className="text-slate-400 font-mono text-sm">ID: {incident.id} | Source: {incident.source}</p>
                </div>
            </div>
        </div>
    )
};

