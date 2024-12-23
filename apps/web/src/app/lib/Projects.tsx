'use client';

import BenchRoutesLogo from '@/assets/bench-routes.png';
import EnviseLogo from '@/assets/envise.png';
import { type ProjectType } from '@/constants';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import PlugZap from 'lucide-static/icons/plug-zap.svg';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const Projects = () => {
  const [projectDetails, showProjectDetails] = useState<ProjectType | null>(null);

  const ref = useRef(null);
  useOnClickOutside(ref, () => showProjectDetails(null));

  return (
    <div>
      {Boolean(projectDetails) && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 z-50 bg-black/80"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          />
        </AnimatePresence>
      )}
      <AnimatePresence>
        {Boolean(projectDetails) ? (
          <motion.div
            layoutId={`project-${projectDetails?.id}`}
            className="fixed mx-4 outline-none z-50 -ml-4 grid w-full max-w-lg gap-4 border border-border-primary-light dark:border-border-primary-dark bg-background-primary-light dark:bg-background-primary-dark p-6 shadow-lg sm:rounded-xl"
            ref={ref}
          >
            <motion.div
              className={twMerge(
                getGradientForProject(projectDetails?.id!),
                'p-2 rounded-xl size-14 md:size-12 flex flex-col items-center justify-center shrink-0'
              )}
              layoutId={`image-${projectDetails?.id}`}
            >
              <Image src={projectDetails?.icon} alt="icon" />
            </motion.div>
            <div className="flex justify-between w-full items-center h-full">
              <div className="flex flex-col">
                <motion.span
                  layoutId={`title-${projectDetails?.id}`}
                  className="text-sm md:text-[15px] w-[80%]"
                >
                  {projectDetails?.title}
                </motion.span>
                <motion.span
                  layoutId={`alt-${projectDetails?.id}`}
                  className="w-[80%] text-sm md:text-[15px] text-text-secondary-light dark:text-text-secondary-dark"
                >
                  {projectDetails?.subHeading}
                </motion.span>
                <span className="mt-4 text-sm md:text-[15px] text-text-muted-light dark:text-text-muted-dark">
                  {projectDetails?.description}
                </span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-row -mt-16 gap-4 items-center bg-background-secondary-light dark:bg-background-secondary-dark px-2 py-0.5 size-fit rounded-lg"
              >
                <a
                  href={projectDetails?.uri || '#'}
                  target="_blank"
                  className={twMerge(
                    'w-full font-medium text-xs text-[#007AFE] dark:text-[#007AFE]'
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Get
                </a>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <h4>Projects</h4>
      <div className="flex flex-col">
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              {...project}
              showDetails={(project) => showProjectDetails(project)}
            />
          );
        })}
      </div>
    </div>
  );
};

const Project = ({
  showDetails,
  ...project
}: ProjectType & { showDetails: (project: ProjectType) => void }) => {
  const { uri, id, icon, subHeading, title } = project;

  return (
    <motion.div
      className={twMerge(
        'h-20 flex flex-row items-center gap-4 w-full cursor-pointer',
        'leading-relaxed'
      )}
      onClick={() => showDetails(project)}
      layoutId={`project-${id}`}
    >
      <motion.div
        className={twMerge(
          getGradientForProject(id),
          'p-2 rounded-xl size-14 md:size-12 flex flex-col items-center justify-center shrink-0'
        )}
        layoutId={`image-${id}`}
      >
        <Image src={icon} alt="icon" />
      </motion.div>
      <div className="flex justify-between w-full border-b border-border-primary-light/70 dark:border-border-primary-dark items-center h-full">
        <div className="flex flex-col w-[80%]">
          <motion.span layoutId={`title-${id}`} className="text-sm md:text-[15px]">
            {title}
          </motion.span>
          <motion.span
            layoutId={`alt-${id}`}
            className="text-sm md:text-[15px] text-text-secondary-light dark:text-text-secondary-dark"
          >
            {subHeading}
          </motion.span>
        </div>
        <div className="flex flex-row gap-4 items-center bg-background-secondary-light dark:bg-background-secondary-dark px-2 py-0.5 size-fit rounded-lg">
          <a
            href={uri || '#'}
            target="_blank"
            className={twMerge('w-full font-medium text-xs text-[#007AFE] dark:text-[#007AFE]')}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Get
          </a>
        </div>
      </div>
    </motion.div>
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
