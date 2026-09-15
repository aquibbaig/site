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
import { useTheme } from 'next-themes';
import { Toaster } from 'sonner';
import { SpotifyConnectContextProvider } from 'spotify-connect';
import { PHProvider } from './providers';

const neueMontreal = localFont({
  src: '../../public/fonts/neue-montreal.woff',
  weight: '400',
  style: 'normal',
  variable: '--font-neue-montreal',
  display: 'swap',
});

const editorialNew = localFont({
  src: [
    { path: '../../public/fonts/editorial-new.woff', weight: '400', style: 'normal' },
    { path: '../../public/fonts/editorial-new-italic.woff', weight: '400', style: 'italic' },
  ],
  variable: '--font-editorial-new',
  display: 'swap',
});

const geistMono = localFont({
  src: '../../public/fonts/geist-mono.woff2',
  weight: '100 900',
  variable: '--font-geist-mono',
  display: 'swap',
});

export const dynamic = 'force-static';

const queryClient = new QueryClient();

function AppToaster() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      position="top-right"
      style={{ fontFamily: 'inherit' }}
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en" className={clsx(neueMontreal.variable, editorialNew.variable, geistMono.variable)} suppressHydrationWarning>
        <Head>
          <title>Aquib Baig</title>
        </Head>
        <QueryClientProvider client={queryClient}>
          <PHProvider>
            <body
              className={clsx(
                twMerge(
                  'bg-background text-foreground',
                  neueMontreal.className
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
                    'max-w-[752px] mx-auto antialiased flex flex-col gap-8',
                    'py-12 md:py-16 px-8'
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
                <AppToaster />
              </ThemeProvider>
            </body>
          </PHProvider>
        </QueryClientProvider>
      </html>
    </ViewTransitions>
  );
}
