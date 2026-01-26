import { Search, Bell, User, Menu } from "lucide-react";
import { useIncidentStore } from "../../store/useIncidentStore";
import './Layout.css';

export const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const { incidents, searchQuery, setSearchQuery } = useIncidentStore();

  const hasCritical = incidents.some(
    inc => inc.severity === 'critical' && inc.status === 'open'
  );


  return(
    <header className="header">
      <div className="header-left">
        <div className={`system-status ${hasCritical ? 'is-danger' : 'is-safe'}`}>
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-ping"></span>
          </div>
          <span className="status-label">
            {hasCritical ? 'System Under Attack' : 'System Secure'}
          </span>
        </div>
      </div>

      <div className="header-center">
        <div className="search-wrapper">
          <Search size={18} className="search-icon" />
          <input 
              type= "text" 
              placeholder="Search incidents, IPs or assets..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn">
          <Bell size={18} />
          {hasCritical && <span className="notification-badge"></span>}
        </button>

        <div className="user-profile">
          <div className="user-text">
            <span className="user-name">Admin_Analyst</span>
            <span className="user-role">SOC level_3</span>
          </div>
          <div className="user_avatar">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};