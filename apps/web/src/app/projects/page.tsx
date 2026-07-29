import { Projects } from '@/app/lib/Projects';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Aquib Baig',
  description: 'Projects by Aquib Baig',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-8">
        <p className="text-muted-foreground">
          A small collection of products, tools, and experiments I have worked on.
        </p>
        <Projects />
      </div>
    </div>
  );
}
