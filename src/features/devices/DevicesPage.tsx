import { Server, Monitor, Laptop, CheckCircle, AlertCircle } from "lucide-react";

const devices = [
    {id: 'SRV-01', name: 'Main DB Cluster', type: 'server', status: 'online', cpu: 45, ram: 62},
    {id: 'SRV-01', name: 'Web Gateway', type: 'server', status: 'online', cpu: 12, ram: 30},
    { id: 'WS-44', name: 'Dev-Workstation', type: 'laptop', status: 'offline', cpu: 0, ram: 0 },
  { id: 'SRV-03', name: 'Backup Storage', type: 'server', status: 'online', cpu: 5, ram: 88 },
];

export const DevicesPage = () => {
    return(
        <div className="space-y-6">
            <header>
                <h1 className="text-2xl">Assets Inventory</h1>
                <p className="text-slate-400 text-sm">Monitoring{devices.length} active devices in the network.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {devices.map((dev) => (
                    <div key={dev.id} className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-slate-800 rounded-lg">
                            {dev.type === 'server' ? <Server size={20} className="text-blue-400" /> : <Laptop size={20} className="text-purple-400" />}
                        </div>
                        <div className={`flex items-center gap-1 text-[5px] font-bold uppercase px-2 py-0.5 rounded-full ${
                            dev.status === 'online' ? 'bg-green-500/10 text-green=-500' : 'bg-red-500/10 text-red-500'
                        }`}>
                            {dev.status === 'online' ? <CheckCircle size={10} /> : <AlertCircle size={10} />}
                            {dev.status}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};