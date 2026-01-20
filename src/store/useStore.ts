import { create } from "zustand";

interface Incedent {
    id: string;
    title: string;
    severity: 'critical' | 'high' | 'medium' | 'low';
    status: 'open' | 'resolved' | 'mitigated';
    timestamp: string;
    sourceIp: string;
    targetDevice: string;
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

export const useStore = create<SecurityStore>((set) => ({
    incidents: [
        {
            id: 'INC-2024-001', 
            title: 'Brute Force Attack', 
            severity: 'high',
            status: 'open',
            timestamp: new Date().toISOString(),
            sourceIp: '192.168.1.50',
            targetDevice: 'SRV-DB-01',
            technique: 'T1110'
        }
    ]
}))