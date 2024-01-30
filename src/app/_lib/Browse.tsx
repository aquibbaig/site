import Link from 'next/link';
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
];

export const Browse = () => {
  return (
    <div>
      <h4>Browse</h4>
      <ul className="flex flex-col gap-y-2">
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
