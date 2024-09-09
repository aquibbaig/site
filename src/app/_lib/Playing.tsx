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
      <div className="flex flex-row gap-x-1.5 items-center py-1">
        <IconComponent
          Icon={Disc3}
          size={16}
          className="animate-spin transition-all duration-500 text-text-muted-light dark:text-text-muted-dark"
        />
        <div className="flex flex-row gap-x-1.5 items-center py-1 animate-pulse bg-text-muted-light/10 rounded-md w-3/5 h-[19px]"></div>
      </div>
    );
  }

  if (!is_playing) {
    return (
      <div className="flex flex-row gap-x-1.5 items-center py-1">
        <IconComponent
          Icon={Disc3}
          size={16}
          className="animate-spin transition-all duration-500 text-text-muted-light dark:text-text-muted-dark"
        />
        <div className="text-text-muted-light dark:text-text-muted-dark text-sm">--</div>
      </div>
    );
  }

  if (isErrorCurrentlyPlaying || !track) {
    return null;
  }

  return (
    <div className="w-fit">
      <a href={track.uri} className="external-link w-fit">
        <div className="flex flex-row gap-x-1.5 items-center rounded">
          <IconComponent
            Icon={Disc3}
            size={16}
            className="animate-spin transition-all duration-500"
          />
          <div className="flex gap-x-1.5 items-center">
            <span>{track?.name}</span>
            <span className="text-text-secondary-light dark:text-text-secondary-dark">/</span>
            <span className="mt-[1px]">{track.artist[0].name}</span>
          </div>
        </div>
      </a>
    </div>
  );
};
