import React, {useState, useEffect} from "react";
import { ShieldCheck, Search, Loader2, FileText, AlertTriangle, CheckCircle, X } from 'lucide-react';
import './QuickScan.css';

export const QuickScan = ({isOpen, onClose}) => {
    const [status, setStatus] = useState('scanning'); // 'scanning' | 'finished'
    const [progress, setProgress] = useState(0);
    const [currentFile, setCurrentFile] = useState('');

    useEffect(() => {
        if(!isOpen) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if(prev >= 100){
                    clearInterval(interval);
                    setStatus('finishes');
                    return 100;
                }
            })
        })
    })
}
