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
        <div className="text-text-muted-light dark:text-text-muted-dark">
          {`"A collection of technical walkthroughs and some interesting realizations."`}
        </div>
        <div className="flex flex-col gap-6">
          <Link
            href={`/blog/${first.filePath.replace(/\.mdx?$/, '')}`}
            className={twMerge(
              'p-3 lg:-mx-3',
              'rounded-lg',
              'flex truncate',
              'cursor-pointer',
              'flex flex-col hover:bg-background-secondary-light dark:hover:bg-background-secondary-dark',
              'transition-colors duration-200'
            )}
          >
            <div className="text-text-primary-light dark:text-text-primary-dark">
              {first.data.title}
            </div>
            <div className="flex flex-row items-center gap-4">
              <span className="text-text-muted-light dark:text-text-muted-dark">
                {dayjs(first.data.publishedOn).fromNow()}
              </span>
            </div>
          </Link>
          <div className="flex flex-row items-center gap-6">
            <h4 className="text-text-muted-light dark:text-text-muted-dark">Older</h4>
            <div className="border-t w-full border-border-primary-light dark:border-border-primary-dark"></div>
          </div>
          {rest.map((post) => {
            return (
              <div key={post.filePath}>
                <Link
                  href={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                  className={twMerge(
                    'p-3 lg:-mx-3',
                    'rounded-lg',
                    'flex truncate flex-wrap',
                    'cursor-pointer',
                    'flex flex-col hover:bg-background-secondary-light dark:hover:bg-background-secondary-dark',
                    'transition-colors duration-200'
                  )}
                >
                  <div className="text-text-primary-light dark:text-text-primary-dark">
                    {post.data.title}
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <span className="text-text-muted-light dark:text-text-muted-dark">
                      {dayjs(post.data.publishedOn).year() < dayjs().year()
                        ? dayjs(post.data.publishedOn).format('MMMM D, YYYY')
                        : dayjs(post.data.publishedOn).format('MMMM D')}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
