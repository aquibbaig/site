import { getPostMetadata } from '@/helpers';
import Link from 'next/link';
import { BlogPostCard } from '../page';

export const HighlightedPost = () => {
  const { posts } = getPostMetadata({
    limit: 1,
  });

  const [first] = posts;

  return (
    <div className="flex flex-col">
      <h4>Latest article</h4>
      <Link href={`/blog/${first.filePath.replace(/\.mdx?$/, '')}`}>
        <BlogPostCard post={first} />
      </Link>
    </div>
  );
};
