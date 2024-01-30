import { githubLink, spotifyLink, twitterLink } from '@/constants';
import { externalLinkCSS } from './helpers';

export const Socials = () => {
  return (
    <div>
      <h4>Connect</h4>
      <p>
        You can follow me on{' '}
        <a className={externalLinkCSS} href={twitterLink} target="_blank">
          X
        </a>
        , explore my projects on{' '}
        <a className={externalLinkCSS} href={githubLink} target="_blank">
          Github
        </a>{' '}
        or check out my playlists on{' '}
        <a className={externalLinkCSS} href={spotifyLink} target="_blank">
          Spotify
        </a>
        .
      </p>
    </div>
  );
};
