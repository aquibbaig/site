'use client';

import Image from 'next/image';
import { ThemeSwitch } from '../theme/ThemeSwitch';
import { useRouter } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@repo/ui/components/Tooltip';

export const PageHeader = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between items-start">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Image
              src="/logo.jpg"
              alt="Aquib Baig"
              width={24}
              height={24}
              className="rounded-full cursor-default"
              onClick={() => {
                router.push('/');
              }}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <ThemeSwitch />
    </div>
  );
};
