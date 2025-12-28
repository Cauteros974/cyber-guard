import { LayoutDashboard, ShieldAlert, Zap, Monitor, Settings, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    {icon: LayoutDashboard, label: 'Dashboard', path: '/'},
    {icon: ShieldAlert, label: 'Incidents', path: '/incidents'},
    {icon: Zap, label: 'Threat Intel', path: '/threat-intel' },
    {icon: Monitor, label: 'Devices', path: '/devices'},
    {icon: ShieldCheck, label: 'Policies', path: '/policies'},
    { icon: Settings, label: 'Settings', path: '/settings' },
];