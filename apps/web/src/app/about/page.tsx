import { type Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';

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
        <div className="flex flex-col items-start gap-6">
          <Image
            src="/logo.jpg"
            alt="Aquib Baig"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="flex flex-col gap-2">
            <p>
              When {`I'm`} not working, I love listening to music, playing football or Counter strike.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-muted-foreground">Experience</h5>
          <p>
            Senior Software Engineer at{' '}
            <a href="https://www.coderabbit.ai/" target="_blank" className="external-link">
              CodeRabbit
            </a>
            .
          </p>
          <p>
            Previously,{' '}
            <a href="https://www.toplyne.io/" target="_blank" className="external-link">
              Toplyne
            </a>
            {` & `}
            <a href="https://www.redhat.com/en" target="_blank" className="external-link">
              Redhat
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
