import { create } from 'zustand';
import { type Incident } from '../types/incident';
import { MOCK_INCIDENTS } from '../data/mockIncidents';

interface IncidentState {
  incidents: Incident[];
  setIncidents: (incidents: Incident[]) => void;
}

export const useIncidentStore = create<IncidentState>((set) => ({
  incidents: MOCK_INCIDENTS,
  addIncident: (newIncident) => 
    set((state) => ({
      incidents: [newIncident, ...state.incidents]
    }))
  setIncidents: (incidents) => set({ incidents }),
}));