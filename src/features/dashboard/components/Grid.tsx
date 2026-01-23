import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Grid.css';

const pieData = [
    { name: 'Antivirus', value: 17056, color: '#a855f7' },
    { name: 'Firewall', value: 3, color: '#06b6d4' },
];

export const Grid = () => {
    return(
        <div className="enterprise-dashboard">
            {/*KPI Block */}
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
                <div className="kpi-card critical">
                    <div className="kpi-content">
                        <span className="kpi-label">Critical Errors</span>
                        <span className="kpi-value">17 058</span>
                        <span className="kpi-sub text-danger">1066 live threats</span>
                    </div>
                </div>
            </div>
            {/*Pie chart and large graph*/}
            <div className="main-stat-grid">
                <div className="chart-container pie-box">
                    <h3>Unresolved Objects by Source</h3>
                    <div className="pie-wrapper">
                        <ResponsiveContainer width="50%" height={200}>
                            <PieChart>
                                <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                                    {pieData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="pie-center-text">17056</div>
                    </div>
                    <div className="pie-legend">
                        {pieData.map(item => (
                            <div key={item.name} className="legend-item">
                                <span style={{background: item.color}}></span> {item.name}: {item.value}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}