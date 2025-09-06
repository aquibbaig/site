import { emailLink, githubLink, linkedInLink, spotifyLink, twitterLink } from '@/constants';
import Head from 'next/head';
import { externalLinkCSS } from '../lib/helpers';

const socialLinks = [
  {
    label: 'Twitter',
    href: twitterLink,
  },
  {
    label: 'Github',
    href: githubLink,
  },
  {
    label: 'LinkedIn',
    href: linkedInLink,
  },
  {
    label: 'Spotify',
    href: spotifyLink,
  },
];

export default function Connect() {
  return (
    <div>
      <Head>
        <title>Connect | Aquib Baig</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col gap-y-4">
        <h5 className="text-muted-foreground">Connect</h5>
        <p>
          Hi, you have reached Aquib. If you want to chat, or just want to see what {`I'm`} up to,
          here are some ways to get in touch. Talk soon! 👋🏼
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            <a href={emailLink} className={externalLinkCSS}>
              Email
            </a>
          </li>
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={externalLinkCSS}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
