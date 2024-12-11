import { Metadata } from 'next';
import Head from 'next/head';
import { Projects } from '../_lib/Projects';

export const metadata: Metadata = {
  title: 'Projects | Aquib Baig',
  description: 'Software Engineer',
};

export default function ProjectsPage() {
  return (
    <div>
      <Head>
        <title>Projects | Aquib Baig</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col gap-y-4">
        <h5 className="text-text-muted-light dark:text-text-muted-dark">Projects</h5>
        <p>
          I primarily work with React/TypeScript. I work closely with designers and product managers
          to build products that are scalable, maintainable, and delightful to use.
        </p>
        <Projects />
      </div>
    </div>
  );
}
