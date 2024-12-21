'use client';

import { usePageViews } from '@/hooks/usePageViews';
import plurarize from 'pluralize';
import { type FC } from 'react';

export const PageViews: FC<{ slug: string }> = ({ slug }) => {
  const { data = [], isLoading, isError } = usePageViews({ slug });

  if (isLoading) return <div className="">...</div>;

  if (isError)
    return (
      <div className="flex flex-row items-start gap-x-1 text-text-muted-light dark:text-text-muted-dark">
        0
      </div>
    );

  const [viewCount] = data?.results?.[0] || [0];

  if (viewCount === 0) return null;

  return (
    <div className="flex flex-row items-start gap-x-1 text-text-muted-light dark:text-text-muted-dark">
      {viewCount} {plurarize('views', viewCount)}
    </div>
  );
};
