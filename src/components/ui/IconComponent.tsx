import { LucideIcon } from "lucide-react";

export const IconComponent = ({ Icon, ...rest }: { Icon: LucideIcon }) => {
  return (
    <Icon
      className="text-text-primary-light dark:text-text-secondary-dark"
      {...rest}
      size={16}
    />
  );
};
