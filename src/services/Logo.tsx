import { Link } from 'next-view-transitions';

export const Logo = () => {
  return (
    <div className="flex flex-col">
      <Link href={'/'} className="font-medium">
        Aquib Baig
      </Link>
      <span className="text-sm text-text-muted-light dark:text-text-muted-dark">
        Software Engineer
      </span>
    </div>
  );
};
