import { ShieldAlert, Zap, Monitor, ShieldCheck } from "lucide-react";
import { StatCard } from "./dashboard/components/StatCard";
import { ActivityChart } from "./dashboard/components/ActivityChart";

export const DashboardPage = () => {
    return(
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl font-bold">Security Overview</h1>
                <p className="text-slate-400">Real-time threat monitoring and system health.</p>
            </header>

            {/*Cards*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Active Incidents" value={11} icon={ShieldCheck} color="text-red-500 bg-red-500" />
            </div>
        </div>
    )
}