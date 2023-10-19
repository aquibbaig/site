import { Footer } from '@/components/footer/Footer';
import { SpotifyConnectContextProvider } from '@/packages/spotify-connect';
import { PageHeader } from '@/services/page-header/PageHeader';
import { clsx } from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import { ThemeProvider } from '../services/theme/theme.context';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aquib Baig',
  description: 'Product Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
        <SpotifyConnectContextProvider
          clientId={process.env.SPOTIFY_CLIENT_ID}
          clientSecret={process.env.SPOTIFY_CLIENT_SECRET}
          refreshToken={process.env.SPOTIFY_REFRESH_TOKEN}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="mx-auto my-12 max-w-[676px] px-4 antialiased sm:my-32 md:my-16">
              <PageHeader />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </SpotifyConnectContextProvider>
      </body>
    </html>
  );
}
