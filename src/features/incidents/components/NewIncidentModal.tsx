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

    return(
        <div  className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Report New Incident</h2>
                    <button onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Incident Title</label>
                        <input 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Brute force on DB"
                            required
                        />
                    </div>

                    <div className="form-group">
                    <label>Severity</label>
                    <select
                        value={severity}
                        onChange={(e) => setSeverity(e.target.value as Severity)}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        
                    </select>
                    </div>
                </form>
            </div>
        </div>
    )
}