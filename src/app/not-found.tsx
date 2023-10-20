import { IconComponent } from '@/components/ui/IconComponent';
import { Button } from '@/components/ui/button';
import { CornerDownLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-[300px] grid place-items-center">
      <div className="flex flex-col">
        <div className="flex flex-row gap-x-2 font-medium text-lg">
          <span>404</span>
          <span className="text-xl text-text-muted-light dark:text-text-muted-dark">|</span>
          <span>Page Not Found</span>
        </div>
        <p className="text-text-muted-light dark:text-text-muted-dark">
          Could not find requested resource
        </p>
        <Link href="/" className="mt-4">
          <Button className="px-2 py-1 flex flex-row gap-x-1.5 items-center">
            <div className="scale-x-[-1]">
              <IconComponent Icon={CornerDownLeft} />
            </div>
            <span>Return Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
