import { getPageViews } from '@/api/getPageViews';
import { useQuery } from '@tanstack/react-query';

export const usePageViews = ({ slug }: { slug: string }) => {
  return useQuery({
    queryKey: ['page-views', slug],
    queryFn: () => getPageViews({ slug }),
  });
};
