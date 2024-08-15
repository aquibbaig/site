import BenchRoutesLogo from '@/assets/bench-routes.png';
import EnviseLogo from '@/assets/envise.png';
import fs from 'fs';
import PlugZap from 'lucide-static/icons/plug-zap.svg';
import path from 'path';

export const POSTS_PATH = path.join(process.cwd(), 'src/content/posts');

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const DAYJS_DEFAULT_FORMAT = 'MMMM D ddd, YYYY';

export const POST_PREVIEW_LIMIT = 3;

type ProjectStatus = 'active' | 'in-progress' | 'inactive';

export type ProjectType = {
  id: string;
  title: string;
  uri: string | null;
  description: string;
  icon?: any;
  year: string;
  blog?: string;
  size: [number, number];
};

export const projects: ProjectType[] = [
  {
    id: 'envise',
    title: 'Envise',
    uri: 'https://envise.app',
    description: `Craft clear, organized notes and revise effectively with AI powered retention.`,
    icon: EnviseLogo,
    year: '2024',
    blog: '/envise',
    size: [48, 48]
  },
  {
    id: 'spotify-connect',
    title: 'Spotify Connect',
    uri: 'https://www.npmjs.com/package/spotify-connect',
    description: `Get useful analytics from the spotify API in your React application.`,
    year: '2024',
    icon: PlugZap,
    size: [48, 48]
  },
  {
    id: 'bench-routes',
    title: 'Bench Routes',
    uri: 'https://github.com/bench-routes/bench-routes',
    description: `A highly scalable API monitoring and performance analysis tool.`,
    year: '2021',
    icon: BenchRoutesLogo,
    size: [64, 160]
  },
];

export const twitterLink = `https://twitter.com/BaigAquib`;
export const spotifyLink = `https://open.spotify.com/user/21e2gnoh5t42dkrsp7zc7bzjy?si=e35e4430aa274eb4`;
export const githubLink = `https://github.com/aquibbaig`;
export const linkedInLink = `https://www.linkedin.com/in/baigaquib/`
export const emailLink = `mailto:aquibbaig97@gmail.com`;
