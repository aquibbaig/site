import { projects } from '@/constants';
import { twMerge } from 'tailwind-merge';
import { externalLinkCSS } from './helpers';

export const Projects = () => {
  return (
    <ul className="flex flex-col gap-y-4">
      {projects.map(({ title, uri, description, status }) => {
        const css = twMerge('flex flex-col flex-nowrap', 'leading-relaxed');
        const Description = (
          <p className="text-text-muted-light dark:text-text-muted-dark">{description}</p>
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
            <a href={uri || '#'} target="_blank" className={externalLinkCSS}>
              <span>{title}</span>
            </a>
            {Description}
          </li>
        );
      })}
    </ul>
  );
};
