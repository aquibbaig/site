'use client';

import { IconComponent } from '@/components/ui/IconComponent';
import { Disc3 } from 'lucide-react';
import { parseCurrentlyPlayingTrack, useCurrentlyPlaying } from 'spotify-connect';

export const Playing = () => {
  const {
    data: currentlyPlayingData,
    isLoading: isLoadingCurrentlyPlaying,
    isError: isErrorCurrentlyPlaying,
  } = useCurrentlyPlaying();

  const { track, is_playing } = parseCurrentlyPlayingTrack(currentlyPlayingData);

  if (isLoadingCurrentlyPlaying || isErrorCurrentlyPlaying || !is_playing || !track) {
    return null;
  }

  return (
    <div className="mt-20">
      <a
        href={track.uri}
        className="flex flex-row items-center group bg-background-secondary-light dark:bg-background-secondary-dark w-fit rounded px-2 py-1 -mx-2"
      >
        <div className="flex flex-row gap-x-1.5 items-start">
          <IconComponent
            Icon={Disc3}
            size={16}
            className="animate-spin transition-all duration-500 mt-0.5"
          />
          <div className="flex flex-col text-sm">
            <span>
              {track?.name}{' '}
              <span className="italic text-text-secondary-light dark:text-text-secondary-dark">
                by{' '}
              </span>{' '}
              {track.artist[0].name}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};
