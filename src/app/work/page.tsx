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
      <div className="flex flex-col gap-y-4">
        <h5 className="text-text-muted-light dark:text-text-muted-dark">Work</h5>
        <p>
          I primarily work with React/TypeScript. I also keep interest in the open source community
          and contribute to projects when I can.
        </p>
        <Projects />
      </div>
    </div>
  );
}
