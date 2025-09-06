import { type LucideIcon, type LucideProps } from 'lucide-react';

export const IconComponent = ({ Icon, ...rest }: { Icon: LucideIcon } & LucideProps) => {
  return (
    <Icon className="text-foreground" size={16} {...rest} />
  );
};
