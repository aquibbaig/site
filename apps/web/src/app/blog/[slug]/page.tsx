import { DAYJS_DEFAULT_FORMAT } from '@/constants';
import { POSTS_PATH } from '@/lib/server-constants';
import dayjs from 'dayjs';
import fs from 'fs';
import type { ResolvedMetadata, ResolvingMetadata } from 'next';
import { type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Link } from 'next-view-transitions';
import path from 'path';
import remarkGfm from 'remark-gfm';
import { LazyMdxContent } from '../../lib/LazyMdxContent';
import { CopyPostLink } from './_lib/CopyPostLink';
import { PageViews } from './_lib/PageViews';

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: PostPageProps,
  parent: ResolvingMetadata
): Promise<ResolvedMetadata> {
  const { slug } = await params;

  const { frontmatter } = await getPost({
    slug,
  });

  return {
    title: `${frontmatter.title} | Aquib Baig`,
    description: frontmatter.description,
    ...parent,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  const { serialized, frontmatter } = await getPost({
    slug,
  });

  return (
    <div className="blog-post flex flex-col gap-16">
      <div>
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-muted-foreground hover:text-foreground hover:underline"
        >
          ← Back
        </Link>
        <h1 className="blog-title">
          {frontmatter.title}
        </h1>
        {frontmatter.description && (
          <p className="text-sm mt-4 text-muted-foreground leading-relaxed">
            {frontmatter.description}
          </p>
        )}
        <div className="flex flex-row items-center gap-6 pt-4">
          {frontmatter.publishedOn && (
            <span className="text-muted-foreground text-sm">
              {dayjs(frontmatter.publishedOn).format(DAYJS_DEFAULT_FORMAT)}
            </span>
          )}
          <PageViews slug={slug} />
        </div>
        {Boolean(frontmatter.tags) && (
          <div className="flex flex-row flex-wrap gap-3 mt-4">
            {(frontmatter.tags as unknown as Array<string>)?.map((tag, index) => {
              return <div key={index}>#{tag}</div>;
            })}
          </div>
        )}
      </div>
      <article className="typeset">
        <LazyMdxContent source={serialized} />
      </article>
      <div className="mt-8 border-t border-border pt-8">
        <div className="flex flex-row items-center justify-between gap-6 text-muted-foreground">
          <div className="flex min-w-0 flex-row items-center gap-3 [&>*]:text-sm">
            <span>Aquib Baig</span>
            {frontmatter.publishedOn && (
              <>
                <span aria-hidden="true">·</span>
                <span>{dayjs(frontmatter.publishedOn).format(DAYJS_DEFAULT_FORMAT)}</span>
              </>
            )}
          </div>
          <CopyPostLink slug={slug} />
        </div>
      </div>
    </div>
  );
}

async function getPost({ slug }: { slug: string }): Promise<{
  frontmatter: Record<string, string>;
  serialized: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}> {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  // Read the file from the filesystem
  const raw = fs.readFileSync(postFilePath, 'utf-8');

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  // Typecast the frontmatter to the correct type
  const frontmatter = serialized.frontmatter;

  // Return the serialized content and frontmatter
  return {
    frontmatter: frontmatter as Record<string, string>,
    serialized,
  };
}
