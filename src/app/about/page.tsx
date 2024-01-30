import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'About | Aquib Baig',
  description: 'Product Engineer',
};

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Aquib Baig</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  );
}
