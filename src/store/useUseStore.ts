import { create } from "zustand";

interface UserProfile{
    username: string;
    role: string;
    classname: string;
    stats: {
        resolved_incidents: number;
        active_investigations: number;
    };
}

interface UseStore{
    user: UserProfile | null;
    fetchUser: () => Promise<void>;
}

export const useUserStore = create <UseStore>((set) => ({
    user: null,
    fetchUser: async () => {
        const response = await fetch('http://127.0.0.1:8010/user/me'); //Write your port
        const data = await response.json();
        set({ user: data });
    }
}))