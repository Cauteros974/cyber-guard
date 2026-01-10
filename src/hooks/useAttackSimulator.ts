import { useEffect } from "react";
import { useIncidentStore } from "../store/useIncidentStore";
import { type Incident, type Severity} from "../features/incidents/IncidentsPage";

const SEVERITY: Severity[] = ['low', 'medium', 'height', 'critical'];
const TITLES: ['Unauthorized Access Attempt', 'Malware DNS Beaconing '];

export const useAttackSimulator = () => {
    const addIncident = useIncidentStore((state) => state.addIncident);

    useEffect(() => {
        const interval = setInterval(() => {
            //Chance of attack occurrence(e.g 20% every 10 sec)
            if(Math.random() > 0.8) {
                const newIncident: Incident = {
                    id: `INC-${Math.floor(Math.random())}`
                }
            }
        })
    })
}