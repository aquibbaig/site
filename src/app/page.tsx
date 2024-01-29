import { POST_PREVIEW_LIMIT } from '@/constants';
import { getPostMetadata } from '@/helpers';
import type { Metadata } from 'next';
import { Socials } from './_lib/Socials';
import { getPost } from './blog/[slug]/page';

export const metadata: Metadata = {
  title: 'Aquib Baig',
  description: 'Frontend Engineer',
};

export default async function Home() {
  const { recentPosts } = await getRecentPosts();

  return (
    <>
      <p>
        I embrace minimalism in both art and infrastructure, striving to convey more with less. My
        focus lies in user flow, interaction, and experience, as I navigate a journey to discover my
        own creative path, steering clear of overwhelming trends to find peace and strength in my
        work.
      </p>
      {/* <div className="flex flex-col gap-y-2">
        <Link href="/blog">
          <h4>Writings</h4>
        </Link>
        <ul className="flex flex-col gap-y-2">
          {recentPosts.map(({ title, slug }) => (
            <li key={slug}>
              <Link as={`/blog/${slug}`} href={`/posts/[slug]`} className={twMerge('flex')}>
                <p className="truncate">{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
      <Socials />
    </>
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
