import { create } from "zustand";

interface UserProfile{
    username: string;
    role: string;
    classname: string;
    stats: {
        resolved_incidents: number;
        active_investigations: number;
        security_score: number;
    };
}

interface UseStore{
    user: UserProfile;
}

export const useUserStore = create <UseStore>((set) => ({
    user: {
        username: "Admin_Analyst",
        role: "SOC Level 3 / Lead Hunter",
        clearance: "TOP_SECRET",
        
    }
}))