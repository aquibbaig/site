import { githubLink, spotifyLink, twitterLink } from '@/constants';

export const Socials = () => {
  const externalLinkCSS = `underline underline-offset-2 decoration-1 external-link`;

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
