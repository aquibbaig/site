'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

const env = process.env.NODE_ENV;

if (typeof window !== 'undefined' && env === 'production') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  if (env !== 'production') {
    return <>{children}</>;
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
