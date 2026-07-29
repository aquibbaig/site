'use client';

import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { ThemeSwitch } from '../theme/ThemeSwitch';

export const PageHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <Link
        href="/"
        className="flex items-center gap-3 text-xl font-semibold tracking-tight"
      >
        <Image src="/logo.jpg" alt="" width={28} height={28} className="rounded-full" />
        <span>Aquib Baig</span>
      </Link>
      <ThemeSwitch />
    </div>
  );
};
