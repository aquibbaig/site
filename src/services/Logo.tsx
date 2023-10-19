import Link from 'next/link';

export const Logo = () => {
  return (
    <div className="flex flex-col">
      <Link href={'/'}>Aquib Baig</Link>
      <span className="text-sm text-text-muted-light dark:text-text-muted-dark">
        Frontend Engineer
      </span>
    </div>
  );
};
