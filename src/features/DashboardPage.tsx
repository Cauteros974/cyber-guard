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
                <StatCard title="Active Incidents" value={12} icon={ShieldAlert} color="text-red-500 bg-red-500" />
                <StatCard title="Critical Threats" value={3} icon={Zap} color="text-orange-500 bg-orange-500" />
                <StatCard title="Devices Online" value="1,240" icon={Monitor} color="text-blue-500 bg-blue-500" />
                <StatCard title="Policy Compliance" value="98.2%" icon={ShieldCheck} color="text-green-500 bg-green-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/*Main Chart*/}
                <div className="lg:col-span-2">
                    <ActivityChart />
                </div>

                {/* Activity Feed (Quick list) */}
                <div className="bg-panel p-6 rounded-xl border border-slate-800">
                    <h3 className="text-lg font-semibold mb-4">Latest Events</h3>
                    <div className="space-y-4">
                        {[1,2,3,4].map((i) => (
                            <div key={i} className="flex gap-3 text-sm border-b border-slate-800 pb-3 last:border-0">
                                <div className="w-2 rounded-full bg-accent mt-1.5" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}