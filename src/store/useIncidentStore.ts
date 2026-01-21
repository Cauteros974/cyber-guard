import { create } from 'zustand';
import { type Incident, type CreateIncidentDTO } from '../types/incident';
import { MOCK_INCIDENTS } from '../data/mockData';

interface IncidentState {
  incidents: Incident[];
  searchQuery: string;

  setSearchQuery: (query: string) => void;
  setIncidents: (incidents: Incident[]) => void;
  addIncident: (incident: CreateIncidentDTO) => void;
}

export const useIncidentStore = create<IncidentState>((set) => ({
  incidents: MOCK_INCIDENTS,
  searchQuery: '',

  setSearchQuery: (query) => set({ searchQuery: query }),

  setIncidents: (incidents) => set({ incidents }),

  addIncident: (incident) =>
    set((state) => ({
      incidents: [
        {
          ...incident,
          technique: 'T1078',
          source: 'Manual Report',
        },
        ...state.incidents,
      ],
    })),
}));