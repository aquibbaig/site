import { Projects } from '@/app/lib/Projects';
import { type Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Projects | Aquib Baig',
  description: 'Projects by Aquib Baig',
};

export default function ProjectsPage() {
  return (
    <div>
      <Head>
        <title>Projects | Aquib Baig</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col gap-y-4">
        <p className="text-muted-foreground">
          A small collection of products, tools, and experiments I have worked on.
        </p>
        <Projects />
      </div>
    </div>
  );
}
