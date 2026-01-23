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

                <div className="chart-container area-box">
                    <h3>Detections by level (7 days)</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <AreaChart data={Array.from({length: 7}, (_, i) => ({ day: `01-${17+i}`, val: Math.random() * 10000 }))}>
                            <defs>
                                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="day" stroke="475569" />
                            <YAxis stroke="#475569"/>
                            <Tooltip />
                            <Area type="monotone" stroke="#3b82f6" dataKey="val" fillOpacity={1} fill="url(#colorVal)"/>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/*Bottom row: Top 10 lists*/}
            <div className="rankings-grid">
                <div className="rank-box">
                    <h3>Top Target Computers</h3>
                    <table className="mini-table">
                        <thead>
                            <tr><th>#</th><th>Computer Name</th><th>Alerts</th></tr>
                        </thead>
                        <tbody>
                            {['v4dr-2-senyshyn', 'desktop-b8ps5j2', 'WS-OFFICE-09'].map((name, i) => (
                                <tr key={name}>
                                    <td>{i+1}</td><td>{name}</td><td><span className="badge-count">{5000 - i*1000}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}