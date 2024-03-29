import { twMerge } from 'tailwind-merge';

export const Button = ({
  children,
  className,
  ...rest
}: { children: React.ReactNode } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      className={twMerge(
        'bg-background-secondary-light border-border-primary-light border px-2 py-1 rounded-md',
        'dark:bg-background-secondary-dark dark:border-border-primary-dark',
        'border border-border-primary-light dark:border-border-primary-dark',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
