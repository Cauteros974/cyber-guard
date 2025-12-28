import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    color: string;
}

export const StatCard = ({ title, value, icon: Icon, color }: StatCardProps) => (
    <div className="bg-panel p-6 rounded-xl border border-state-800 flex items-center gap-5">
        <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
            <Icon className={color.replace('bg-', 'text-')} size={20}/>
        </div>
    </div>
)