import React from "react";
import { Activity, ShieldCheck, ShieldAlert, ShieldQuestion } from "lucide-react";

export const ProcessMonitor = () => {
    const process = [
        {name: "chrome.exe", trust: 98, status: "Trusted", icon: ShieldCheck, color: "#22c55e"},
        {name: "svchost.exe", trust: 100, status: "System", icon: ShieldCheck, color: "#3b82f6"},
        {name: "unknown_proc_88.tmp", trust: 42, status: "Unknown", icon: ShieldQuestion, color: "#94a3b8"},
        {name: "miner_script.js", trust: 12, status: "Risky", icon: ShieldAlert, color: "#f59e0b"},
    ];
    
    return(
        <div className="security-panel">
            <div className="panel-header">
                <Activity size={18} />
                <h3>LiveGrid Reputation Monitor</h3>
            </div>
            <div className="process-list">
                {processes.map((proc, i) => (
                    <div key={i} className="process-item">
                ))}
            </div>
        </div>
    )
}