import { POST_PREVIEW_LIMIT } from '@/constants';
import { getPostMetadata } from '@/helpers';
import { twMerge } from 'tailwind-merge';
import { getPost } from './blog/[slug]/page';

export default async function Home() {
  const { recentPosts } = await getRecentPosts();

  return (
    <div className="flex flex-col gap-y-20">
      <div>
        Passionate about creating products that address real-world challenges, I strive to excel in
        developing highly performant and maintainable systems. I have a strong affinity for
        aesthetically pleasing designs and a keen eye for exceptional user experiences.
      </div>
      <div className="flex flex-col gap-y-4">
        <h4>Thoughts</h4>
        <ul className="flex flex-col">
          {recentPosts.map(({ title, slug }) => (
            <li key={slug}>
              <a
                href={`/blog/${slug}`}
                className={twMerge(
                  'hover:bg-background-secondary-light dark:hover:bg-background-secondary-dark',
                  'px-3 py-1 -mx-3',
                  'rounded-md',
                  'flex truncate'
                )}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
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
