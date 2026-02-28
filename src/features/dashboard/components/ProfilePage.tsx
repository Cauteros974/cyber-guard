import { ShieldCheck, Target, Award, Clock } from "lucide-react";
import { useEffect } from "react";
import { useUserStore } from "../../../store/useUserStore";
import './ProfilePage.css';

export const ProfilePage = () => {

    const user = useUserStore(state => state.user);
    
    

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="header-info">
                        
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-item">
                        <Target size={18} />
                        <span className="stat-value">
                            
                        </span>
                        <span className="stat-label">Resolved</span>
                    </div>

                    <div className="stat-item">
                        <ShieldCheck size={20} />
                        
                        <span className="stat-label">Access Level</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
