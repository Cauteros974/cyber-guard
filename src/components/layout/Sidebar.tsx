import { LayoutDashboard, ShieldAlert, Shield, Zap, Monitor, Settings, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/incidents', icon: ShieldAlert, label: 'Incidents' },
    { path: '/threat-intel', icon: Zap, label: 'Threat Intel' },
    { path: '/devices', icon: Monitor, label: 'Devices' },
    { path: '/policies', icon: ShieldCheck, label: 'Policies' },
    { path: '/settings', icon: Settings, label: 'Settings' },
];

export const Sidebar = () => {
    const location = useLocation();

    return(
        <aside className="sidebar">
            <div className="sidebar-logo">
                <Shield size={28} color="var(--accent)" fill="rgba(59, 130, 246, 0.2)" />
                <span className="logo-text">CyberGuard</span>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return(
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-4 rounded-lg transition-colors ${
                                isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                            }`}
                        >
                            <item.icon size={20} />
                            <span className="front-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
};