'use client';

import { IconComponent } from '@/components/ui/IconComponent';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwitch = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const isLight = theme === 'light' || (theme === 'system' && systemTheme === 'light');
  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  if (isLight) {
    return (
      <Button
        onClick={() => {
          setTheme('dark');
        }}
        className="w-8 h-8"
      >
        <IconComponent Icon={Moon} size={15} />
      </Button>
    );
  }

  if (isDark) {
    return (
      <Button
        onClick={() => {
          setTheme('light');
        }}
        className="w-8 h-8"
      >
        <IconComponent Icon={Sun} size={15} />
      </Button>
    );
  }

  return null;
};
