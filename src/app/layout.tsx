import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../services/theme/theme.context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aquib Baig',
  description: 'Product Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col m-auto max-w-2xl p-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
