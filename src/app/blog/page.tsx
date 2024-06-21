import dayjs from 'dayjs';
import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import Head from 'next/head';
import readingTime from 'reading-time';
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
        </div>
        <ul className="gap-2 flex flex-col">
          {posts.map((post) => (
            <li key={post.filePath} className="flex items-center gap-2">
              <Link
                href={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
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
              <span className="text-text-muted-light dark:text-text-muted-dark">
                {dayjs(post.data.date).year() < dayjs().year()
                  ? dayjs(post.data.date).format('MMMM D, YYYY')
                  : dayjs(post.data.date).format('MMMM D')}
              </span>
              <span className="text-text-muted-light dark:text-text-muted-dark bg-background-secondary-light dark:bg-background-secondary-dark px-2 rounded-md">
                {readingTime(post.content).text.replaceAll('read', '')}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
