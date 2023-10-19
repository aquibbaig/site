import { githubLink, spotifyLink, twitterLink } from '@/constants';

export const Socials = () => {
  const externalLinkCSS = `underline underline-offset-4 decoration-1`;

  return (
    <p>
      You can follow me on{' '}
      <a className={externalLinkCSS} href={twitterLink} target="_blank">
        Twitter
      </a>
      , explore my projects on{' '}
      <a className={externalLinkCSS} href={githubLink} target="_blank">
        Github
      </a>{' '}
      or jam to my playlists{' '}
      <a className={externalLinkCSS} href={spotifyLink} target="_blank">
        Spotify
      </a>
      .
    </p>
  );
};
