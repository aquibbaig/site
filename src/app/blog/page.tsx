import dayjs from 'dayjs';
import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import Head from 'next/head';
import { twMerge } from 'tailwind-merge';
import { getPostMetadata } from '../../helpers';

export const metadata: Metadata = {
  title: 'Blog | Aquib Baig',
  description: 'Frontend Engineer',
};

export default function Blog() {
  const { posts } = getPostMetadata({
    limit: 10,
  });

  return (
    <div className="flex flex-col gap-16">
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
        <ul className="flex flex-col gap-8 mt-8">
          {posts.map((post) => {
            return (
              <li key={post.filePath}>
                <Link
                  href={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                  className={twMerge(
                    'p-4 -m-4',
                    'rounded-md',
                    'flex truncate',
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
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
