import { create } from "zustand";

interface UserProfile{
    username: string;
    role: string;
    clearance: string;
}

interface UserStore{
    user: UserProfile | null;
    fetchUser: () => Promise<void>
<<<<<<< Updated upstream
}
=======
}

export const useUserStore = create<UserStore>((set)=> ({
    user: null,
    fetchUser: async() => {
        const response = await fetch('http://127.0.0.1:8010/user/me'); //Don't forget about your port
        const data = await response.json();
        set({ user: data});
    }
}));
>>>>>>> Stashed changes
