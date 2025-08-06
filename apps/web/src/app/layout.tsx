'use client';

import { PageHeader } from '@/services/page-header/PageHeader';
import { clsx } from 'clsx';
import { ViewTransitions } from 'next-view-transitions';
import Head from 'next/head';
import { twMerge } from 'tailwind-merge';
import { ThemeProvider } from '../services/theme/theme.context';
import './globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import localFont from 'next/font/local';
import { SpotifyConnectContextProvider } from 'spotify-connect';
import { PHProvider } from './providers';
import { GeistMono } from 'geist/font/mono';

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
                  GeistMono.className
                )
              )}
            >
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <main
                  className={twMerge(
                    'mx-auto md:max-w-[500px] px-3 antialiased flex flex-col gap-8',
                    'py-12 md:py-16'
                  )}
                >
                  <PageHeader />
                  <SpotifyConnectContextProvider
                    refreshToken={process.env.NEXT_PUBLIC_REFRESH_TOKEN}
                    clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
                    clientSecret={process.env.NEXT_PUBLIC_CLIENT_SECRET}
                  >
                    {children}
                  </SpotifyConnectContextProvider>
                </main>
              </ThemeProvider>
            </body>
          </PHProvider>
        </QueryClientProvider>
      </html>
    </ViewTransitions>
  );
}
