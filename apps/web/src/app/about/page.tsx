import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Aquib Baig',
  description: 'Software Engineer',
};

export default function About() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4" aria-labelledby="about-heading">
        <div className="flex items-center gap-4">
          <h1 id="about-heading" className="text-sm font-medium">
            About
          </h1>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
          <p>
            I’m a software engineer who enjoys turning complex ideas into thoughtful, dependable
            products. I care about the details that make software feel clear and considered—from
            its architecture and performance to the way it looks and responds in someone’s hands.
          </p>
          <p>
            Away from the screen, I’m drawn to monochrome photography, architecture, music, and
            travelling. I enjoy observing how light, structure, sound, and place shape the way we
            experience the world; those interests often find their way back into how I approach
            design and engineering.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-3" aria-labelledby="experience-heading">
        <div className="flex items-center gap-4">
          <h2 id="experience-heading" className="text-sm font-medium">
            Experience
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p>
          Senior Software Engineer at{' '}
          <a href="https://www.coderabbit.ai/" target="_blank" className="external-link">
            CodeRabbit
          </a>
          .
        </p>
      </section>
    </div>
  );
}
