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
                    <Bell size={20}>
                        <span className="dot"></span>
                    </Bell>
                </div>

                <div className="user-profile">
                    <div className="user-info">
                        <p className="user-name">Admin_Analyst</p>
                        <p className="user-role">SOC Level 3</p>
                    </div>
                    <div className="avatar">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
};