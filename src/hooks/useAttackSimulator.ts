import { useEffect } from "react";
import { useIncidentStore } from "../store/useIncidentStore";
import { type Severity, type Incident} from "../features/incidents/IncidentsPage";

const SEVERITY: Severity[] = ['low', 'medium', 'height', 'critical'];
const TITLES: ['Unauthorized Access Attempt', 'Malware DNS Beaconing '];

export const useAttackSimulator = () => {
    const addIncident = useIncidentStore((state) => state.addIncident);

    useEffect(() => {
        const interval = setInterval(() => {
            //Chance of attack occurrence(e.g 20% every 10 sec)
            if(Math.random() > 0.8) {
                const newIncident: Incident = {
                    id: `INC-${Math.floor(Math.random() * 10000)}`,
                    title: TITLES[Math.floor(Math.random() * TITLES.length)],
                    severity: SEVERITY[Math.floor(Math.random() * TITLES.length)],
                    status: 'open',
                    tactic: 'Initial Access',
                    technique: 'T1109',
                    source: `192.168.1.${Math.floor(Math.random() * 255)}`,
                    timestamp: new Date().toISOString,
                };
                addIncident(newIncident);
                console.log("! New incident detected", newIncident);
            }
        }, 100000);

        return () => clearInterval(interval);
    }, [addIncident]);
}