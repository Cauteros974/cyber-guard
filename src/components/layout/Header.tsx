import { Bell } from 'lucide-react';
import { useIncidentStore } from '../../store/useIncidentStore';
import { useStore } from '../../store/useStore';
import './Layout.css';

export const Header = () => {
  const incidents = useIncidentStore((state) => state.incidents);
  const activeCount = incidents.filter(i => i.status === 'open').length;

  const hasCritical = incidents.some(inc => inc.severity === 'critical' && inc.status === 'open');


  return (
    <header className="h-16 border-b border-slate-800 flex items-center justify-end px-8 gap-4 bg-slate-950/50 backdrop-blur-md sticky top-0 z-20">
      <div className="header-left">
        <div className="system-status">
          <span className={`status-dot ${hasCritical ? 'danger' : 'healthy'}`}></span>
          <span className="status-text">
            {hasCritical ? 'System Under Attack' : 'System Secure'}
          </span>
        </div>
      </div>
      <div className="relative p-2 hover:bg-slate-800 rounded-full cursor-pointer transition-colors">
        <Bell size={20} className="text-slate-400" />
        {activeCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-slate-950">
            {activeCount}
          </span>
        )}
      </div>
      <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
        <div className="text-right">
          <p className="text-xs font-bold text-slate-200">Admin_Analyst</p>
          <p className="text-[10px] text-green-500 font-mono">SOC_LEVEL_3</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 border border-slate-700" />
      </div>
    </header>
  );
};