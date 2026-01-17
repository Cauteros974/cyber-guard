import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const data = [
    { name: '00:00', attacks: 40 },
    { name: '04:00', attacks: 30 },
    { name: '08:00', attacks: 65 },
    { name: '12:00', attacks: 45 },
    { name: '16:00', attacks: 90 },
    { name: '20:00', attacks: 55 },
];

export const ActivityChart = () => {
    return(
        <div className="chart-card">
            <h3 className="chart-title">Network Activity (24h)</h3>
            <ResponsiveContainer width="100%" height="90%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorAttacks" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="var(--accent)" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                    <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: 'var(--panel-bg)', borderColor: 'var(--border-color)', borderRadius: '8px' }}
                        itemStyle={{ color: 'var(--accent)' }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};