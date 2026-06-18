import { ArrowLeft } from 'lucide-react';
import { Link } from 'next-view-transitions';

export default function NotFound() {
  return (
    <div className="grid min-h-[calc(100vh-15rem)] place-items-center rounded-lg border border-border px-6 py-16">
      <div className="mx-auto flex max-w-md flex-col items-center gap-6 text-center">
        <div className="text-7xl font-medium tracking-tight text-foreground">404</div>
        <div className="flex flex-col gap-2">
          <h1 className="mb-0 text-xl font-medium">Page not found</h1>
          <p className="text-muted-foreground">
            The link may be broken, or the page may have been removed.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm hover:border-foreground/40"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
