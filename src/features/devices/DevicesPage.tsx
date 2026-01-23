import { Server, Laptop, CheckCircle, AlertCircle, Cpu, MemoryStick } from "lucide-react";
import './DevicesPage.css';

const devices = [
    {id: 'SRV-01', name: 'Main DB Cluster', type: 'server', status: 'online', cpu: 45, ram: 62},
    {id: 'SRV-01', name: 'Web Gateway', type: 'server', status: 'online', cpu: 12, ram: 30},
    { id: 'WS-44', name: 'Dev-Workstation', type: 'laptop', status: 'offline', cpu: 0, ram: 0 },
    { id: 'SRV-03', name: 'Backup Storage', type: 'server', status: 'online', cpu: 5, ram: 88 },
];

export const DevicesPage = () => {
    return (
      <div className="space-y-6">
        <header>
          <h1 className="text-assets">Assets Inventory</h1>
          <p className="text-monitoring">Monitoring {devices.length} active devices in the network.</p>
        </header>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {devices.map((dev) => {
            const isOnline = dev.status === "online";

            return(
              <div
                key={dev.id}
                className={`device-card ${!isOnline ? "device-offline" : ""}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="icon-wrapper">
                    {dev.type === "server" ? (
                      <Server size={20} />
                    ) : (
                      <Laptop size={20} />
                    )}
                  </div>

                  <div
                  className={`status-badge ${
                    isOnline ? "online" : "offline"
                  }`}
                  >
                    {isOnline ? (
                      <CheckCircle size={14} />
                    ) : (
                      <AlertCircle size={14} />
                    )}
                    {dev.status}
                  </div>
                </div>

                <h3 className="device-title">{dev.name}</h3>
                <p className="device-id">{dev.id}</p>

                <div className="space-y-3 mt-4">
                  <div className="metric">
                    <div className="metric-header">
                      <span className="metric-labe">
                        <Cpu size={15} /> CPU
                      </span>
                      <span>{dev.cpu}%</span>
                    </div>
                    <div className="metric-bar">
                      <div className="metric-fill"
                        style={{ width: isOnline ? `${dev.cpu}%` : "0%"}}
                      />
                    </div>
                  </div>

                  <div className="mertic">
                    <div className="metric-header">
                      <span className="metric-label">
                        <MemoryStick size={12}/> RAM
                      </span>
                      <span>{dev.ram}</span>
                    </div>
                    <div className="metric-bar">
                      <div
                        className="metric-fill ram"
                        style={{ width: isOnline ? `${dev.ram}%` : "0%"}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
};