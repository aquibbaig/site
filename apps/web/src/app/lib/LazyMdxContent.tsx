'use client';

import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import dynamic from 'next/dynamic';

const MdxContent = dynamic(
  () => import('./MdxContent').then((module) => module.MdxContent),
  { ssr: false }
);

export function LazyMdxContent({ source }: { source: MDXRemoteSerializeResult }) {
  return <MdxContent source={source} />;
}
