import { Metadata } from 'next';
import Head from 'next/head';
import { Projects } from '../_lib/Projects';

export const metadata: Metadata = {
  title: 'Work | Aquib Baig',
  description: 'Product Engineer',
};

export default function Work() {
  return (
    <div>
      <Head>
        <title>Work | Aquib Baig</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Projects />
    </div>
  );
}
