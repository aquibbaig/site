import { Link } from 'next-view-transitions';
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
  {
    label: 'Inventory',
    path: '/inventory',
  }
];

export const Browse = () => {
  return (
    <div className="flex flex-row gap-4 flex-wrap">
      <ul className="flex flex-row gap-4 flex-wrap">
        {links.map(({ label, path }) => (
          <li key={path}>
            <Link href={path} className="external-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Socials />
    </div>
  );
};
