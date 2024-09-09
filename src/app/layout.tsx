'use client';

import { PageHeader } from '@/services/page-header/PageHeader';
import { clsx } from 'clsx';
import { ViewTransitions } from 'next-view-transitions';
import Head from 'next/head';
import { SpotifyConnectContextProvider } from 'spotify-connect';
import { twMerge } from 'tailwind-merge';
import { ThemeProvider } from '../services/theme/theme.context';
import './globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import localFont from 'next/font/local';
import { Footer } from './_lib/Footer';
import { PHProvider } from './providers';

const soehne = localFont({
  src: [
    {
      path: '../../public/fonts/test-soehne-extraleicht.woff2',
      weight: '200',
    },
    {
      path: '../../public/fonts/test-soehne-leicht.woff2',
      weight: '300',
    },
    {
      path: '../../public/fonts/test-soehne-buch.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/test-soehne-kraftig.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/test-soehne-halbfett.woff2',
      weight: '600',
    },
    {
      path: '../../public/fonts/test-soehne-dreiviertelfett.woff2',
      weight: '700',
    },
    {
      path: '../../public/fonts/test-soehne-fett.woff2',
      weight: '800',
    },
  ],
  variable: '--font-soehne',
});

export const dynamic = 'force-static';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <Head>
          <title>Aquib Baig</title>
        </Head>
        <QueryClientProvider client={queryClient}>
          <PHProvider>
            <body
              className={clsx(
                twMerge(
                  'bg-background-primary-light text-text-primary-light',
                  'dark:text-text-primary-dark dark:bg-background-primary-dark',
                  `${soehne.variable} font-sans`
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
                  <main
                    className={twMerge(
                      'mx-auto md:max-w-[60ch] px-3 antialiased flex flex-col gap-y-16',
                      'pt-12 md:pt-16 h-screen'
                    )}
                  >
                    <PageHeader />
                    <div className="grow">{children}</div>
                    <footer className="md:sticky md:bottom-0 flex flex-col bg-background-primary-light dark:bg-background-primary-dark gap-y-2 border-t border-border-primary-light dark:border-border-primary-dark py-6">
                      <Footer />
                    </footer>
                  </main>
                </SpotifyConnectContextProvider>
              </ThemeProvider>
            </body>
          </PHProvider>
        </QueryClientProvider>
      </html>
    </ViewTransitions>
  );
}
