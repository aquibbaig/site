import { POST_PREVIEW_LIMIT } from '@/constants';
import { getPostMetadata } from '@/helpers';
import type { Metadata } from 'next';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Projects } from './_lib/Projects';
import { Socials } from './_lib/Socials';
import { getPost } from './blog/[slug]/page';

export const metadata: Metadata = {
  title: 'Aquib Baig',
  description: 'Frontend Engineer',
};

export default async function Home() {
  const { recentPosts } = await getRecentPosts();

  return (
    <div className="flex flex-col gap-y-20">
      <div>
        {`I'm`} currently crafting a notes app tailored for contemporary thinkers. I focus on
        developing high-performing, maintainable systems and maintain a genuine passion for elegant
        design.
      </div>
      <div className="flex flex-col gap-y-2">
        <Link href="/blog">
          <h4>Writings</h4>
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
                  'flex'
                )}
              >
                <p className="truncate">{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-y-2">
        <h4 className="font-medium">Projects</h4>
        <Projects />
      </div>
      <div className="flex flex-col gap-y-2">
        <h4>More</h4>
        <Socials />
      </div>
    </div>
  );
}

async function getRecentPosts() {
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
