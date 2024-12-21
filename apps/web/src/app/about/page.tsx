import { type Metadata } from 'next';
import Head from 'next/head';
import { externalLinkCSS } from '../lib/helpers';
import { RecentTracks } from '../lib/RecentTracks';

export const metadata: Metadata = {
  title: 'About | Aquib Baig',
  description: 'Software Engineer',
};

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Aquib Baig</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-2">
          <p>
            When {`I'm`} not working, I love listening to music, playing football or Counter strike.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-text-muted-light dark:text-text-muted-dark">Experience</h5>
          <p>
            Senior Software Engineer at{' '}
            <a href="https://www.toplyne.io/" target="_blank" className={externalLinkCSS}>
              Toplyne
            </a>
            .
          </p>
          <p>
            Previously,{' '}
            <a href="https://www.redhat.com/en" target="_blank" className={externalLinkCSS}>
              Redhat
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <RecentTracks />
        </div>
      </div>
    </div>
  );
}
