import { ShieldCheck, Target, Award, Clock } from "lucide-react";
import { useUserStore } from "../../../store/useUserStore";
import './ProfilePage.css';

export const ProfilePage = () => {
    const {user} = useUserStore();

    if(!user) return <div>Loading access credentials...</div>;

    return(
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-haeder">
                    <div className="header-info">
                        <h1>{user.username}</h1>
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-item">
                        <Target size={18} />
                        <span className="stat-value">{user.stats.resolved_incidents}</span>
                        <span className="stat-label">Resolved</span>
                    </div>
                    <div className="stat-item">
                        <ShieldCheck size={20} />
                        <span className="stat-value">{user.role}</span>
                        <span className="stat-label">Access Level</span>
                    </div>
                </div>

                <div className="system-logs-mini">
                    <h3>Recent Activity</h3>
                    <ul>
                        <li><Clock size={12} /> Logged in from 192.168.1.1</li>
                        <li><Clock size={12} /> Closed Incident #INC-4402</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};