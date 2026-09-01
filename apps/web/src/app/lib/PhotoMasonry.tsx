import type { ReactNode } from 'react';

type PhotoMasonryProps = {
  children: ReactNode;
  layout?: 'wide' | 'split' | 'feature';
};

export function PhotoMasonry({
  children,
  layout = 'split',
}: PhotoMasonryProps) {
  return (
    <div className="photo-masonry" data-layout={layout}>
      {children}
    </div>
  );
}
