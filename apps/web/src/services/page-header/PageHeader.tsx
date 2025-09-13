'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@repo/ui/components/Tooltip';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { ThemeSwitch } from '../theme/ThemeSwitch';

export const PageHeader = () => {
  return (
    <div className="flex flex-row justify-between items-start">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <Link href="/">
                <Image
                  src="/logo.jpg"
                  alt="Aquib Baig"
                  width={24}
                  height={24}
                  className="rounded-full cursor-default"
                />
              </Link>
            </div>
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
