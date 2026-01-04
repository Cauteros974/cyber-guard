import { Bell, Search, User } from "lucide-react";
import './Layout.css';

export const Header = () => {
    return(
        <header className="header">
            <div className="search-bar">
                <Search size={18} color = "var(--text-muted)" />
            </div>
        </header>
    )
}