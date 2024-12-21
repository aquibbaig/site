'use client';

import Image from 'next/image';
import { useRecentTracks } from 'spotify-connect';

const MAX_TRACKS = 1;

export const RecentTracks = () => {
  const {
    data: recentTracks,
    loading: isLoadingRecentTracks,
    error: isErrorRecentTracks,
  } = useRecentTracks(5 * 60 * 1000);

  if (isLoadingRecentTracks) {
    return (
      <div className="flex flex-col gap-4">
        {Array(2)
          .fill(0)
          .map((item, idx) => {
            return (
              <div key={idx} className="animate-pulse flex flex-col gap-1">
                <div className="bg-background-secondary-light dark:bg-background-secondary-dark h-5 rounded-md w-4/5"></div>
                <div className="bg-background-secondary-light dark:bg-background-secondary-dark h-5 rounded-md w-3/5"></div>
              </div>
            );
          })}
      </div>
    );
  }

  if (isErrorRecentTracks || !recentTracks) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-text-muted-light dark:text-text-muted-dark">Last played on Spotify</h5>
      <ul className="flex flex-col gap-1">
        {recentTracks.items?.slice(0, MAX_TRACKS)?.map((track) => {
          if (!track) return null;

          return (
            <a
              key={track.track?.id}
              target="blank"
              rel="noopener noreferrer"
              href={track.track?.external_urls?.spotify}
              className="group w-fit"
            >
              <li className="flex flex-row items-center gap-2">
                <Image
                  width={40}
                  height={40}
                  src={track.track?.album?.images[0]?.url!}
                  alt={track.track?.name}
                  className="rounded-md transition-all duration-400 border-2 border-transparent group-hover:border-2 group-hover:border-background-primary-dark/50 dark:group-hover:border-border-primary-light/50"
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
