import { getPostMetadata } from '@/helpers';
import { Separator } from '@repo/ui/components/Separator';
import Link from 'next/link';
import type { FC } from 'react';
import { BlogPostCard } from '../blog/page';

export const Craft: FC = () => {
  const { posts } = getPostMetadata({});

  const craft = posts.filter((post) => post.data.craft);

  if (!craft.length) return null;

  return (
    <div className="flex flex-col">
      <h5>Craft</h5>
      <Separator />
      <div>
        {craft.map((post) => {
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
