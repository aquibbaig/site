import type { Metadata } from 'next';
import { Browse } from './lib/Browse';
import { Craft } from './lib/Craft';
import { Projects } from './lib/Projects';
import { RecentTracks } from './lib/RecentTracks';

export const metadata: Metadata = {
  title: 'Aquib Baig',
  description: 'Software Engineer',
};

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-text-secondary-light dark:text-text-secondary-dark">
          Aquib is a software engineer with a strong passion for creating things, while having keen
          attention to detail, quality, and craftsmanship.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <Projects />
        <Craft />
        <RecentTracks />
        <Browse />
      </div>
    </div>
  );
}
