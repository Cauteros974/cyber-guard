import { create } from 'zustand';

interface Incident {
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
  incidents: Incident[];
  devices: Device[];
  addIncident: (incident: Incident) => void;
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
  ],
  devices: [
    { id: 'SRV-DB-01', name: 'Database Server', ip: '10.0.0.5', status: 'online' },
    { id: 'WS-OFFICE-09', name: 'Workstation 09', ip: '10.0.0.12', status: 'online' },
  ],
  addIncident: (incident) => set((state) => ({ 
    incidents: [incident, ...state.incidents] 
  })),
  resolveIncident: (id) => set((state) => ({
    incidents: state.incidents.map(inc => inc.id === id ? { ...inc, status: 'resolved' } : inc)
  })),
  isolateDevice: (deviceId) => set((state) => ({
    devices: state.devices.map(dev => dev.id === deviceId ? { ...dev, status: 'isolated' } : dev)
  })),
}));