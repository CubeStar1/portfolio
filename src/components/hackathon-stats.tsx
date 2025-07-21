import { StatsCard } from "./stats-card";

interface HackathonStatsProps {
  hackathons: ReadonlyArray<{
    readonly title: string;
    readonly description: string;
    readonly [key: string]: unknown;
  }>;
  className?: string;
}

export function HackathonStats({ hackathons, className }: HackathonStatsProps) {
  const awardsCount = 3

  const topFinishes = 6

  const biggestEvent = 4500

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4 py-6", className)}>
      <StatsCard
        title="Total"
        value={`${hackathons.length}`}
        description="Hackathons"
      />
      <StatsCard
        title="Won"
        value={awardsCount}
        description="Awards"
      />
      <StatsCard
        title="Finals"
        value={topFinishes}
        description="Finalists"
      />
      <StatsCard
        title="Biggest"
        value={biggestEvent || 'N/A'}
        description="Participants"
      />
    </div>
  );
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
