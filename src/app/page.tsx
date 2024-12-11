import type { Metadata } from 'next';
import { Browse } from './_lib/Browse';
import { Socials } from './_lib/Socials';

export const metadata: Metadata = {
  title: 'Aquib Baig',
  description: 'Software Engineer',
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-2">
        <p>
          Aquib is a software engineer with a strong passion for creating things, while having keen
          attention to detail, quality, and craftsmanship.
        </p>
      </div>
      <div>
        <Browse />
        <Socials />
      </div>
    </div>
  );
}
