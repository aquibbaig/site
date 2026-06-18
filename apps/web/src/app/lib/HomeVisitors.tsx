'use client';

import type { TrafficStats } from '@/api/getTrafficStats';
import { ArrowRight } from 'lucide-react';
import { Link } from 'next-view-transitions';
import { useEffect, useState } from 'react';

export function HomeVisitors() {
  const [totalVisitors, setTotalVisitors] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch('/api/stats')
      .then((response) => response.json())
      .then((stats: TrafficStats) => {
        if (isMounted) {
          setTotalVisitors(stats.totalVisitors);
        }
      })
      .catch(() => {
        if (isMounted) {
          setTotalVisitors(0);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Link
      href="/stats"
      className="-mx-2 flex h-12 items-center justify-between gap-4 rounded-md px-2 hover:bg-accent"
    >
      <span className="text-sm md:text-[15px]">Visitors</span>
      <span className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="tabular-nums">
          {totalVisitors === null ? '...' : `#${new Intl.NumberFormat('en').format(totalVisitors)}`}
        </span>
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
