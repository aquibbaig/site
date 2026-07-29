import { getPostMetadata } from '@/helpers';
import { cn } from '@repo/ui/cn';
import { Separator } from '@repo/ui/components/Separator';
import { Link } from 'next-view-transitions';
import type { FC } from 'react';
import { BlogPostCard } from '../blog/page';

export const Craft: FC = () => {
  const { posts } = getPostMetadata({});

  const craft = posts.filter((post) => post.data.craft);

  if (!craft.length) return null;

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
      <Separator />
      <div>
        {craft.map((post) => {
          return (
            <BlogPostCard key={post.filePath} post={post} />
          );
        })}
      </div>
    </div>
  );
};
