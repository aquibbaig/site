'use client';

import { IconComponent } from '@/components/ui/IconComponent';
import { Button } from '@/components/ui/button';
import { CornerDownLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-[300px] grid place-items-center">
      <div className="flex flex-col gap-y-2">
        <div>
          <div className="flex flex-row gap-x-2">
            <span>404,</span>
            <span>Page Not Found</span>
          </div>
          <p className="text-text-muted-light dark:text-text-muted-dark">
            Could not find the requested resource
          </p>
        </div>
        <Button
          className="flex flex-row gap-x-1.5 items-center w-fit"
          onClick={() => router.back()}
        >
          <div className="scale-x-[-1]">
            <IconComponent
              Icon={CornerDownLeft}
              className="hover:stroke-text-muted-light hover:dark:stroke-text-muted-dark"
            />
          </div>
          <span>Head back</span>
        </Button>
      </div>
    </div>
  );
}
