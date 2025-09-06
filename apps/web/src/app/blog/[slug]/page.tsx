import { DAYJS_DEFAULT_FORMAT, POSTS_PATH } from '@/constants';
import dayjs from 'dayjs';
import fs from 'fs';
import type { ResolvedMetadata, ResolvingMetadata } from 'next';
import { type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import path from 'path';
import remarkGfm from 'remark-gfm';
import { twMerge } from 'tailwind-merge';
import { CopyPostLink } from './_lib/CopyPostLink';
import { PageViews } from './_lib/PageViews';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<ResolvedMetadata> {
  const { frontmatter } = await getPost({
    slug: params.slug,
  });

  return {
    title: `${frontmatter.title} | Aquib Baig`,
    description: frontmatter.description,
    ...parent,
  };
}

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { serialized, frontmatter } = await getPost({
    slug: params.slug,
  });

  const MdxContent = dynamic(() => import('@/app/lib/MdxContent').then((mod) => mod.MdxContent), {
    ssr: false,
  });

  return (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="mb-1">{frontmatter.title}</h2>
        {frontmatter.description && (
          <p className="text-sm mt-4 text-muted-foreground leading-relaxed">
            {frontmatter.description}
          </p>
        )}
        <div className="flex flex-row items-center gap-10">
          {frontmatter.publishedOn && (
            <div className="flex flex-row mt-4 items-start gap-x-1 text-muted-foreground">
              {dayjs(frontmatter.publishedOn).format(DAYJS_DEFAULT_FORMAT)}
            </div>
          )}
          <PageViews slug={params.slug} />
        </div>
        {Boolean(frontmatter.tags) && (
          <div className="flex flex-row flex-wrap gap-3 mt-4">
            {(frontmatter.tags as unknown as Array<string>)?.map((tag, index) => {
              return <div key={index}>#{tag}</div>;
            })}
          </div>
        )}
      </div>
      <article
        className={twMerge(
          'prose dark:prose-invert leading-relaxed text-sm',
          'prose-headings:text-foreground prose-headings:font-medium',
          'prose-p:text-sm prose-p:leading-relaxed prose-li:leading-relaxed prose-li:text-sm',
          'prose-img:rounded-sm prose-img:border prose-img:border-border dark:prose-img:opacity-85',
          'prose-a:font-normal prose:a:transition-colors prose-a:underline-offset-4 prose-a:duration-200 prose-a:text-foreground prose-a:decoration-border/25 hover:prose-a:decoration-border',
          'prose-pre:p-4 prose-pre:rounded-md prose-pre:border prose-pre:border-border',
          'prose-code:border prose-code:border-border',
          'prose-code:rounded-md',
          'prose-code:text-foreground',
          'prose-code:font-normal prose-code:whitespace-break-spaces prose-code:before:content-[""] prose-code:before:invisible prose-code:after:content-[""] prose-code:after:invisible',
          'prose-code:overflow-auto prose-code:scrollbar-thin prose-code:scrollbar-thumb-gray-400',
          'prose-h1:text-[1.5em] prose-h2:text-[1.5em] prose-h3:text-lg',
          'prose-blockquote:not-italic prose-blockquote:font-normal',
          'prose-headings:tracking-tight prose-headings:pb-2 prose-headings:border-b prose-headings:border-border'
        )}
      >
        <MdxContent source={serialized} />
      </article>
      <hr className="my-10 border-border border-[0.2px]" />
      <div>
        <CopyPostLink slug={params.slug} />
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
