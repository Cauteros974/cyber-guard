export type Severity = 'low' | 'medium' | 'high' | 'critical';
export type Status = 'open' | 'in-progress' | 'resolved';

export interface Incident {
  id: string;
  title: string;
  severity: Severity;
  status: Status;
  tactic: string;
  technique: string;
  source: string;
  timestamp: string;
}