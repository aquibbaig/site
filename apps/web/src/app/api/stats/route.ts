import { getTrafficStats } from '@/api/getTrafficStats';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const stats = await getTrafficStats();

    return NextResponse.json(stats, {
      headers: {
        'Cache-Control': 's-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch {
    return NextResponse.json(
      {
        totalVisitors: 0,
        todayVisitors: 0,
        weekVisitors: 0,
        trend: [],
        updatedAt: new Date(0).toISOString(),
      },
      { status: 200 }
    );
  }
}
