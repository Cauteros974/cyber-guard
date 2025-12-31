import { useMemo } from "react";
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table'
import { useIncidentStore } from "../../store/useIncidentStore";
import { type Incident } from "../../types/incident";
import { SeverityBadge } from "./components/SeverityBadge";
import { Info } from "lucide-react";


const columnHelper = createColumnHelper<Incident>();

export const IncidentsPage = () => {
    const {incidents} = useIncidentStore();

    const columns = useMemo(() => [
        columnHelper.accessor('id', { header: 'ID', cell: info => <span className="text-slate-500 font-mono">{info.getValue()}</span> }),
        columnHelper.accessor('severity', {
            header: 'Severity',
            cell: info => <SeverityBadge level={info.getValue()} />
        }),
        columnHelper.accessor('title', {header: 'Incident Title'}),
        columnHelper.accessor('tactic', {header: 'Tactic'}),
        columnHelper.accessor('status', { 
            header: 'Status',
            cell: info => <span className="capitalize text-slate-400">{info.getValue().replace('-', ' ')}</span>
        }),
        columnHelper.accessor('timestamp', {
            header: 'Detected',
            cell: info => new Date(info.getValue()).toLocaleString()
        }),
    ], []);

    const table = useReactTable({
        data: incidents,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return(
        <div className="space-y-6">
            <header className="flex justify-berween items-center">
                <div>
                    <h1 className="text-2xl font-bold">Incidents Log</h1>
                </div>
                <button className="bg-accent hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-all">
                    Export Report
                </button>
            </header>

            <div className="bg-panel rounded-xl border border-slate-800 overflow-hidden">
                <table className="w-full text-left border-collaps">
                    <thead className="bg-slate-800/50">
                        {table.getHeaderGroups().map(headerGroup => (
                            
                        ))}
                    </thead>
                </table>
            </div>
        </div>
    )
};