import { ShieldCheck, Target, Award, Clock } from "lucide-react";
import { useUserStore } from "../../../store/useUserStore";

export const ProfilePage = () => {
    const {user} = useUserStore();

    if(!user) return <div>Loading access credentials...</div>;
}