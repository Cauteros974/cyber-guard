import { Clock, X, Globe, ShieldAlert, Terminal } from "lucide-react";
import { useIncidentStore } from "../../../store/useIncidentStore";
import './IncidentDrawer.css';
import { useState } from "react";

export default IncidentDrawer = () => {
    const { selectedIncident, setSelectedIncident } = useIncidentStore();

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
        </div>
    )
}