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
        </div>
      </div>
    </header>
  )
}