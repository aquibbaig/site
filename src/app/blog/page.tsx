import type { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { getPostMetadata } from '../../helpers';
import { externalLinkCSS } from '../_lib/helpers';

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
        <title>Blog | Aquib Baig</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h5 className="text-text-muted-light dark:text-text-muted-dark">Blog</h5>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
              className={twMerge(
                'px-3 py-1 -mx-3',
                'rounded-md',
                'flex truncate',
                externalLinkCSS,
                'cursor-pointer'
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
