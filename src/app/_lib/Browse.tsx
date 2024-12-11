import { Link } from 'next-view-transitions';
import { twMerge } from 'tailwind-merge';
import { externalLinkCSS } from './helpers';

const links = [
  { label: 'Blog', path: '/blog' },
  {
    label: 'Work',
    path: '/work',
  },
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
    <div>
      <ul className="flex flex-row gap-2 flex-wrap">
        {links.map(({ label, path }) => (
          <li key={path}>
            <Link href={path} className={twMerge(externalLinkCSS, 'cursor-pointer')}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
