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
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all">
                    Mark as Resolved
                </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Timeline */}
                <div className="lg:col-span-2 bg-panel rounded-xl border border-slate-800 p-6">
                    <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                        <Clock size={20} className="text-accent" /> Attack Timeline
                    </h3>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-slate-800 before:via-slate-700 before:to-transparent">
                        {/* Example of timelines sages */}
                        {[
                            { time: "10:15:01", event: "Initial Access", desc: "First failed login attempt detected via SSH.", icon: Target },
                            { time: "10:15:45", event: "Brute Force Success", desc: "Successful login after 45 attempts from IP 192.168.1.105", icon: Shield },
                            { time: "10:16:12", event: "Privilege Escalation", desc: "User 'admin' executed sudo -i", icon: Terminal }
                        ].map((step.id) => (
                            <div key={idx} className="relative flex items-start gap-6 pl-10">
                                <div className="absolute left-0 w-10 h-10 bg-slate-900 border border-slate-700 rounded-full flex items-center justify-center z-10">
                                    <step.icon size={16} className="text-accent" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

