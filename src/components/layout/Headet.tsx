import { Bell, Search, User } from "lucide-react";
import './Layout.css';

export const Header = () => {
    return(
        <header className="header">
            <div className="search-bar">
                <Search size={18} color = "var(--text-muted)" />
                <input type="text" placeholder="Search incidents, IPs or devices..."/>
            </div>

            <div className="header-actions">
                <div className="notification-badge">
                    <Bell size={18}>
                        <span className="dot"></span>
                    </Bell>
                </div>
            </div>
        </header>
    )
}