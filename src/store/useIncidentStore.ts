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



export const useIncidentStore = create<IncidentState>((set) => ({
  incidents: MOCK_INCIDENTS,
  selectedIncident: null,
  isLoading: false,
  searchQuery: '',
  selectedTimeframe: '7d',
  theme: (localStorage.getItem('theme') as Theme) || 'dark',

  fetchIncidents: async () => {
    set({ isLoading: true});
    try{
      const res = await fetch(`${API_URL}/incidents`);
      const data = await res.json();
      set({ incidents: data, isLoading: false});
    } catch(error) {
      console.log("Failed to fetch incidents", error);
      set({ incidents: MOCK_INCIDENTS, isLoading: false});
    }
  },

  addIncident: async (incident) => {
    try{
      const res = await fetch(`${API_URL}/incidents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(incident),
      });

      if (res.ok) {
        set((state) => ({
          incidents: [
            {
              ...incident,
              technique: 'T1078',
              source: 'Manual Report',
            },
            ...state.incidents,
          ],
        }));
      } catch(error) {
        console.log('Failed to save incident', error);
      }
    },

    setSelectedIncident: (incident) =>
      set({ selectedIncident: (incident)}),

    setSearchQuery: (query) => 
      set({setSearchQuery: (query)}),

    
  }
}))
