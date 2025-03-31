
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
}

export const StatCard = ({ title, value, change, icon, className }: StatCardProps) => {
  const isPositive = change && change > 0;
  
  return (
    <Card className={cn("stat-card", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        {icon && <div className="text-finance-blue">{icon}</div>}
      </div>
      
      {typeof change !== 'undefined' && (
        <div className="flex items-center mt-3">
          {isPositive ? (
            <TrendingUp className="h-4 w-4 text-finance-green mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 text-finance-red mr-1" />
          )}
          <span
            className={cn(
              "text-xs font-medium",
              isPositive ? "text-finance-green" : "text-finance-red"
            )}
          >
            {isPositive ? "+" : ""}{change}%
          </span>
        </div>
      )}
    </Card>
  );
};
