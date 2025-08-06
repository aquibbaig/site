'use client';

import { Button } from '@repo/ui/components/Button';
import { IconComponent } from '@repo/ui/components/IconComponent';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwitch = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTheme('system');
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        variant="outline"
        size="icon"
      >
        <IconComponent Icon={Sun} size={15} />
      </Button>
    );
  }

  if (isDark) {
    return (
      <Button
        onClick={() => {
          setTheme('light');
        }}
        variant="outline"
        size="icon"
      >
        <IconComponent Icon={Moon} size={15} />
      </Button>
    );
  }

  return null;
};
