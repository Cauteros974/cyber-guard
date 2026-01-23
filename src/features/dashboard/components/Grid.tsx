import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Grid.css';

const pieData = [
    { name: 'Antivirus', value: 17056, color: '#a855f7' },
    { name: 'Firewall', value: 3, color: '#06b6d4' },
];

export const Grid = () => {
    return(
        <div className="enterprise-dashboard">
            <div className="kpi-row">
                <div className="kpi-card total">
                    <div className="kpi-content">
                        <span className="kpi-label">Total Detections</span>
                        <span className="kpi-value">17 059</span>
                        <span className="kpi-sub">Last 7 days: 299 036</span>
                    </div>
                </div>
                <div className="kpi-card warning">
                    <div className="kpi-content">
                        <span className="kpi-label">Warnings</span>
                        <span className="kpi-value">1</span>
                        <span className="kpi-sub">Unresolved: 0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}