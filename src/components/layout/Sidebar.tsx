import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ShieldAlert, Monitor, ShieldCheck, Settings, Shield, Plus } from 'lucide-react';
import { NewIncidentModal } from '../../features/incidents/components/NewIncidentModal';
import { useState } from 'react';
import './Layout.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/incidents', icon: ShieldAlert, label: 'Incidents' },
    { path: '/devices', icon: Monitor, label: 'Devices' },
    { path: '/policies', icon: ShieldCheck, label: 'Policies' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <>
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Shield size={28} color="var(--accent)" fill="rgba(59, 130, 246, 0.2)" />
        <span className="logo-text">CyberGuard</span>
      </div>

      <button className="btn-create-incident" onClick={() => setIsModalOpen(true)}>
        <Plus size={18} />
        <span>New Incident</span>
      </button>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="version-tag">v.2.4.0-stable</div>
      </div>
    </aside>

    <NewIncidentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen}
    />
  </>
  );
};