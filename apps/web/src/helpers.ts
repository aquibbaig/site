import { POSTS_PATH, postFilePaths } from '@/lib/server-constants';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime, { type ReadTimeResults } from 'reading-time';

type Post = {
  readonly content: string;
  readonly filePath: string;
  readonly readingTime: ReadTimeResults;
  data: {
    readonly title: string;
    readonly publishedOn: string;
    readonly draft?: boolean;
    readonly description: string;
    readonly tags?: Array<string>;
    readonly craft?: boolean;
  };
};

export const getPostMetadata = ({ limit = 10 }: { limit?: number }) => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
      readingTime: readingTime(content),
    };
  });

  const sortedPosts = posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => {
      if (a.data.publishedOn < b.data.publishedOn) {
        return 1;
      } else {
        return -1;
      }
    });

  return { posts: sortedPosts.slice(0, limit) as Post[], count: sortedPosts.length };
};
