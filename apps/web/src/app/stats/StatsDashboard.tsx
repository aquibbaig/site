'use client';

import type { TrafficStats } from '@/api/getTrafficStats';
import { useEffect, useMemo, useState } from 'react';

const DEFAULT_STATS: TrafficStats = {
  totalVisitors: 0,
  todayVisitors: 0,
  weekVisitors: 0,
  trend: [],
  updatedAt: new Date(0).toISOString(),
};

export function StatsDashboard() {
  const [stats, setStats] = useState<TrafficStats>(DEFAULT_STATS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetch('/api/stats')
      .then((response) => response.json())
      .then((data: TrafficStats) => {
        if (isMounted) {
          setStats(data);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const formattedUpdatedAt = useMemo(() => {
    if (stats.updatedAt === DEFAULT_STATS.updatedAt) return null;

    return new Intl.DateTimeFormat('en', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date(stats.updatedAt));
  }, [stats.updatedAt]);

  return (
    <div className="flex flex-col gap-8">
      <section className="rounded-lg border border-border p-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="mb-0 text-[2rem] font-semibold">Stats</h1>
            <p className="max-w-lg text-muted-foreground">
              A live overview of visitor traffic on aquib.dev, powered by PostHog.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <MetricCard label="Total visitors" value={stats.totalVisitors} isLoading={isLoading} />
            <MetricCard label="Today" value={stats.todayVisitors} isLoading={isLoading} />
            <MetricCard label="This week" value={stats.weekVisitors} isLoading={isLoading} />
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-border p-6">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="mb-1 text-lg font-medium">Daily Visitors</h2>
            <p className="text-sm text-muted-foreground">Unique visitors over the last 14 days.</p>
          </div>
          <TrendChart data={stats.trend} isLoading={isLoading} />
          {formattedUpdatedAt ? (
            <p className="text-xs text-muted-foreground">Updated {formattedUpdatedAt}</p>
          ) : null}
        </div>
      </section>
    </div>
  );
}

function MetricCard({
  label,
  value,
  isLoading,
}: {
  label: string;
  value: number;
  isLoading: boolean;
}) {
  return (
    <div className="rounded-lg border border-border p-4">
      <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-3 text-2xl font-medium tabular-nums">
        {isLoading ? '...' : formatNumber(value)}
      </div>
    </div>
  );
}

function TrendChart({ data, isLoading }: { data: TrafficStats['trend']; isLoading: boolean }) {
  const maxVisitors = Math.max(...data.map((point) => point.visitors), 1);

  if (isLoading) {
    return (
      <div className="flex h-52 items-end gap-2 border-b border-border">
        {Array.from({ length: 14 }, (_, index) => (
          <div
            key={index}
            className="min-w-0 flex-1 rounded-t bg-accent"
            style={{ height: `${24 + ((index % 5) + 1) * 10}%` }}
          />
        ))}
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="flex h-52 items-center justify-center rounded-lg border border-border text-sm text-muted-foreground">
        No traffic data available.
      </div>
    );
  }

  return (
    <div className="flex h-52 items-end gap-2 border-b border-border">
      {data.map((point) => (
        <div
          key={point.date}
          className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
        >
          <div
            className="w-full rounded-t bg-foreground transition-colors hover:bg-muted-foreground"
            style={{ height: point.visitors > 0 ? `${(point.visitors / maxVisitors) * 100}%` : 0 }}
            title={`${formatDate(point.date)}: ${formatNumber(point.visitors)} visitors`}
          />
          <span className="hidden whitespace-nowrap text-[10px] leading-none text-muted-foreground sm:block">
            {formatChartLabel(point.date, data)}
          </span>
        </div>
      ))}
    </div>
  );
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('en').format(value);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
  }).format(new Date(value));
}

function formatChartLabel(value: string, data: TrafficStats['trend']) {
  const date = new Date(value);
  const index = data.findIndex((point) => point.date === value);

  if (index === 0 || date.getUTCDate() === 1) {
    return new Intl.DateTimeFormat('en', {
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    }).format(date);
  }

  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
