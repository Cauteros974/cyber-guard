import { useState } from "react";
import { ShieldCheck, Plus, Trash2, ToggleLeft as Toggle } from "lucide-react";
import { toast } from "sonner";

interface Policy {
    id: number;
    name: string;
    description: string;
    status: 'active' | 'disable';
    severity: string;
}

export const PoliciesPage = () => {
    const [policies, setPolicies] = useState<Policy[]>([
        { id: 1, name: 'Block Ransomware Extensions', description: 'Prevent execution of .encrypted files', status: 'active', severity: 'high'},
        { id: 1, name: 'SSH Brute Force Protection', description: 'Temporary ban IP after 5 failed attempts', status: 'active', severity: 'critical'},
    ]);

    const addPolicy = () => {
        toast.success('Policy configuration opened', {
            description: 'You can now define new security rules.'
        });
    };

    return(
        <div className="space-y-6">
            <header className="flex justify-content items-center">
                <div>
                    <h1 className="text-2xl font-bold">Security Policies</h1>
                </div>
            </header>
        </div>
    )
}