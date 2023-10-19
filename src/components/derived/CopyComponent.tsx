'use client';

import { IconComponent } from '@/components/ui/IconComponent';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export const CopyComponent = ({
  copyText,
  className = '',
}: {
  copyText: string;
  className?: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <Button
      className={twMerge('py-1 px-2 text-sm flex items-center gap-x-1', className)}
      onClick={() => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);

          return;
        }

        copyToClipboard(copyText);
        setIsCopied(true);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
          setIsCopied(false);
        }, 3 * 1000);
      }}
    >
      <IconComponent Icon={Copy} />
      {isCopied ? `Copied!` : `Copy link`}
    </Button>
  );
};
