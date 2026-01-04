import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { useIncidentStore } from "../../store/useIncidentStore";
import { SeverityBadge } from "./components/SeverityBadge";

export const IncidentDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { incidents } = useIncidentStore();

    const incident = incidents.find(inc => inc.id === id);

    if(!incident) return(<div className="p-10">Incident not found</div>)
};

