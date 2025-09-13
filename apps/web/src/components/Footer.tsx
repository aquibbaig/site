import { Socials } from '@/app/lib/Socials';
import Link from 'next/link';

const footerLinks = [
  { href: '/blog', label: 'Articles' },
  { href: '/about', label: 'About' },
  { href: '/colophon', label: 'Colophon' },
  { href: '/inventory', label: 'Inventory' },
];

export const Footer = () => {
  return (
    <footer className="mt-8">
      <nav className="flex flex-row gap-4 flex-wrap">
        <ul className="flex flex-row gap-4 flex-wrap">
          {footerLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="external-link cursor-default">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Socials />
      </nav>
    </footer>
  );
};
