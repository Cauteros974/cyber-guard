import { LayoutDashboard, ShieldAlert, Zap, Monitor, Settings, ShieldCheck } from 'lucide-react';
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
        <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
            <div className='p-6 flex items-center gap-3'>
                <ShieldAlert className="text-red-500 w-8 h-8" />
                <span className="fond-bold text-xl tracking-tight text-white">CyberGuard</span>
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