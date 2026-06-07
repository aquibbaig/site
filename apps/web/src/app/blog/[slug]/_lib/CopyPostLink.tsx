'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const getSlugLink = (slug: string) => `${window.location.origin}/blog/${slug}`;

export const CopyPostLink = ({ slug }: { slug: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <button
      type="button"
      className="text-[15px] text-muted-foreground transition-colors hover:text-foreground"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(getSlugLink(slug));
          toast.success('Post link copied');
        } catch {
          toast.error('Could not copy link');
        }
      }}
    >
      Copy link
    </button>
  );
};
