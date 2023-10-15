"use client";

import { IconComponent } from "@/components/ui/IconComponent";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  if (theme === "light") {
    return (
      <Button
        onClick={() => {
          setTheme("dark");
        }}
      >
        <IconComponent Icon={Moon} />
      </Button>
    );
  }

  if (theme === "dark") {
    return (
      <Button
        onClick={() => {
          setTheme("light");
        }}
      >
        <IconComponent Icon={Sun} />
      </Button>
    );
  }

  return null;
};
