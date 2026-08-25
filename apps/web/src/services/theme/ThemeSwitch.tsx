'use client';

import { useIsClient } from '@/hooks/useIsClient';
import { Button } from '@repo/ui/components/Button';
import { IconComponent } from '@repo/ui/components/IconComponent';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeSwitch = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  const isLight = theme === 'light' || (theme === 'system' && systemTheme === 'light');
  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  if (isLight) {
    return (
      <Button
        aria-label="Switch to dark mode"
        onClick={() => {
          setTheme('dark');
        }}
        variant="ghost"
        size="icon"
      >
        <IconComponent Icon={Sun} size={15} />
      </Button>
    );
  }

  if (isDark) {
    return (
      <Button
        aria-label="Switch to light mode"
        onClick={() => {
          setTheme('light');
        }}
        variant="ghost"
        size="icon"
      >
        <IconComponent Icon={Moon} size={15} />
      </Button>
    );
  }

  return null;
};
