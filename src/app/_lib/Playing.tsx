'use client';

import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import { parseCurrentTrack, useCurrentTrack } from 'spotify-connect';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="p-4 border border-border-primary-light dark:border-border-primary-dark rounded">
      {children}
    </div>
  );
};

export const Playing = () => {
  const {
    data: currentlyPlayingData,
    loading: isLoadingCurrentlyPlaying,
    error: isErrorCurrentlyPlaying,
  } = useCurrentTrack();

  const { track, is_playing } = parseCurrentTrack(currentlyPlayingData);

  if (isLoadingCurrentlyPlaying) {
    return null;
  }

  if (!is_playing) {
    return null;
  }

  if (Boolean(isErrorCurrentlyPlaying) || !track) {
    return null;
  }

  const albumImage = currentlyPlayingData?.item?.album?.images?.[0];

  return (
    <div className="flex flex-col gap-4 transition-all duration-400 ease-in-out">
      <h5 className="text-text-muted-light dark:text-text-muted-dark">Currently Playing</h5>
      <Layout>
        <a href={track.uri} className="external-link w-fit">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 items-center rounded">
              {albumImage && (
                <Image
                  src={String(albumImage?.url)}
                  alt=""
                  width={36}
                  height={36}
                  className="rounded"
                />
              )}
              <div className="flex flex-col gap-x-1.5">
                <span>{track?.name}</span>
                <span className="text-text-muted-light dark:text-text-muted-dark text-sm">
                  {track.artist[0].name}
                </span>
              </div>
            </div>
          </div>
        </a>
      </Layout>
    </div>
  );
};
