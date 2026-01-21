import React, {useState} from "react";
import { useIncidentStore } from "../../../store/useIncidentStore";
import { X } from "lucide-react";

export const NewIncidentModal = ({isOpen, onClose} : {isOpen: boolean, onClose: () => void}) => {
    const addIncident = useIncidentStore(state => state.addIncident);
    const [title, setTitle] = useState('');
    const [severity, setSeverity] = useState('medium');

    if(!isOpen) return null;
}