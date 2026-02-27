import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const IncidentsChart = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/incidents/stats')
        .then(res => res.json)
        .then(json => setData(json));
    }, [])
}