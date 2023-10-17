import Head from 'next/head';
import Link from 'next/link';
import { getPostMetadata } from '../../helpers';

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
          <li key={post.filePath} className="flex">
            <div>
              <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`} href={`/posts/[slug]`}>
                {post.data.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
