import React, {useState, useEffect} from "react";
import { Search, FileText, CheckCircle, X, Zap } from 'lucide-react';
import './QuickScan.css';

interface QuickScanProps{
    isOpen: boolean;
    onClose: () => void;
}

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
        };
    }, [isOpen]);

    if(!isOpen) return null;

    return(
        <div className="scan-overlay">
            <div className="scan-modal">
                <button className="close-btn" onClick={onClose}><X size={12} /></button>

                {status === 'scanning' ? (
                    <div className="scan-process">
                        <div className="scan-header">
                            <div className="scan-icon-wrapper">
                                <Search className="scanning-icon" size={32} />
                            </div>
                            <h2>Quick System Scan</h2>
                            <p>Your system is clean and protected</p>
                        </div>
                        
                        <div className="progress-container">
                            <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                            </div>
                            <span className="progress-value">{progress}%</span>
                        </div>

                        <div className="file-display">
                            <FileText size={14} />
                            <span className="file-path">{currentFile}</span>
                        </div>

                        
                    </div>
                ) : (
                    <div className="scan-report animate-fade-in">
                        <div className="report-header">
                            <CheckCircle size={48} color="#22c55e" />
                            <h2>Scan Completed</h2>
                            <p>Your system is clean and protected.</p>
                        </div>
                        <div className="report-stats">
                            <div className="stat-item">
                                <span className="stat-label">Objects Scanned</span>
                                <span className="stat-value">1,248</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Threats Found</span>
                                <span className="stat-value clean">0</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Time Elapsed</span>
                                <span className="stat-value">00:12s</span>
                            </div>
                        </div>

                        <div className="report-footer">
                            <button className="btn-primary" onClick={onClose}>Done</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
