import React, {useState} from "react";
import { useIncidentStore } from "../../../store/useIncidentStore";
import { X } from "lucide-react";
import { type Severity } from "../../../types/incident";

export const NewIncidentModal = ({isOpen, onClose} : {isOpen: boolean, onClose: () => void}) => {
    const addIncident = useIncidentStore(state => state.addIncident);
    const [title, setTitle] = useState('');
    const [severity, setSeverity] = useState<Severity>('medium');

    if(!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newIncident = {
            id: `INC-${Math.floor(Math.random() * 10000)}`,
            title,
            severity,
            status: 'open',
            timestamp: new Date().toISOString(),
            tactic: 'Initial Access',
        };
        setTitle('');
        setSeverity('medium');
        onClose();
    };
}