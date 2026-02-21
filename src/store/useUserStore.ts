import { create } from "zustand";

interface UserProfile{
    username: string;
    role: string;
    clearance: string;
    stat: {
        resolved_incidents: number;
        active_investigations: number;
    };
}

interface UserStore{
    user: UserProfile | null;
    fetchUser: () => Promise<void>
}

export const useUserStore = create<UserStore>((set)=> ({
    user: null,
    fetchUser: async() => {
        const response = await fetch('http://127.0.0.1:8002/user/me'); //Don't forget about your port
        const data = await response.json();
        set({ user: data});
    }
}));