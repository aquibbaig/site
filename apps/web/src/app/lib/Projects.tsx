'use client';

import BenchRoutesLogo from '@/assets/bench-routes.png';
import EnviseLogo from '@/assets/envise.png';
import { type ProjectType } from '@/constants';
import { Separator } from '@repo/ui/components/Separator';
import { ArrowRight } from 'lucide-react';
import PlugZap from 'lucide-static/icons/plug-zap.svg';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { twMerge } from 'tailwind-merge';

const HOME_PROJECT_LIMIT = 2;

export const Projects = ({ preview = false }: { preview?: boolean }) => {
  const visibleProjects = preview ? projects.slice(0, HOME_PROJECT_LIMIT) : projects;

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h5 className="font-medium text-sm">Projects</h5>
        {preview ? (
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            View all
            <span className="inline-flex size-7 items-center justify-center rounded-full border border-border transition-colors group-hover:border-foreground/40">
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </span>
          </Link>
        ) : null}
      </div>
      <Separator />
      {preview ? (
        <div className="grid grid-cols-1 gap-4 pt-3 sm:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectPreview key={project.id} {...project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          {visibleProjects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectPreview = (project: ProjectType) => {
  const { uri, id, icon, subHeading, title } = project;

  return (
    <a
      className="group flex flex-col gap-3 rounded-lg outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring"
      href={uri || '#'}
      target={uri ? '_blank' : undefined}
      rel={uri ? 'noreferrer' : undefined}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-accent/40 p-4 transition-colors group-hover:border-foreground/30">
        <div
          className={twMerge(
            getGradientForProject(id),
            'absolute -right-10 -top-10 size-32 rounded-full opacity-25 blur-2xl'
          )}
        />
        <div className="relative flex h-full flex-col justify-between rounded-md border border-border/70 bg-background/85 p-4 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div
              className={twMerge(
                getGradientForProject(id),
                'flex size-10 shrink-0 items-center justify-center rounded-lg p-2'
              )}
            >
              <Image src={icon} alt="" className="size-full object-contain" />
            </div>
            <ArrowRight
              className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
              aria-hidden="true"
            />
          </div>
          <div className="space-y-1.5">
            <span className="block text-sm font-medium md:text-[15px]">{title}</span>
            <span className="block text-sm leading-5 tracking-tight text-muted-foreground">
              {subHeading}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

const Project = (project: ProjectType) => {
  const { uri, id, icon, subHeading, title } = project;

  return (
    <a
      className={twMerge(
        '-mx-2 h-16 flex flex-row items-center gap-4 w-full px-2',
        'hover:bg-accent',
        'rounded-md cursor-pointer'
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
