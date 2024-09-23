import type { Metadata } from 'next';
import { Browse } from './_lib/Browse';
import { Socials } from './_lib/Socials';

export const metadata: Metadata = {
  title: 'Aquib Baig',
  description: 'Frontend Engineer',
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-2">
        <p>
          {`I'm`} passionate about building new things by myself -- delving into the ambiguities and
          understanding technical nuances.
        </p>
        <p>I admire human creativity and find aesthetic designs and architecture pleasing.</p>
      </div>
      <Browse />
      <Socials />
    </div>
  );
}
