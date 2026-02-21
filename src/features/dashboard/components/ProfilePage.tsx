import { ShieldCheck, Target, Award, Clock } from "lucide-react";
import { useUserStore } from "../../../store/useUserStore";

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
            </div>
        </div>
    )
}