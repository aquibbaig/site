import { projects } from '@/constants';
import { twMerge } from 'tailwind-merge';

export const Projects = () => {
  return (
    <ul className="flex flex-col">
      {projects.map(({ title, uri, description, status }) => {
        const css = twMerge(
          'hover:bg-background-secondary-light dark:hover:bg-background-secondary-dark',
          'px-3 py-2 -mx-3',
          'rounded-md',
          'flex flex-col truncate',
          'leading-relaxed'
        );
        const Description = (
          <div className="text-text-muted-light dark:text-text-muted-dark text-sm">
            {description}
          </div>
        );

        if (status === 'in-progress')
          return (
            <li key={uri}>
              <div className={css}>
                <span className="text-text-muted-light dark:text-text-muted-dark text-sm">
                  {title}
                </span>
                {Description}
              </div>
            </li>
          );

        return (
          <li key={uri} className={css}>
            <a href={uri || '#'} target="_blank" className="w-full h-full">
              <span>{title}</span>
              {Description}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
