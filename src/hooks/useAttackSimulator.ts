import { useEffect } from "react";
import { useIncidentStore } from "../store/useIncidentStore";
import { type Incident, type Severity} from "../features/incidents/IncidentsPage";

const SEVERITY: Severity[] = ['low', 'medium', 'height', 'critical'];
const TITLE: ['Unauthorized Access Attempt', 'Malware DNS Beaconing '];