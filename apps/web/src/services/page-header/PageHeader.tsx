'use client';

import Image from 'next/image';
import { ThemeSwitch } from '../theme/ThemeSwitch';
import { useRouter } from 'next/navigation';

export const PageHeader = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between items-start">
      <Image
        src="/logo.jpg"
        alt="Aquib Baig"
        width={24}
        height={24}
        className="rounded-full"
        onClick={() => {
          router.push('/');
        }}
      />
      <ThemeSwitch />
    </div>
  );
};
