import { type Incident } from "../types/incident";

export const MOCK_INCIDENTS: Incident[] = [
  {
    id: "INC-2024-001",
    title: "Brute Force Attack on Admin Portal",
    severity: "critical",
    status: "open",
    tactic: "Credential Access",
    technique: "T1110.001",
    source: "192.168.1.105",
    timestamp: "2024-05-20T10:15:00Z"
  }
];