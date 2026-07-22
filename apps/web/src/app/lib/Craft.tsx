import { POST_PREVIEW_LIMIT } from '@/constants';
import { getPostMetadata } from '@/helpers';
import { cn } from '@repo/ui/cn';
import { Link } from 'next-view-transitions';
import type { FC } from 'react';
import { BlogPostCard } from '../blog/page';

export const Craft: FC = () => {
  const { posts } = getPostMetadata({ limit: POST_PREVIEW_LIMIT });

  if (!posts.length) return null;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-4">
        <h5 className="font-medium text-sm">Writing</h5>
        <Link
          href="/blog"
          className={cn(
            'group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground',
            'border border-border rounded-md px-1.5 py-0.5 text-xs hover:bg-secondary'
          )}
        >
          View all
        </Link>
      </div>
      <div>
        {posts.map((post) => {
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
  );
};
