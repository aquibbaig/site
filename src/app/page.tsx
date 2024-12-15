import type { Metadata } from 'next';
import { Browse } from './_lib/Browse';
import { Projects } from './_lib/Projects';
import { HighlightedPost } from './blog/lib/HighlightedPost';

export const metadata: Metadata = {
  title: 'Aquib Baig',
  description: 'Software Engineer',
};

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p>
          Aquib is a software engineer with a strong passion for creating things, while having keen
          attention to detail, quality, and craftsmanship.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <HighlightedPost />
        <Projects />
        <Browse />
      </div>
    </div>
  );
}
