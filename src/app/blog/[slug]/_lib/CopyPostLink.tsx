'use client';

import { CopyComponent } from '@/components/derived/CopyComponent';
import { useEffect, useState } from 'react';

export const getSlugLink = (slug: string) => `${window.location.origin}/blog/${slug}`;

export const CopyPostLink = ({ slug }: { slug: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return <CopyComponent copyText={getSlugLink(slug)} className="text-sm" />;
};
