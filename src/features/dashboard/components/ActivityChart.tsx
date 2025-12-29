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
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 2" stroke="#1e293b" />
                    <XAxis dataKey="time" stroke="#64748b" fontSize={12}/>
                    <YAxis stroke="#64748b" fontSize={12}/>
                    <Tooltip 
                        contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b'}}
                        itemStyle={{color: '#3b82f6'}}
                    />
                    <Line 
                        type="monotone"
                        dataKey="count"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ r: 4, fill: '#3b82f6'}}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};