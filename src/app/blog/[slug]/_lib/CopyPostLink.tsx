'use client';

import { CopyComponent } from '@/components/derived/CopyComponent';

export const getSlugLink = (slug: string) => `${window.location.origin}/blog/${slug}`;

export const CopyPostLink = ({ slug }: { slug: string }) => {
  return <CopyComponent copyText={getSlugLink(slug)} className="text-sm" />;
};
