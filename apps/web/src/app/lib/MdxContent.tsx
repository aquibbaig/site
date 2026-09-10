'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
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
  return <MDXRemote {...source} components={MdxComponents} />;
}
