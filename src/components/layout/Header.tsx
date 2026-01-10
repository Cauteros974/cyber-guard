import { Bell, Search, User } from "lucide-react";
import { useIncidentStore } from "../../store/useIncidentStore";
import './Layout.css';

export const Header = () => {
    const incidents = useIncidentStore((state) => state.incidents);
    const activeCount = incidents.filter(i => i.status === 'open').length;
    
    return(
        <header className="h-16 border-b border-slate-800 flex items-center justify-end px-8 gap-4 bg-slate-950/50 backdrop-blur-md sticky top-0 z-20">
            <div className="relative p-2 hover:bg-slate-800 rounded-full cursor-pointer transition-colors">
                <Bell size={20} className="text-slate-400" />
                {activeCount > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-slate-950">
                        {activeCount}
                    </span>
                )}
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