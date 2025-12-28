import { LayoutDashboard, ShieldAlert, Zap, Monitor, Settings, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    {icon: LayoutDashboard, label: 'Dashboard', path: '/'},
    {icon: ShieldAlert, label: 'Incidents', path: '/incidents'},
    
]