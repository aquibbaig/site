'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@repo/ui/components/Button';

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
          <p className="text-muted-foreground">
            Could not find the requested resource
          </p>
        </div>
        <Button
          variant="outline"
          className="flex flex-row gap-x-1.5 items-center w-fit"
          onClick={() => router.back()}
        >
          Go back
        </Button>
      </div>
    </div>
  );
}
