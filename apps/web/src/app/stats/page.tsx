import type { Metadata } from 'next';
import Head from 'next/head';
import { StatsDashboard } from './StatsDashboard';

export const metadata: Metadata = {
  title: 'Stats | Aquib Baig',
  description: 'Traffic stats for aquib.dev',
};

export default function StatsPage() {
  return (
    <div>
      <Head>
        <title>Stats | Aquib Baig</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StatsDashboard />
    </div>
  );
}
