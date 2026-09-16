'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useEffect } from 'react';
import { Code } from '../blog/[slug]/_lib/Code';
import { PhotoMasonry } from './PhotoMasonry';

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

const MdxComponents = {
  PhotoMasonry,
  pre: Code,
};

export function MdxContent({ source }: MdxContentProps) {
  useEffect(() => {
    // MDX loads after the browser's initial fragment navigation.
    const hash = window.location.hash.slice(1);

    if (!hash) return;

    try {
      document.getElementById(decodeURIComponent(hash))?.scrollIntoView();
    } catch {
      // Ignore malformed fragments supplied in external URLs.
    }
  }, [source]);

  return <MDXRemote {...source} components={MdxComponents} />;
}
