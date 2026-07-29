import { CraftSvg } from '@/assets/craft.svg';
import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import { getPostMetadata } from '../../helpers';
import { getWritingHighlight } from '../lib/writingHighlights';

export const metadata: Metadata = {
  title: 'Blog | Aquib Baig',
  description: 'Software Engineer',
};

export default function Blog() {
  const { posts } = getPostMetadata({
    limit: 10,
  });

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-8">
        <div className="text-muted-foreground">
          {`"A collection of technical walkthroughs and some interesting realizations."`}
        </div>
        <section aria-labelledby="writing-heading">
          <div className="mb-5 flex items-center gap-4">
            <h2 id="writing-heading" className="text-sm font-medium">
              Writing
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <ol className="flex flex-col gap-4">
            {posts.map((post) => (
              <BlogPostCard key={post.filePath} post={post} />
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

export const BlogPostCard = ({
  post,
}: {
  post: ReturnType<typeof getPostMetadata>['posts'][number];
}) => {
  return (
    <li className="grid grid-cols-[3rem_1fr] items-baseline gap-4">
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
  );
};
