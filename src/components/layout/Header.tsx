import { Search, Bell, User } from "lucide-react";
import { useStore } from "../../store/useStore";
import './Layout.css';

export const Header = () => {
  const incidents = useStore((state) => state.incidents);
  const hasCritical = incidents.some(inc => inc.severity === 'critical' && inc.status === 'open');

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
          <input type= "text" className="text_hold" placeholder="Search incidents, IPs or assets..." />
        </div>
      </div>
    </header>
  )
}