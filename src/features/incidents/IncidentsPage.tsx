import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table';
import { useIncidentStore } from '../../store/useIncidentStore';
import { type Incident } from '../../types/incident';
import './Incidents.css';

const columnHelper = createColumnHelper<Incident>();

export const IncidentsPage = () => {
  const { incidents, searchQuery } = useIncidentStore();
  const navigate = useNavigate();

  const filteredData = useMemo(() => {
    return incidents.filter((inc) =>
      inc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inc.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [incidents, searchQuery]);

  const filteredIncidents = useMemo(() => {
    if (!searchQuery.trim()) return incidents;

    const q = searchQuery.toLocaleLowerCase();

    return incidents.filter((inc) => 
        inc.id.toLowerCase().includes(q) ||
        inc.title.toLowerCase().includes(q) ||
        inc.tactic.toLocaleLowerCase().includes(q) ||
        inc.technique.toLocaleLowerCase().includes(q) ||
        inc.source.toLocaleLowerCase().includes(q)
    );
  }, [incidents, searchQuery]);

  const columns = useMemo(() => [
    columnHelper.accessor('id', { header: 'ID' }),
    columnHelper.accessor('severity', { header: 'Severity' }),
    columnHelper.accessor('title', {
      header: 'Title',
      cell: (info) => (
        <button
          className="incident-title-link"
          onClick={() => navigate(`/incidents/${info.row.original.id}`)}
        >
          {info.getValue()}
        </button>
      ),
    }),
    columnHelper.accessor('status', { header: 'Status' }),
    columnHelper.accessor('timestamp', {
      header: 'Detected',
      cell: (info) => new Date(info.getValue()).toLocaleString(),
    }),
  ], [navigate]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="incidents-table">
      <thead>
        {table.getHeaderGroups().map((hg) => (
          <tr key={hg.id}>
            {hg.headers.map((h) => (
              <th key={h.id}>
                {flexRender(h.column.columnDef.header, h.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
