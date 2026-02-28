import { ShieldCheck, Target, Award, Clock } from "lucide-react";
import { useUserStore } from "../../../store/useUseStore";
import './ProfilePage.css';

export const ProfilePage = () => {

    const { user } = useUserStore();

    return (
        <div className="profile-container">
            <div className="profile-card">

                <div className="profile-header">
                    <div className="header-info">
                        <h1>{user?.username}</h1>
                        <p className="clearance-badge">{user?.clearance}</p>
                    </div>
                </div>

                <div className="stats-grid">

                    <div className="stat-item">
                        <Target size={18} />
                        <span className="stat-value">
                            {user?.stats.resolved_incidents}
                        </span>
                        <span className="stat-label">Resolved Incidents</span>
                    </div>

                    <div className="stat-item">
                        <ShieldCheck size={18} />
                        <span className="stat-value">
                            {user?.stats.active_investigations}
                        </span>
                        <span className="stat-label">Active Investigations</span>
                    </div>

                    <div className="stat-item">
                        <Award size={18} />
                        <span className="stat-value">
                            {user?.stats.security_score}
                        </span>
                        <span className="stat-label">Security Score</span>
                    </div>

                    <div className="stat-item">
                        <Clock size={18} />
                        <span className="stat-value">{user?.role}</span>
                        <span className="stat-label">Access Level</span>
                    </div>

                </div>

            </div>
        </div>
    );
};
