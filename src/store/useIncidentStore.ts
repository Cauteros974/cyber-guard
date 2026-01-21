import { create } from 'zustand';
import { type Incident } from '../types/incident';
import { MOCK_INCIDENTS } from '../data/mockData';

interface IncidentState {
  incidents: Incident[];
  setIncidents: (incidents: Incident[]) => void;
  addIncident: (incident: Incident) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useIncidentStore = create<IncidentState>((set) => ({
  incidents: MOCK_INCIDENTS,
  setIncidents: (incidents) => 
    set({ incidents}),
  addIncident: (newIncident) => 
    set((state) => ({
      incidents: [newIncident, ...state.incidents],
    })),
  
  searchQuery: '',
  setSearchQuery: (query) => set({searchQuery: query}),
  
  
}))