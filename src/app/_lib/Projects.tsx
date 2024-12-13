'use client';

import BenchRoutesLogo from '@/assets/bench-routes.png';
import EnviseLogo from '@/assets/envise.png';
import { Dialog, DialogContent } from '@/components/ui/Dialog';
import { ProjectType } from '@/constants';
import PlugZap from 'lucide-static/icons/plug-zap.svg';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const Projects = () => {
  const [projectDetails, showProjectDetails] = useState<ProjectType | null>(null);

  return (
    <div>
      {Boolean(projectDetails) && (
        <Dialog
          open
          onOpenChange={(open) => {
            if (!open) {
              showProjectDetails(null);
            }
          }}
        >
          <AnimatePresence>
            <DialogContent className="pb-16 !rounded-2xl">
              <motion.div layoutId={`project-${projectDetails?.uri}`}>
                <motion.div
                  className={twMerge(
                    getGradientForProject(projectDetails?.id!),
                    'p-2 rounded-xl size-14 md:size-12 flex flex-col items-center justify-center shrink-0'
                  )}
                  layoutId={`image-${projectDetails?.uri}`}
                >
                  <Image src={projectDetails?.icon} alt="icon" />
                </motion.div>
                <div className="flex justify-between w-full items-center h-full">
                  <div className="flex flex-col w-[80%]">
                    <motion.span
                      layoutId={`title-${projectDetails?.uri}`}
                      className="text-sm md:text-[15px]"
                    >
                      {projectDetails?.title}
                    </motion.span>
                    <motion.span
                      layoutId={`alt-${projectDetails?.uri}`}
                      className="text-sm md:text-[15px] text-text-secondary-light dark:text-text-secondary-dark"
                    >
                      {projectDetails?.description}
                    </motion.span>
                  </div>
                  <div className="flex flex-row gap-4 items-center bg-background-secondary-light dark:bg-background-secondary-dark px-2 py-0.5 size-fit rounded-lg">
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
                  </div>
                </div>
              </motion.div>
            </DialogContent>
          </AnimatePresence>
        </Dialog>
      )}
      <h4>Projects</h4>
      <ul className="flex flex-col">
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              {...project}
              showDetails={(project) => showProjectDetails(project)}
            />
          );
        })}
      </ul>
    </div>
  );
};

const Project = ({
  showDetails,
  ...project
}: ProjectType & { showDetails: (project: ProjectType) => void }) => {
  const { uri, id, icon, subHeading, title } = project;

  return (
    <motion.li
      key={uri}
      className={twMerge(
        'h-20 flex flex-row items-center gap-4 w-full cursor-pointer',
        'leading-relaxed'
      )}
      onClick={() => showDetails(project)}
      layoutId={`project-${uri}`}
    >
      <motion.div
        className={twMerge(
          getGradientForProject(id),
          'p-2 rounded-xl size-14 md:size-12 flex flex-col items-center justify-center shrink-0'
        )}
        layoutId={`image-${uri}`}
      >
        <Image src={icon} alt="icon" />
      </motion.div>
      <div className="flex justify-between w-full border-b border-border-primary-light/70 dark:border-border-primary-dark items-center h-full">
        <div className="flex flex-col w-[80%]">
          <motion.span layoutId={`title-${uri}`} className="text-sm md:text-[15px]">
            {title}
          </motion.span>
          <motion.span
            layoutId={`alt-${uri}`}
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
    </motion.li>
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
    subHeading: 'A note taking app to help reflect and memorize.',
    description: `Envise is note-taking app that helps you reflect on ideas and retain them for the long term.`,
    icon: EnviseLogo,
    size: [48, 48],
  },
  {
    id: 'spotify-connect',
    title: 'Spotify Connect',
    uri: 'https://www.npmjs.com/package/spotify-connect',
    subHeading: 'Integrate spotify APIs in your web applications.',
    description: `An npm package to implement spotify APIs in your web applications.`,
    icon: PlugZap,
    size: [48, 48],
  },
  {
    id: 'bench-routes',
    title: 'Bench Routes',
    uri: 'https://github.com/bench-routes/bench-routes',
    subHeading: 'Open source API monitoring tool.',
    description: `A highly scalable API monitoring and performance analysis tool.`,
    icon: BenchRoutesLogo,
    size: [48, 48],
  },
];
