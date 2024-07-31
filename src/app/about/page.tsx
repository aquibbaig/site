import { Metadata } from 'next';
import Head from 'next/head';
import { externalLinkCSS } from '../_lib/helpers';

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
      <div className="flex flex-col gap-y-4">
        <h5 className="text-text-muted-light dark:text-text-muted-dark">About</h5>
        <div className="flex flex-col gap-4">
          <p>
            I am a frontend engineer based in Bangalore, India. I work closely with designers and
            product managers to build products that are accessible, performant, and delightful to
            use. I am passionate about building high-quality software that is scalable and
            maintainable.
          </p>
          <p>
            I keep a keen interest in capturing the best parts of life and sharing them with the
            world, enjoy finding peace in quiet moments -- just being without any rush or busyness.
          </p>
        </div>
        <p>
          Currently at{' '}
          <a href="https://www.toplyne.io/" target="_blank" className={externalLinkCSS}>
            Toplyne
          </a>
          , previously at{' '}
          <a href="https://www.redhat.com/en" target="_blank" className={externalLinkCSS}>
            Redhat
          </a>
          .
        </p>
      </div>
    </div>
  );
}
