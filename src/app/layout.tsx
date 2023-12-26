'use client';

import { PageHeader } from '@/services/page-header/PageHeader';
import { clsx } from 'clsx';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { SpotifyConnectContextProvider } from 'spotify-connect';
import { twMerge } from 'tailwind-merge';
import { ThemeProvider } from '../services/theme/theme.context';
import { Playing } from './_lib/Playing';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Aquib Baig</title>
      </Head>
      <body
        className={clsx(
          inter.className,
          twMerge(
            'bg-background-primary-light text-text-primary-light',
            'dark:text-text-primary-dark dark:bg-background-primary-dark',
            'text-[0.9375rem] leading-relaxed'
          )
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SpotifyConnectContextProvider
            refreshToken={process.env.NEXT_PUBLIC_REFRESH_TOKEN}
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
            clientSecret={process.env.NEXT_PUBLIC_CLIENT_SECRET}
          >
            <main className="mx-auto my-12 md:max-w-[612px] px-3 antialiased sm:my-32 md:mt-16 md:mb-32">
              <PageHeader />
              {children}
              <Playing />
            </main>
          </SpotifyConnectContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
