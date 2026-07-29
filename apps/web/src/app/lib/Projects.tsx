'use client';

import BenchRoutesLogo from '@/assets/bench-routes.png';
import EnviseLogo from '@/assets/envise.png';
import { type ProjectType } from '@/constants';
import { cn } from '@repo/ui/cn';
import { ArrowRight } from 'lucide-react';
import PlugZap from 'lucide-static/icons/plug-zap.svg';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const HOME_PROJECT_LIMIT = 2;

export const Projects = ({ preview = false }: { preview?: boolean }) => {
  const visibleProjects = preview ? projects.slice(0, HOME_PROJECT_LIMIT) : projects;

  return (
    <section aria-labelledby="projects-heading">
      <div className="mb-5 flex items-center gap-4">
        <h2 id="projects-heading" className="text-sm font-medium">
          Projects
        </h2>
        {preview ? (
          <Link
            href="/projects"
            className={cn(
              'group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground',
              'border border-border rounded-md px-1.5 py-0.5 text-xs hover:bg-secondary'
            )}
          >
            View all
          </Link>
        ) : (
          <div className="h-px flex-1 bg-border" />
        )}
      </div>
      {preview ? (
        <div className="grid grid-cols-1 gap-4 pt-3 sm:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectPreview key={project.id} {...project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {visibleProjects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      )}
    </section>
  );
};

const ProjectPreview = (project: ProjectType) => {
  const { uri, id, icon, size, subHeading, title } = project;

  return (
    <a
      className="group flex flex-col gap-3 rounded-lg outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring"
      href={uri || '#'}
      target={uri ? '_blank' : undefined}
      rel={uri ? 'noreferrer' : undefined}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-foreground/10 bg-background transition-colors group-hover:border-foreground/30">
        <div
          className={twMerge(
            getGradientForProject(id),
            'absolute -right-10 -top-10 size-32 rounded-full opacity-25 blur-2xl'
          )}
        />
        <div className="relative flex h-full flex-col justify-between p-4">
          <div className="flex items-center justify-between gap-3">
            <div
              className={twMerge(
                getLogoBackgroundForProject(id),
                'flex size-10 shrink-0 items-center justify-center rounded-lg p-2'
              )}
            >
              <Image
                src={icon}
                alt=""
                width={size[0]}
                height={size[1]}
                className="size-full object-contain"
              />
            </div>
            <ArrowRight
              className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
              aria-hidden="true"
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="block text-sm font-medium md:text-[15px]">{title}</span>
              {isNewProject(id) ? <NewProjectTag /> : null}
            </div>
            <span className="block text-sm leading-5 tracking-tight text-muted-foreground">
              {subHeading}
            </span>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-black/15 transition-colors group-hover:ring-black/25 dark:ring-white/10 dark:group-hover:ring-white/20" />
      </div>
    </a>
  );
};

const Project = (project: ProjectType) => {
  const { uri, id, icon, size, subHeading, title } = project;

  return (
    <a
      className={twMerge(
        '-mx-2 min-h-14 flex flex-row items-center gap-4 w-full px-2 py-1',
        'hover:bg-accent',
        'rounded-md cursor-pointer'
      )}
      href={uri || '#'}
      target={uri ? '_blank' : undefined}
      rel={uri ? 'noreferrer' : undefined}
    >
      <div
        className={twMerge(
          getLogoBackgroundForProject(id),
          'p-2 rounded-xl size-10 flex flex-col items-center justify-center shrink-0'
        )}
      >
        <Image src={icon} alt={`${title} icon`} width={size[0]} height={size[1]} />
      </div>
      <div className="flex justify-between w-full items-center h-full">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-medium leading-snug">{title}</span>
            {isNewProject(id) ? <NewProjectTag /> : null}
          </div>
          <span className="text-sm leading-5 text-muted-foreground">{subHeading}</span>
        </div>
      </div>
    </a>
  );
};

function getGradientForProject(projectId: ProjectType['id']) {
  switch (projectId) {
    case 'datapanel':
      return 'bg-gradient-to-r from-[#818CF8] via-[#A78BFA] to-[#5EEAD4] dark:from-[#818CF8]/70 dark:via-[#A78BFA]/70 dark:to-[#5EEAD4]/70';
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

function getLogoBackgroundForProject(projectId: ProjectType['id']) {
  switch (projectId) {
    case 'datapanel':
      return 'bg-[#E8F2FF] dark:bg-[#E8F2FF]/70';
    default:
      return getGradientForProject(projectId);
  }
}

function isNewProject(projectId: ProjectType['id']) {
  return projectId === 'datapanel';
}

function NewProjectTag() {
  return (
    <span className="rounded-full border border-border bg-accent px-1.5 py-0.5 text-[10px] font-medium uppercase leading-none text-muted-foreground">
      New
    </span>
  );
}

const projects: ProjectType[] = [
  {
    id: 'datapanel',
    title: 'DataPanel',
    uri: 'https://github.com/aquibbaig/datapanel',
    subHeading: 'Lightweight, Open source database manager',
    description: `DataPanel is a lightweight, open source desktop database workspace for browsing schemas, running SQL, and keeping structured database context ready for AI-assisted workflows.`,
    icon: '/projects/datapanel.png',
    size: [48, 48],
  },
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
