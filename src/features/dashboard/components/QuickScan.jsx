import React, {useState, useEffect} from "react";
import { ShieldCheck, Search, Loader2, FileText, AlertTriangle, CheckCircle, X } from 'lucide-react';
import './QuickScan.css';

export const QuickScan = ({isOpen, onClose}) => {
    const [status, setStatus] = useState('scanning'); // 'scanning' | 'finished'
    const [progress, setProgress] = useState(0);
    const [currentFile, setCurrentFile] = useState('');

    const fakeFile = [
        'C:/System32/drivers/etc/hosts',
        'C:/Users/Admin/AppData/Local/Temp/tmp882.sys',
        'C:/Windows/System32/kernel32.dll',
        'C:/Program Files/CyberGuard/engine.db',
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
            })
        })
    })
}
