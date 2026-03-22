import React, {useState, useEffect} from "react";
import { ShieldCheck, Search, Loader2, FileText, AlertTriangle, CheckCircle, X } from 'lucide-react';
import './QuickScan.css';

export const QuickScan = ({isOpen, onClose}) => {
    const [status, setStatus] = useState('scanning');
    const [progress, setProgress] = useState(0);
}