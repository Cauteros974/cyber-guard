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
                <button
                    onClick={addPolicy}
                    className="bg-accent hover:big-blue-600 text-white px-4 py-2 rounded-lg flex"
                >
                    <Plus size={18} /> Create Policy
                </button>
            </header>

            <div className="grid gap-14">
                {policies.map((policy) => (
                    <div key ={policy.id}className="bg-panel border border-slate-800 p-5 rounded-xl flex items-center justify-between group">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-800 rounded-full text-accent">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-200">{policy.name}</h3>
                                <p className="text-sm text-slate-500">{policy.description}</p>
                                <span className={`text-[10px] font-bold uppercase mt-1 px-2 py-0.5 rounded border border-slate-700 inline-block`}>
                                    Severity: {policy.severity}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Status</span>
                                <button className="text-green-500 hover:text-green-400">
                                    <Toggle size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}