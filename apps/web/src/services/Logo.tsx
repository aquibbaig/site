import { Link } from 'next-view-transitions';

export const Logo = () => {
  return (
    <div className="flex flex-col">
      <Link href={'/'} className="font-medium cursor-pointer">
        stykid.
      </Link>
    </div>
  );
};
