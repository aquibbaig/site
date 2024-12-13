import { emailLink, githubLink, spotifyLink, twitterLink } from '@/constants';
import { externalLinkCSS } from './helpers';

export const Socials = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 flex-wrap">
        <a className={externalLinkCSS} href={emailLink} target="_blank">
          Email
        </a>
        <a className={externalLinkCSS} href={twitterLink} target="_blank">
          X/Twitter
        </a>
        <a className={externalLinkCSS} href={githubLink} target="_blank">
          Github
        </a>{' '}
        <a className={externalLinkCSS} href={spotifyLink} target="_blank">
          Spotify
        </a>
      </div>
    </div>
  );
};
