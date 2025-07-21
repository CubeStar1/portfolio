import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
  className?: string;
}

export function StatsCard({
  title,
  value,
  description,
  className,
  ...props
}: StatsCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col p-4 rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    >
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-semibold leading-none tracking-tight p-2">
        {value}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </div>
  );
}
