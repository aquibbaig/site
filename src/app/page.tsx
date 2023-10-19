import { POST_PREVIEW_LIMIT } from '@/constants';
import { getPostMetadata } from '@/helpers';
import type { Metadata } from 'next';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Projects } from './_lib/Projects';
import { getPost } from './blog/[slug]/page';

export const metadata: Metadata = {
  title: 'Aquib Baig',
  description: 'Product Engineer',
};

export default async function Home() {
  const { recentPosts } = await getRecentPosts();

  return (
    <div className="flex flex-col gap-y-20">
      <div>
        {`I'm`} Aquib, a frontend engineer located in India. I strive to excel in developing highly
        performant and maintainable systems. I have a genuine passion for elegant design and a sharp
        eye for exceptional user experiences.
      </div>
      <div className="flex flex-col gap-y-4">
        <Link href="/blog">
          <h4>Thoughts</h4>
        </Link>
        <ul className="flex flex-col">
          {recentPosts.map(({ title, slug }) => (
            <li key={slug}>
              <Link
                as={`/blog/${slug}`}
                href={`/posts/[slug]`}
                className={twMerge(
                  'hover:bg-background-secondary-light dark:hover:bg-background-secondary-dark',
                  'px-3 py-1 -mx-3',
                  'rounded-md',
                  'flex truncate'
                )}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-y-4">
        <h4>Projects</h4>
        <Projects />
      </div>
    </div>
  );
}

export async function getRecentPosts() {
  const { posts = [], count } = getPostMetadata({
    limit: POST_PREVIEW_LIMIT,
  });

  let recentPosts: {
    title: string;
    slug: string;
  }[] = [];

  for (const post of posts) {
    const slug = post.filePath.replace(/\.mdx?$/, '');
    const { frontmatter } = await getPost({ slug });

    recentPosts.push({
      title: frontmatter.title,
      slug,
    });
  }

  return {
    recentPosts,
    totalCount: count,
  };
}
