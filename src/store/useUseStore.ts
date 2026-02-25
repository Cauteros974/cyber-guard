import { create } from "zustand";

interface UseProfileStore{
    username: string;
    role: string;
    classname: string;
    stats: {
        resolved_incidents: number;
        active_investigations: number;
    };
}