import { emailLink, githubLink, spotifyLink, twitterLink } from '@/constants';

export const Socials = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 flex-wrap">
        <a className="external-link" href={emailLink} target="_blank">
          Email
        </a>
        <a className="external-link" href={twitterLink} target="_blank">
          X/Twitter
        </a>
        <a className="external-link" href={githubLink} target="_blank">
          Github
        </a>{' '}
        <a className="external-link" href={spotifyLink} target="_blank">
          Spotify
        </a>
      </div>
    </div>
  );
};
