import { ShieldCheck, Target, Award, Clock } from "lucide-react";
import { useEffect } from "react";
import { useUserStore } from "../../../store/useUserStore";
import './ProfilePage.css';

export const ProfilePage = () => {

    const { user, fetchUser } = useUserStore();

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    if (!user) {
        return <div className="loading">Loading access credentials...</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="header-info">
                        <h1>{user.username}</h1>
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-item">
                        <Target size={18} />
                        <span className="stat-value">
                            {user.stats.resolved_incidents}
                        </span>
                        <span className="stat-label">Resolved</span>
                    </div>

                    <div className="stat-item">
                        <ShieldCheck size={20} />
                        <span className="stat-value">{user.role}</span>
                        <span className="stat-label">Access Level</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
