export type Severity = 'low' | 'medium' | 'high' | 'critical';
export type Status = 'open' | 'in-progress' | 'resolved';

export interface Incident {
  id: string;
  title: string;
  severity: Severity;
  status: 'open' | 'investigating' | 'resolved';
  tactic: string;
  technique: string;
  source: string;
  timestamp: string;
}

export type CreateIncidentDTO = Omit<Incident, 'technique' | 'source'>;