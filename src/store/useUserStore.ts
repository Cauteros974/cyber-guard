import { create } from "zustand";

interface UserProfile{
    username: string;
    role: string;
    clearance: string;
}

interface UserStore{
    user: UserProfile | null;
    fetchUser: () => Promise<void>
}