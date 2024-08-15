import { Metadata } from 'next';
import Head from 'next/head';
import { externalLinkCSS } from '../_lib/helpers';
import { Playing } from '../_lib/Playing';

export const metadata: Metadata = {
  title: 'About | Aquib Baig',
  description: 'Frontend Engineer',
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
          <h5 className="text-text-muted-light dark:text-text-muted-dark">About</h5>
          <div className="flex flex-col gap-4">
            <p>
              I keep a keen interest in capturing the best parts of life and sharing them with the
              world, enjoy finding peace in quiet moments -- just being without any rush or
              busyness.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-text-muted-light dark:text-text-muted-dark">Experience</h5>
          <p>
            Working as a Senior Software Engineer at{' '}
            <a href="https://www.toplyne.io/" target="_blank" className={externalLinkCSS}>
              Toplyne
            </a>{' '}
            since 12 / 2021.
          </p>
          <p>
            In the past, {`I've`} worked as a Software Engineer at{' '}
            <a href="https://www.redhat.com/en" target="_blank" className={externalLinkCSS}>
              Redhat
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Playing />
        </div>
      </div>
    </div>
  );
}
