import { Clock, X, Globe } from "lucide-react";
import { useIncidentStore } from "../../../store/useIncidentStore";
import './IncidentDrawer.css';
import { useState } from "react";

export default IncidentDrawer = () => {
    const { selectedIncidentDrawer} = useIncidentStore();

    if(!selectedIncident) return null;
}