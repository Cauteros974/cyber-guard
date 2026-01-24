import { create } from 'zustand';
import { type Incident, type CreateIncidentDTO } from '../types/incident';
import { MOCK_INCIDENTS } from '../data/mockData';

type Timeframe = 'today' | '7d' | '30d';

interface IncidentState {
  incidents: Incident[];
  searchQuery: string;
  selectedTimefree: Timeframe;
  setTimeframe: (timeframe: Timeframe) => void;

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