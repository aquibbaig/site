'use client';

import { parseCurrentlyPlayingTrack, useCurrentlyPlaying } from '@/packages/spotify-connect';
import { Disc3 } from 'lucide-react';
import { IconComponent } from '../ui/IconComponent';

export const Footer = () => {
  const { data: currentlyPlayingTrack } = useCurrentlyPlaying(10 * 1000);

  const { track } = parseCurrentlyPlayingTrack(currentlyPlayingTrack);

  if (!currentlyPlayingTrack || !currentlyPlayingTrack?.is_playing || !track) return null;

  return <div className='flex flex-row items-center mt-20 gap-x-1'>
    <div className='animate-spin duration-500'><IconComponent Icon={Disc3} /></div>
    <div>{track.name} by {getArtistNames(track.artist)}</div>
  </div>;
};

const getArtistNames = (artists: any[]) => {
  return artists.map(artist => artist.name).join(', ')
}
