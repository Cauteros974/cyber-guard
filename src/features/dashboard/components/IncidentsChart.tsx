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
        <div style={{width: '100%', height: 300, padding: '20px', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.5)'}}>
            <h3 style={{ color: '#94A3B8', marginBottom: '20px', fontSize: '14px'}}>ATTACK VELOCITY (24H)</h3>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart>
                    <defs>
                        <linearGradient>
                            <stop offset="10%" stopColor="#ef4444"/>
                            <stop offset="95%" stopColor="#ef4444"/>
                        </linearGradient>
                    </defs>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}