import { Link } from 'next-view-transitions';
import { twMerge } from 'tailwind-merge';
import { externalLinkCSS } from './helpers';
import { Socials } from './Socials';

const links = [
  { label: 'Articles', path: '/blog' },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Colophon',
    path: '/colophon',
  },
];

export const Browse = () => {
  return (
    <div className="flex flex-row gap-4 flex-wrap">
      <ul className="flex flex-row gap-4 flex-wrap">
        {links.map(({ label, path }) => (
          <li key={path}>
            <Link href={path} className={externalLinkCSS}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Socials />
    </div>
  );
};
