import { IconComponent } from '@/components/ui/IconComponent';
import { Button } from '@/components/ui/button';
import { ProjectType, projects } from '@/constants';
import { Globe } from 'lucide-react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export const Projects = () => {
  return (
    <ul className="flex flex-col gap-y-24 mt-8">
      {projects.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
    </ul>
  );
};

const Project = ({ title, uri, icon, id, year, blog, size }: ProjectType) => {
  return (
    <li key={uri} className={twMerge('flex flex-col flex-nowrap gap-2 w-full', 'leading-relaxed')}>
      <div
        className={twMerge(
          getGradientForProject(id),
          'h-48 md:h-64 2xl:h-80 w-full rounded-md grid place-items-center'
        )}
      >
        <div className="flex flex-row gap-1 items-center">
          <div className="flex flex-row gap-1 items-center">
            <Image src={icon} alt="icon" height={size[0] ?? 48} width={size[1] ?? 48} />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <span>{title}</span>
        <div className="flex flex-row gap-4 items-center">
          <span>{year}</span>
          <a href={uri || '#'} target="_blank" className={twMerge('w-full hover:text-inherit')}>
            <Button size="icon" variant="ghost">
              <IconComponent Icon={Globe} size={14} />
            </Button>
          </a>
        </div>
      </div>
    </li>
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
