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
    title: 'Envise',
    uri: 'https://envise.app',
    description: `Craft clear, organized notes and revise effectively with AI powered retention.`,
    status: 'active',
  },
  {
    title: 'Spotify Connect',
    uri: 'https://www.npmjs.com/package/spotify-connect',
    description: `Get useful analytics from the spotify API in your React application.`,
    status: 'active',
  },
  {
    title: 'Bench Routes',
    uri: 'https://github.com/bench-routes/bench-routes',
    description: `A highly scalable API monitoring and performance analysis tool.`,
    status: 'active',
  },
];

export const twitterLink = `https://twitter.com/BaigAquib`;
export const spotifyLink = `https://open.spotify.com/user/21e2gnoh5t42dkrsp7zc7bzjy?si=e35e4430aa274eb4`;
export const githubLink = `https://github.com/aquibbaig`;
