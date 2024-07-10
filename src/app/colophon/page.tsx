import { Metadata } from 'next';
import Head from 'next/head';
import { twMerge } from 'tailwind-merge';
import { externalLinkCSS } from '../_lib/helpers';

export const metadata: Metadata = {
  title: 'Colophon | Aquib Baig',
  description: 'Frontend Engineer',
};

export default function Colophon() {
  return (
    <div>
      <Head>
        <title>Colophon | Aquib Baig</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col gap-y-4">
        <h5 className="text-text-muted-light dark:text-text-muted-dark">Colophon</h5>
        <p>This website is designed and developed by Aquib Baig.</p>
        <p>
          It is built using React/Next.js, TypeScript and deployed using{' '}
          <a className={twMerge(externalLinkCSS)} target="_blank" href={`https://vercel.com/`}>
            Vercel
          </a>
          . The typography is set in Söhne by{' '}
          <a
            className={twMerge(externalLinkCSS)}
            target="_blank"
            href={`https://klim.co.nz/retail-fonts/soehne/`}
          >
            Klim Type Foundry
          </a>
          . The source code that powers it can be found on{' '}
          <a
            className={twMerge(externalLinkCSS)}
            target="_blank"
            href={`https://github.com/aquibbaig/site/`}
          >
            GitHub
          </a>
          .
        </p>
        <p>The content on this website is copyrighted.</p>
      </div>
    </div>
  );
}
