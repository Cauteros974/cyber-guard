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