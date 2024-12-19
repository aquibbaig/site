import { LucideIcon, LucideProps } from "lucide-react";

export const IconComponent = ({
  Icon,
  ...rest
}: { Icon: LucideIcon } & LucideProps) => {
  return (
    <Icon
      className="text-text-primary-light dark:text-text-secondary-dark"
      size={16}
      {...rest}
    />
  );
};
