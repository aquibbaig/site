import { MdxContent } from '@/app/_lib/MdxContent';
import { POSTS_PATH } from '@/constants';
import dayjs from 'dayjs';
import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

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
    <div>
      <div>
        <p>{frontmatter.title}</p>
        {frontmatter.description && <p>{frontmatter.description}</p>}
        <div>
          {frontmatter.publishedOn && (
            <div>
              <div>
                <p>{dayjs(frontmatter.publishedOn).format('D MMM, YYYY')}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <MdxContent source={serialized} />
      </div>
      <div>
        <div>
          written by <i>Aquib Baig.</i>
        </div>
      </div>
    </div>
  );
}

async function getPost({ slug }: { slug: string }): Promise<any> {
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
    frontmatter,
    serialized,
  };
}
