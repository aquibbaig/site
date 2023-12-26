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

  if (isLoadingCurrentlyPlaying) {
    return (
      <div className="mt-20">
        <div className="flex flex-row gap-x-1.5 items-center py-1">
          <IconComponent
            Icon={Disc3}
            size={16}
            className="animate-spin transition-all duration-500"
          />
          <div className="animate-pulse h-[19px] bg-background-secondary-light dark:bg-background-secondary-dark w-64 rounded"></div>
        </div>
      </div>
    );
  }

  if (!is_playing) {
    return (
      <div className="mt-20">
        <div className="flex flex-row gap-x-1.5 items-center py-1">
          <IconComponent
            Icon={Disc3}
            size={16}
            className="animate-spin transition-all duration-500 text-text-muted-light dark:text-text-muted-dark"
          />
          <div className="text-text-muted-light dark:text-text-muted-dark text-sm">
            Not playing anything right now.
          </div>
        </div>
      </div>
    );
  }

  if (isErrorCurrentlyPlaying || !track) {
    return null;
  }

  return (
    <div className="mt-20">
      <a href={track.uri}>
        <div className="flex flex-row gap-x-1.5 items-center rounded py-1">
          <IconComponent
            Icon={Disc3}
            size={16}
            className="animate-spin transition-all duration-500"
          />
          <div className="text-sm">
            {track?.name}
            {` `}
            <span className="italic text-text-secondary-light dark:text-text-secondary-dark">
              by
            </span>
            {` `}
            {track.artist[0].name}
          </div>
        </div>
      </a>
    </div>
  );
};
