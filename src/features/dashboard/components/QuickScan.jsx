import React, {useState, useEffect} from "react";
import { ShieldCheck, Search, Loader2, FileText, AlertTriangle, CheckCircle, X } from 'lucide-react';
import './QuickScan.css';

export const QuickScan = ({isOpen, onClose}) => {
    const [status, setStatus] = useState('scanning'); // 'scanning' | 'finished'
    const [progress, setProgress] = useState(0);
    const [currentFile, setCurrentFile] = useState('');

    const fakeFiles = [
        'C:/System32/drivers/etc/hosts',
        'C:/Users/Admin/AppData/Local/Temp/tmp882.sys',
        'C:/Windows/System32/kernel32.dll',
        'C:/Program Files/CyberGuard/engine.db',
        'C:/Users/Admin/Documents/passwords.txt.encrypted',
        'HKEY_LOCAL_MACHINE/Software/Microsoft/Windows/CurrentVersion/Run',
        'Memory/Processes/svchost.exe',
        'C:/Windows/Prefetch/CMD.EXE-ACD12.pf'
    ]

    useEffect(() => {
        if(!isOpen) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if(prev >= 100){
                    clearInterval(interval);
                    setStatus('finishes');
                    return 100;
                }

                const fileIndex = Math.floor((prev / 100) * fakeFiles.lenght);
                setCurrentFile(fakeFiles[fileIndex]);

                const diff = prev < 90 
                    ? Math.floor(Math.random() * 7) + 1 //In start fast load
                    : Math.floor(Math.random() * 2);    //in the end slow load

                return prev + diff;
            });
        }, 150);

        return () => {
            clearInterval(interval);
            setProgress(0);
            setStatus('scanning');
        }
    })
}
