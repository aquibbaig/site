import type { Metadata } from 'next';
import { Browse } from './_lib/Browse';
import { Socials } from './_lib/Socials';

export const metadata: Metadata = {
  title: 'Aquib Baig',
  description: 'Frontend Engineer',
};

export default function Home() {
  return (
    <>
      <p>
        I embrace minimalism in both art and infrastructure, striving to convey more with less. My
        focus lies in user flow, interaction, and experience, as I navigate a journey to discover my
        own creative path, steering clear of overwhelming trends to find peace and strength in my
        work.
      </p>
      <Browse />
      <Socials />
    </>
  );
}
