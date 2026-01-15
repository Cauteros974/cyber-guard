import { type LucideIcon } from "lucide-react";
import "./StatCard.css";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
}

export const StatCard = ({
  title,
  value,
  icon: Icon,
  color,
}: StatCardProps) => {
  return (
    <div className="stat-card">
      <div
        className="stat-icon-wrapper"
        style={color ? { backgroundColor: `${color}22` } : undefined}
      >
        <Icon
          className="stat-icon"
          style={color ? { color } : undefined}
        />
      </div>

      <div className="stat-content">
        <p className="stat-label">{title}</p>
        <p className="stat-value">{value}</p>
      </div>
    </div>
  );
};