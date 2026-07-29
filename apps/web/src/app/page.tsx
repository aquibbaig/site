import type { Metadata } from 'next';
import { CraftSvg } from '@/assets/craft.svg';
import { githubLink } from '@/constants';
import { getPostMetadata } from '@/helpers';
import { Link } from 'next-view-transitions';
import { getWritingHighlight } from './lib/writingHighlights';

export const metadata: Metadata = {
  title: 'Aquib Baig',
  description: 'Software Engineer',
};

export default function Home() {
  const { posts } = getPostMetadata({ limit: 5 });

  return (
    <div className="flex flex-col gap-10">
      <p className="max-w-lg text-muted-foreground">
        Software engineer with a passion for creating thoughtful, well-crafted products.
      </p>

      <section aria-labelledby="writing-heading">
        <div className="mb-5 flex items-center gap-4">
          <h2 id="writing-heading" className="mb-0 text-sm font-medium">
            Writing
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <ol className="flex flex-col gap-4">
          {posts.map((post) => (
            <li key={post.filePath} className="grid grid-cols-[3rem_1fr] items-baseline gap-4">
              <time className="text-sm tabular-nums text-muted-foreground">
                {new Date(post.data.publishedOn).getFullYear()}
              </time>
              <div className="flex items-center gap-2">
                <Link
                  href={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                  className="group w-fit font-medium leading-snug"
                >
                  <span
                    className={`box-decoration-clone rounded-sm px-1 py-0.5 transition-colors ${getWritingHighlight(post.filePath)}`}
                  >
                    {post.data.title}
                  </span>
                </Link>
                {post.data.craft ? (
                  <CraftSvg className="size-4 shrink-0 text-craft" aria-label="Craft article" />
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <nav aria-label="Site links">
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {siteLinks.map(({ href, label, external }) => (
            <li key={href}>
              {external ? (
                <a className="external-link" href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              ) : (
                <Link className="external-link" href={href}>
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

const siteLinks = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/colophon', label: 'Colophon' },
  { href: githubLink, label: 'GitHub', external: true },
];
