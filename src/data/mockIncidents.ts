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
  },
  {
    id: "INC-2024-002",
    title: "Unusual PowerShell Script Execution",
    severity: "high",
    status: "in-progress",
    tactic: "Execution",
    technique: "T1059.001",
    source: "WS-DEV-04",
    timestamp: "2024-05-20T11:20:00Z"
  },
  {
    id: "INC-2024-003",
    title: "Large Data Outbound Transfer",
    severity: "high",
    status: "open",
    tactic: "Exfiltration",
    technique: "T1041",
    source: "File-Server-01",
    timestamp: "2024-05-20T12:05:00Z"
  },
  {
    id: "INC-2024-004",
    title: "New Local Admin Created",
    severity: "medium",
    status: "resolved",
    tactic: "Persistence",
    technique: "T1136.001",
    source: "WS-HR-02",
    timestamp: "2024-05-19T16:45:00Z"
  },
  {
    id: "INC-2025-001",
    title: "Unusual PowerShell Script Execution",
    severity: "medium",
    status: "in-progress",
    tactic: "Execution",
    technique: "T1159.001",
    source: "WS-DUV-01",
    timestamp: "2025-05-20T11:20:00Z"
  },
];