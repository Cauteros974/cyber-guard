import { useIncidentStore } from "../../../store/useIncidentStore";

export const TimeframeFilter = () => {
    const { selectedTimeframe, setTimeframe } = useIncidentStore();

    const options: {id: 'today' | '7d' | '30d', label: string} [] = [
        {id: 'today', label: 'Today'},
        {id: '7d', label: 'Last 7 Days'},
        {id: '30d', label: 'Last 30 Days'},
    ];

    return(
        <div className="timeframe-filter">
            
        </div>
    )
}