import { create } from "zustand";

interface Incedent {
    id: string;
    title: string;
    severity: 'critical' | 'medium' | 'low';
    status: 'open' | 'resolved' | 'mitigated';
    timestamp: string;
    sourceIp: string;
    targetDevie: string;
    technique: string;
}

interface Device {
    id: string;
    name: string;
    ip: string;
    status: 'online' | 'offline' | 'isolated';
}

interface SecurityStore {
    incidents: Incedent[];
    devices: Device[];
    addIncident: (incident: Incedent) => void;
    resolveIncident: (id: string) => void;
    isolateDevice: (deviceId: string) => void;
}