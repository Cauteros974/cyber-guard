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

            
        </div>
    )
}