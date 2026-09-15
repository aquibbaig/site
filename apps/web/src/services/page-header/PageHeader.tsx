'use client';

import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { Instrument_Serif } from 'next/font/google';
import { ThemeSwitch } from '../theme/ThemeSwitch';

const editorial = Instrument_Serif({ subsets: ['latin'], weight: '400', display: 'swap' });

export const PageHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <Link
        href="/"
        className="flex items-center gap-3 font-serif text-xl font-normal tracking-tight"
      >
        <Image src="/logo.jpg" alt="" width={28} height={28} className="rounded-full" />
        <span className={editorial.className}>Aquib Baig</span>
      </Link>
      <ThemeSwitch />
    </div>
  );
};
