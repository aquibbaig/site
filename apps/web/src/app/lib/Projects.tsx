'use client';

import BenchRoutesLogo from '@/assets/bench-routes.png';
import EnviseLogo from '@/assets/envise.png';
import { type ProjectType } from '@/constants';
import { Separator } from '@repo/ui/components/Separator';
import PlugZap from 'lucide-static/icons/plug-zap.svg';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export const Projects = () => {
  return (
    <div>
      <h5 className="font-medium text-sm">Projects</h5>
      <Separator />
      <div className="flex flex-col md:-mx-4">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

const Project = (project: ProjectType) => {
  const { uri, id, icon, subHeading, title } = project;

  return (
    <a
      className={twMerge(
        'h-16 flex flex-row items-center gap-4 w-full',
        'hover:bg-accent',
        'md:px-4 rounded-md cursor-pointer'
      )}
      href={uri || '#'}
      target={uri ? '_blank' : undefined}
      rel={uri ? 'noreferrer' : undefined}
    >
      <div
        className={twMerge(
          getGradientForProject(id),
          'p-2 rounded-xl size-10 flex flex-col items-center justify-center shrink-0'
        )}
      >
        <Image src={icon} alt="icon" />
      </div>
      <div className="flex justify-between w-full items-center h-full">
        <div className="flex flex-col">
          <span className="text-sm md:text-[15px]">{title}</span>
          <span className="text-sm text-muted-foreground tracking-tight">{subHeading}</span>
        </div>
      </div>
    </a>
  );
};

function getGradientForProject(projectId: ProjectType['id']) {
  switch (projectId) {
    case 'envise':
      return 'bg-gradient-to-r from-[#3D63DB] to-[#3D63DB] dark:from-[#3D63DB]/70 dark:to-[#3D63DB]/70';
    case 'spotify-connect':
      return 'bg-gradient-to-r from-[#FBE57D] to-[#FBE57D] dark:from-[#FBE57D]/70 dark:to-[#FBE57D]/70';
    case 'bench-routes':
      return 'bg-gradient-to-r from-[#F7F7F7] via-[#F7F7F7] to-[#F7F7F7]';
    default:
      return 'text-[#000] bg-gradient-to-r from-[#ddd6f3] to-[#faaca8]';
  }
}

const projects: ProjectType[] = [
  {
    id: 'envise',
    title: 'Envise',
    uri: 'https://envise.app',
    subHeading: 'A note taking app to help reflect and memorize',
    description: `Envise is note-taking app that helps you reflect on ideas and retain them for the long term.`,
    icon: EnviseLogo,
    size: [48, 48],
  },
  {
    id: 'spotify-connect',
    title: 'Spotify Connect',
    uri: 'https://www.npmjs.com/package/spotify-connect',
    subHeading: 'Integrate spotify APIs in your web applications',
    description: `spotify-connect is an npm package to implement spotify APIs directly in your web applications.`,
    icon: PlugZap,
    size: [48, 48],
  },
  {
    id: 'bench-routes',
    title: 'Bench Routes',
    uri: 'https://github.com/bench-routes/bench-routes',
    subHeading: 'Open source API monitoring tool',
    description: `Bench routes is a highly scalable API monitoring and performance analysis tool written in Go.`,
    icon: BenchRoutesLogo,
    size: [48, 48],
  },
];
