import { create } from 'zustand';
import { type Incident } from '../types/incident';
import { MOCK_INCIDENTS } from '../data/mockData';

interface IncidentState {
  incidents: Incident[];
  setIncidents: (incidents: Incident[]) => void;
  addIncident: (incident: Incident) => void;
}

export const useIncidentStore = create<IncidentState>((set) => ({
  incidents: MOCK_INCIDENTS,
  setIncidents: (incidents) => 
    set({ incidents}),
  addIncident: (newIncident) => 
}))