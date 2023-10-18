import { MdxContent } from '@/app/_lib/MdxContent';
import { DAYJS_DEFAULT_FORMAT, POSTS_PATH } from '@/constants';
import dayjs from 'dayjs';
import fs from 'fs';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import { twMerge } from 'tailwind-merge';

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
        <h2>{frontmatter.title}</h2>
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
          'prose-headings:text-text-primary-light dark:prose-headings:text-text-primary-dark prose-headings:font-semibold',
          'leading-relaxed text-[0.9375rem]',
          'prose-img:rounded-sm prose-img:border prose-img:border-border-primary-light dark:prose-img:opacity-85 dark:prose-img:border-border-primary-dark',
          'prose-a:font-medium prose-a:no-underline prose-a:text-[#3498db]',
          'prose-code:before:content-[""] prose-code:after:content-[""] prose-code:inline-table prose-code:border prose-code:border-border-primary-light dark:prose-code:border-border-primary-dark prose-code:rounded-md prose-code:px-2 prose-code:py-1 prose-code:bg-background-secondary-light dark:prose-code:bg-background-secondary-dark prose-code:font-normal prose-code:leading-relaxed prose-code:overflow-x-auto prose-code:overflow-y-hidden prose-code:scrollbar-thin prose-code:scrollbar-thumb-gray-400'
        )}
      >
        <MdxContent source={serialized} />
      </article>
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
