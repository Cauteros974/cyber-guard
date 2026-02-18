import { Clock, X, Globe } from "lucide-react";
import { useIncidentStore } from "../../../store/useIncidentStore";
import './IncidentDrawer.css';
import { useState } from "react";

export default IncidentDrawer = () => {
    const { selectedIncident, setSelectedIncident } = useIncidentStore();

    if(!selectedIncident) return null;

    return(
        <div className="drawer">
            <div className="drawer-header">
                <div className="drawer-title">
                    <span>Incident Details: {selectedIncident.id}</span>
                </div>
            </div>
        </div>
    )
}