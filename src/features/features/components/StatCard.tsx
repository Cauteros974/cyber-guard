import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    color: string;
}

export const StartCard = ({title, value, icon: Icon, color} )