import { twMerge } from "tailwind-merge";

export const Button = ({
  children,
  ...rest
}: { children: React.ReactNode } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      className={twMerge(
        "bg-background-secondary-light border-border-primary-light border p-2 rounded-md",
        "dark:bg-background-secondary-dark dark:border-border-primary-dark"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
