import { CraftSvg } from '@/assets/craft.svg';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import Head from 'next/head';
import { twMerge } from 'tailwind-merge';
import { getPostMetadata } from '../../helpers';

dayjs.extend(relativeTime);

export const metadata: Metadata = {
  title: 'Blog | Aquib Baig',
  description: 'Software Engineer',
};

export default function Blog() {
  const { posts } = getPostMetadata({
    limit: 10,
  });

  const [first, ...rest] = posts;

  return (
    <div className="flex flex-col gap-16">
      <Head>
        <title>Blog | Aquib Baig</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col gap-6">
        <div className="text-muted-foreground">
          {`"A collection of technical walkthroughs and some interesting realizations."`}
        </div>
        <div className="flex flex-col gap-6">
          <Link href={`/blog/${first?.filePath.replace(/\.mdx?$/, '')}`}>
            <BlogPostCard post={first!} />
          </Link>
          <div className="flex flex-row items-center gap-6">
            <h4 className="text-muted-foreground">Older</h4>
            <div className="border-t w-full border-border"></div>
          </div>
          {rest.map((post) => {
            return (
              <div key={post.filePath}>
                <Link href={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}>
                  <BlogPostCard post={post} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const BlogPostCard = ({
  post,
  className,
}: {
  post: ReturnType<typeof getPostMetadata>['posts'][number];
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        'p-3 lg:-mx-3',
        'rounded-lg',
        'flex truncate flex-wrap',
        'flex flex-col hover:bg-accent',
        'transition-colors duration-200 cursor-default',
        className
      )}
    >
      <p className="text-foreground">{post.data.title}</p>
      <div className="flex flex-row items-center gap-2">
        {post.data.craft && (
          <>
            <CraftSvg className="size-4 text-craft -mt-0.5" aria-label="craft" />
            <span className="text-muted-foreground">•</span>
          </>
        )}
        <span className="text-muted-foreground">
          {dayjs(post.data.publishedOn).fromNow()}
        </span>
      </div>
    </div>
  );
};
