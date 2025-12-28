import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {time: '00:00', count: 10},
    {time: '04:00', count: 5},
    {time: '08:00', count: 18},
    { time: '12:00', count: 45 }, // Peak attacks at lunchtime
    { time: '16:00', count: 30 },
    { time: '20:00', count: 25 },
];

export const ActivityChart = () => {
    return(
        <div className="h-[300px] w-full bg-panel p-6 rounded-xl border border-slate-800">
            <h3 className="text-lg font-simebold mb-4">Network Activity (24h)</h3>
        </div>
    )
}