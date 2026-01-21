import { useMemo } from "react";
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table'
import { useIncidentStore } from "../../store/useIncidentStore";
import { type Incident } from "../../types/incident";
import { SeverityBadge } from "./components/SeverityBadge";
import { useParams, useNavigate } from "react-router-dom";
import './Incidents.css';

const columnHelper = createColumnHelper<Incident>();
const { incidents, searchQuery} = useIncidentStore();

export const IncidentsPage = () => {
    const { incidents } = useIncidentStore();
    const navigate = useNavigate();

    const columns = useMemo(() => [
        columnHelper.accessor('id', { 
            header: 'ID', 
            cell: info => <span className="id-text">{info.getValue()}</span> 
        }),
        columnHelper.accessor('severity', {
            header: 'Severity',
            cell: info => <SeverityBadge level={info.getValue()} />
        }),
        columnHelper.accessor('title', {
            header: 'Incident Title',
            cell: info => (
                <button
                    onClick={() => navigate(`/incidents/${info.row.original.id}`)}
                    className="incident-title-link"
                >
                    {info.getValue()}
                </button>
            )
        }),
        columnHelper.accessor('tactic', { header: 'Tactic' }),
        columnHelper.accessor('status', { 
            header: 'Status',
            cell: info => <span className="status-text">{info.getValue().replace('-', ' ')}</span>
        }),
        columnHelper.accessor('timestamp', {
            header: 'Detected',
            cell: info => <span className="timestamp-text">{new Date(info.getValue()).toLocaleString()}</span>
        }),
    ], [navigate]);

    const table = useReactTable({
        data: incidents,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const filteredData = useMemo(() => {
        return incidents.filter( inc => 
            inc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            inc.id.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [incidents, searchQuery])

    return (
        <div className="incidents-page">
            <header className="page-header">
                <div className="header-info">
                    <h1 className="page-title">Incidents Log</h1>
                    <p className="page-description">Detailed history of all security events.</p>
                </div>
                <button className="btn-primary" onClick={() => window.print()}>
                    Export Report
                </button>
            </header>

            <div className="table-container">
                <table className="incidents-table">
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className="table-header-cell">
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className="table-row">
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="table-cell">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};