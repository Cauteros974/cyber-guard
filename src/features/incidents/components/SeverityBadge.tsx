import { type Severity } from '../../../types/incident';

const styles: Record<Severity, string> = {
  critical: "bg-red-500/10 text-red-500 border-red-500/20",
  high: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  medium: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  low: "bg-green-500/10 text-green-500 border-green-500/20",
};

export const SeverityBadge = ({ level }: { level: Severity }) => (
  <span className={`px-2 py-1 rounded border text-[10px] font-bold uppercase ${styles[level]}`}>
    {level}
  </span>
);