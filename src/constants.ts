import fs from 'fs';
import path from 'path';

export const POSTS_PATH = path.join(process.cwd(), 'src/content/posts');

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const DAYJS_DEFAULT_FORMAT = 'MMMM D ddd, YYYY';

export const POST_PREVIEW_LIMIT = 3;

type ProjectStatus = 'active' | 'in-progress' | 'inactive';

type Project = {
  title: string;
  uri: string | null;
  description: string;
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    title: 'Spotify Connect',
    uri: 'https://github.com/aquibbaig/spotify-connect',
    description: `Get useful analytics from the spotify API in your React application.`,
    status: 'active',
  },
  {
    title: 'Bench Routes',
    uri: 'https://github.com/bench-routes/bench-routes',
    description: `A highly scalable API monitoring and performance analysis tool.`,
    status: 'active',
  },
  {
    title: '[WIP]',
    uri: null,
    description: `A personal revision and note-taking application.`,
    status: 'in-progress',
  },
];
