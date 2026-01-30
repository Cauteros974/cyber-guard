import { create } from 'zustand';
import { type Incident, type CreateIncidentDTO } from '../types/incident';
import { MOCK_INCIDENTS } from '../data/mockData';

type Timeframe = 'today' | '7d' | '30d';

type Theme = 'dark' | 'light';

interface IncidentState {
  incidents: Incident[];
  searchQuery: string;

  setSearchQuery: (query: string) => void;
  setIncidents: (incidents: Incident[]) => void;
  addIncident: (incident: CreateIncidentDTO) => void;

  selectedTimeframe: Timeframe;
  setTimeframe: (timeframe: Timeframe) => void;

  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useIncidentStore = create<IncidentState>((set) => ({

  theme: (localStorage.getItem('theme') as Theme ) || 'dark',

  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    set({theme});
    document.documentElement.setAttribute('data-theme', theme);
  },

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

    selectedTimeframe: '7d',
    setTimeframe: (timeframe) => set({ selectedTimeframe: timeframe }),
}));