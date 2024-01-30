import dayjs from 'dayjs';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { externalLinkCSS } from './helpers';

export const Footer = () => {
  return (
    <div className="flex flex-row justify-between">
      <p>© {dayjs().format('YYYY')} Aquib Baig</p>
      <Link href="/colophon" className={twMerge(externalLinkCSS, 'cursor-pointer')}>
        Colophon
      </Link>
    </div>
  );
};
