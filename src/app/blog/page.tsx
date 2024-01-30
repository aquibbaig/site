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
      <div className="flex flex-col gap-y-4">
        <h5 className="text-text-muted-light dark:text-text-muted-dark">Blog</h5>
        <div>
          <p>
            My articles are an intersection of things built on the internet, awesome tools and
            technologies, and things I am proud of. I talk about solving tricky problems, planning
            how to make cool software, and the steps I take to make it all happen. It is not just
            writing code – I also share stories about things I have learned and moments that make me
            think.
          </p>
          <p className="text-text-muted-light dark:text-text-muted-dark">
            I believe in doing things my way, not just following what everyone else is doing. So, my
            articles are like paintings on a wall, telling a story about the big world of tech,
            creativity, and how we all grow in our own unique ways.
          </p>
        </div>
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
    </div>
  );
}
