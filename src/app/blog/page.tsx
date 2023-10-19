import type { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { getPostMetadata } from '../../helpers';

export const metadata: Metadata = {
  title: 'Blog | Aquib Baig',
  description: 'Product Engineer',
};

export default function Blog() {
  const { posts } = getPostMetadata({
    limit: 10,
  });

  return (
    <div>
      <Head>
        <title>Posts | Aquib Baig</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
              className={twMerge(
                'hover:bg-background-secondary-light dark:hover:bg-background-secondary-dark',
                'px-3 py-1 -mx-3',
                'rounded-md',
                'flex truncate'
              )}
            >
              {post.data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
