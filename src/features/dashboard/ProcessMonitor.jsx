import React from "react";
import { Activity, ShieldCheck, ShieldAlert, ShieldQuestion } from "lucide-react";

export const ProcessMonitor = () => {
    const process = [
        {name: "chrome.exe", trust: 98, status: "Trusted", icon: ShieldCheck, color: "#22c55e"},
        {name: "svchost.exe", trust: 100,},
        {name: "unknown_proc_88.tmp", trust: 42,},
        {name: "miner_script.js", trust: 12,},
    ];
}