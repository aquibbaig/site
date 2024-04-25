'use client';

import { usePageViews } from '@/hooks/usePageViews';
import plurarize from 'pluralize';
import { FC } from 'react';

export const PageViews: FC<{ slug: string }> = ({ slug }) => {
  const { data, isLoading, isError } = usePageViews({ slug });

  if (isLoading) return <div className="mt-5">...</div>;

  if (isError) return <div className="mt-5 flex flex-row items-start gap-x-1">0</div>;

  const [viewCount] = data?.results?.[0] || 0;

  return (
    <div className="mt-5 flex flex-row items-start gap-x-1">
      {viewCount} {plurarize('views', viewCount)}
    </div>
  );
};
