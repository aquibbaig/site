'use client';

import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import { useRecentTracks } from 'spotify-connect';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="p-4 border border-border-primary-light dark:border-border-primary-dark rounded">
      {children}
    </div>
  );
};

export const RecentTracks = () => {
  const {
    data: recentTracks,
    loading: isLoadingRecentTracks,
    error: isErrorRecentTracks,
  } = useRecentTracks(5 * 60 * 1000);

  if (isLoadingRecentTracks || isErrorRecentTracks || !recentTracks) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-text-muted-light dark:text-text-muted-dark">Recent Tracks</h5>
      <ul className="flex flex-col gap-1">
        {recentTracks.items?.map((track) => {
          if (!track) return null;

          return (
            <a
              key={track.context.uri}
              target="blank"
              rel="noopener noreferrer"
              href={track.track?.external_urls?.spotify}
              className="group w-fit"
            >
              <li className="flex flex-row items-center gap-2">
                <Image
                  width={36}
                  height={36}
                  src={track.track?.album?.images[0]?.url}
                  alt={track.track?.name}
                  className="rounded-sm transition-all duration-400 border-2 border-transparent group-hover:border-2 group-hover:border-background-primary-dark/50 dark:group-hover:border-border-primary-light/50"
                />
                <div className="flex flex-col flex-wrap">
                  <span>{track.track?.name}</span>
                  <span className="text-text-muted-light dark:text-text-muted-dark -mt-0.5">
                    {track.track?.artists?.[0]?.name}
                  </span>
                </div>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};
