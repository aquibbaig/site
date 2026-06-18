export type TrafficMetric = {
  totalVisitors: number;
  todayVisitors: number;
  weekVisitors: number;
};

export type TrafficTrendPoint = {
  date: string;
  visitors: number;
};

export type TrafficStats = TrafficMetric & {
  trend: TrafficTrendPoint[];
  updatedAt: string;
};

type HogQLResponse = {
  results?: unknown[][];
};

const DEFAULT_STATS: TrafficStats = {
  totalVisitors: 0,
  todayVisitors: 0,
  weekVisitors: 0,
  trend: [],
  updatedAt: new Date(0).toISOString(),
};

export async function getTrafficStats(): Promise<TrafficStats> {
  const projectId = process.env.POSTHOG_PROJECT_ID || process.env.NEXT_PUBLIC_POSTHOG_PROJECT_ID;
  const apiKey =
    process.env.POSTHOG_PERSONAL_API_KEY ||
    process.env.POSTHOG_API_KEY ||
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_KEY;

  if (!projectId || !apiKey) {
    return DEFAULT_STATS;
  }

  const [metrics, trend] = await Promise.all([
    queryPostHog({
      name: 'aquib.dev traffic metrics',
      query: `
        SELECT
          uniqExact(distinct_id) AS total_visitors,
          uniqExactIf(distinct_id, toDate(timestamp) = today()) AS today_visitors,
          uniqExactIf(distinct_id, timestamp >= today() - INTERVAL 6 DAY) AS week_visitors
        FROM events
        WHERE event = '$pageview'
          AND properties.$current_url ILIKE '%aquib.dev%'
      `,
    }),
    queryPostHog({
      name: 'aquib.dev daily visitor trend',
      query: `
        SELECT
          toDate(timestamp) AS day,
          uniqExact(distinct_id) AS visitors
        FROM events
        WHERE event = '$pageview'
          AND timestamp >= today() - INTERVAL 13 DAY
          AND properties.$current_url ILIKE '%aquib.dev%'
        GROUP BY day
        ORDER BY day ASC
      `,
    }),
  ]);

  const [totalVisitors = 0, todayVisitors = 0, weekVisitors = 0] = metrics.results?.[0] || [];

  return {
    totalVisitors: toNumber(totalVisitors),
    todayVisitors: toNumber(todayVisitors),
    weekVisitors: toNumber(weekVisitors),
    trend: normalizeTrend(trend.results),
    updatedAt: new Date().toISOString(),
  };
}

async function queryPostHog({ query, name }: { query: string; name: string }): Promise<HogQLResponse> {
  const projectId = process.env.POSTHOG_PROJECT_ID || process.env.NEXT_PUBLIC_POSTHOG_PROJECT_ID;
  const apiKey =
    process.env.POSTHOG_PERSONAL_API_KEY ||
    process.env.POSTHOG_API_KEY ||
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_KEY;
  const host = (
    process.env.POSTHOG_QUERY_HOST ||
    process.env.NEXT_PUBLIC_POSTHOG_HOST ||
    'https://app.posthog.com'
  ).replace(/\/$/, '');

  const response = await fetch(`${host}/api/projects/${projectId}/query/`, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      query: {
        kind: 'HogQLQuery',
        query,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`PostHog query failed with ${response.status}`);
  }

  return response.json();
}

function normalizeTrend(results: unknown[][] = []): TrafficTrendPoint[] {
  const pointsByDate = new Map(
    results.map(([date, visitors]) => [String(date), toNumber(visitors)] as const)
  );

  return Array.from({ length: 14 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (13 - index));

    const key = date.toISOString().slice(0, 10);

    return {
      date: key,
      visitors: pointsByDate.get(key) || 0,
    };
  });
}

function toNumber(value: unknown) {
  const number = Number(value);

  return Number.isFinite(number) ? number : 0;
}
