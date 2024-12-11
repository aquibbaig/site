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
          Aquib is a software engineer with a strong passion for building things, while having
          attention to detailing, quality and craftmanship.
        </p>
      </div>
      <div>
        <Browse />
        <Socials />
      </div>
    </div>
  );
}
