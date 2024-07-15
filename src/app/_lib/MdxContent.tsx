'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Code } from '../blog/[slug]/_lib/Code';

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

const MdxComponents = {
  pre: (props: any) => Code(props),
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={MdxComponents} />;
}
