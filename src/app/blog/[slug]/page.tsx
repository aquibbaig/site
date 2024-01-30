import { MdxContent } from '@/app/_lib/MdxContent';
import { DAYJS_DEFAULT_FORMAT, POSTS_PATH } from '@/constants';
import dayjs from 'dayjs';
import fs from 'fs';
import type { ResolvedMetadata, ResolvingMetadata } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import { twMerge } from 'tailwind-merge';
import { CopyPostLink } from './_lib/CopyPostLink';

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

  return (
    <div className="flex flex-col">
      <div>
        <h3>{frontmatter.title}</h3>
        {frontmatter.description && (
          <p className="!leading-relaxed !text-[0.9375rem]">{frontmatter.description}</p>
        )}
        {frontmatter.publishedOn && (
          <div className="mt-5 flex flex-row items-start gap-x-1">
            {dayjs(frontmatter.publishedOn).format(DAYJS_DEFAULT_FORMAT)}
          </div>
        )}
        <hr className="my-10 border-border-primary-light dark:border-border-primary-dark border-[0.2px]" />
      </div>
      <article
        className={twMerge(
          'prose dark:prose-invert',
          'prose-headings:text-text-primary-light dark:prose-headings:text-text-primary-dark prose-headings:font-medium',
          'leading-relaxed text-[0.9375rem]',
          'prose-img:rounded-sm prose-img:border prose-img:border-border-primary-light dark:prose-img:opacity-85 dark:prose-img:border-border-primary-dark',
          'prose-a:font-medium prose-a:underline-offset-2 prose-a:decoration-1',
          'prose-pre:bg-background-secondary-light dark:prose-pre:bg-background-secondary-dark prose-pre:rounded-md prose-pre:px-2 prose-pre:py-1 prose-pre:border prose-pre:border-border-primary-light dark:prose-pre:border-border-primary-dark',
          'prose-code:border prose-code:border-border-primary-light dark:prose-code:border-border-primary-dark prose-code:after:content-[""] prose-code:before:content-[""]',
          'prose-code:rounded-md prose-code:px-2 prose-code:py-1 prose-code:bg-background-secondary-light',
          'prose-code:text-text-primary-light dark:prose-code:text-text-primary-dark',
          'dark:prose-code:bg-background-secondary-dark prose-code:font-normal prose-code:leading-relaxed',
          'prose-code:overflow-x-auto prose-code:overflow-y-hidden prose-code:scrollbar-thin prose-code:scrollbar-thumb-gray-400',
          'prose-h1:text-[1.5em] prose-h2:text-[1.5em] prose-h3:text-lg'
        )}
      >
        <MdxContent source={serialized} />
      </article>
      <hr className="my-10 border-border-primary-light dark:border-border-primary-dark border-[0.2px]" />
      <div>
        <CopyPostLink slug={params.slug} />
      </div>
    </div>
  );
}

export async function getPost({ slug }: { slug: string }): Promise<{
  frontmatter: Record<string, string>;
  serialized: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}> {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  // Read the file from the filesystem
  const raw = fs.readFileSync(postFilePath, 'utf-8');

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });

  // Typecast the frontmatter to the correct type
  const frontmatter = serialized.frontmatter;

  // Return the serialized content and frontmatter
  return {
    frontmatter: frontmatter as Record<string, string>,
    serialized,
  };
}
