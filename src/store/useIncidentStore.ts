import { create } from 'zustand';
import { type Incident, type CreateIncidentDTO } from '../types/incident';
import { MOCK_INCIDENTS } from '../data/mockData';

type Timeframe = 'today' | '7d' | '30d';
type Theme = 'dark' | 'light';

const API_URL = 'http://127.0.0.1:8000';

interface IncidentState {
  incidents: Incident[];
  selectedIncident: Incident | null;
  isLoading: boolean;
  searchQuery: string;
  selectedTimeframe: Timeframe;
  theme: Theme;

  fetchIncidents: () => Promise<void>;
  addIncident: (incident: CreateIncidentDTO) => Promise<void>;
  setSelectedIncident: (incident: Incident | null) => void;
  setSearchQuery: (query: string) => void;
  setTimeframe: (timeframe: Timeframe) => void;
  setTheme: (theme: Theme) => void;
}

export const useIncidentStore = create<IncidentState>((set, get) => ({
  incidents: MOCK_INCIDENTS,
  selectedIncident: null,
  isLoading: false,
  searchQuery: '',
  selectedTimeframe: '7d',
  theme: (localStorage.getItem('theme') as Theme) || 'dark',

  getSecurityScore: () => {
    const incidents = get().incidents;
    const openIncidents = incidents.filter(inc => inc.status === 'open')

    let penalty = 0;
    openIncidents.forEach(inc => {
      if (inc.severity === 'critical') penalty += 15;
      if (inc.severity === 'high') penalty += 5;
      if (inc.severity === 'medium') penalty += 2;
    });

    
  }

  fetchIncidents: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch(`${API_URL}/incidents`);
      const data = await res.json();
      set({ incidents: data, isLoading: false });
    } catch (error) {
      console.error('Failed to fetch incidents', error);
      set({ incidents: MOCK_INCIDENTS, isLoading: false });
    }
  },

  addIncident: async (incident) => {
    try {
      const res = await fetch(`${API_URL}/incidents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(incident),
      });

      if (!res.ok) throw new Error('Failed to create incident');

      const created = await res.json();

      set((state) => ({
        incidents: [created, ...state.incidents],
      }));
    } catch (error) {
      console.error('Failed to save incident', error);
    }
  },

  setSelectedIncident: (incident) => set({ selectedIncident: incident }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setTimeframe: (timeframe) => set({ selectedTimeframe: timeframe }),

  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    set({ theme });
  },
}));
