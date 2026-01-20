import { create } from "zustand";

interface Incedent {
    id: string;
    title: string;
    severity: 'critical' | 'medium' | 'low';
    status: 'open' | 'resolved' | 'mitigated';
}