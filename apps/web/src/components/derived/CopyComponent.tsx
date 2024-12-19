'use client';

import { IconComponent } from '@/components/ui/IconComponent';
import { Button } from '@repo/ui/components/Button';
import { Check, Copy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <Button
      variant="outline"
      onClick={() => {
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
      {isCopied ? <IconComponent Icon={Check} /> : <IconComponent Icon={Copy} />}
      Copy link
    </Button>
  );
};
