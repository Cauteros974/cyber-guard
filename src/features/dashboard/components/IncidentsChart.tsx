import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface IncidentStat {
    time: string;
    count: number;
}

export const IncidentsChart = () => {
    const [data, setData] = useState<IncidentStat[]>([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/incidents/stats')
        .then(res => res.json())
        .then(json => setData(json));
    }, []);

    return(
        <div style={{width: '100%', height: 300, padding: '20px', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.5)'}}>
            <h3 style={{ color: '#94A3B8', marginBottom: '20px', fontSize: '14px'}}>ATTACK VELOCITY (24H)</h3>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart>
                    <defs>
                        <linearGradient>
                            <stop offset="10%" stopColor="#ef4444" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3" stroke="#1e293b"/>
                    <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false}/>
                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false}/>
                    <Tooltip 
                        itemStyle={{ color: '#ef4444'}}
                        contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px'}}
                    />
                    <Area 
                        type="monotone"
                        stroke="#ef4444"
                        fillOpacity={1}
                        dataKey="count"
                        fill="url(#colorCount)"
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};