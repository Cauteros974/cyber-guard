import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const IncidentsChart = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/incidents/stats')
        .then(res => res.json)
        .then(json => setData(json));
    }, []);

    return(
        <div style={{width: '100%', height: 300, padding: '20px', borderRadius: '12px'}}>
            <h3 style={{ color: '#94A3B8', marginBottom: '20px'}}>ATTACK VELOCITY (24H)</h3>
        </div>
    )
}