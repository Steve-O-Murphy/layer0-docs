/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { DocsPageFooter } from 'components/DocsFooter';
import { MDXComponents } from 'components/MDX/MDXComponents';
import { Seo } from 'components/Seo';
import PageHeading from 'components/PageHeading';
import { useRouteMeta } from './useRouteMeta';
import { Toc } from './Toc';
export interface MarkdownProps<Frontmatter> {
  meta: Frontmatter & { description?: string };
  children?: React.ReactNode;
}

function MaxWidth({ children }: { children: any }) {
  return <div className="max-w-4xl ml-0 2xl:mx-auto">{children}</div>;
}

export function MarkdownPage<
  T extends { title: string; status?: string } = { title: string; status?: string }
>({ children, meta }: MarkdownProps<T>) {
  const { route, nextRoute, prevRoute } = useRouteMeta();
  const title = meta.title || route?.title || '';
  const description = meta.description || route?.description || '';

  let anchors: Array<{
    url: string;
    text: React.ReactNode;
    depth: number;
  }> = React.Children.toArray(children)
    .filter((child: any) => {
      if (child.props?.mdxType) {
        return ['h1', 'h2', 'h3', 'Challenges', 'Recipes', 'Recap'].includes(
          child.props.mdxType
        );
      }
      return false;
    })
    .map((child: any) => {
      if (child.props.mdxType === 'Challenges') {
        return {
          url: '#challenges',
          depth: 0,
          text: 'Challenges',
        };
      }
      if (child.props.mdxType === 'Recipes') {
        return {
          url: '#recipes',
          depth: 0,
          text: 'Recipes',
        };
      }
      if (child.props.mdxType === 'Recap') {
        return {
          url: '#recap',
          depth: 0,
          text: 'Recap',
        };
      }
      return {
        url: '#' + child.props.id,
        depth:
          (child.props?.mdxType &&
            parseInt(child.props.mdxType.replace('h', ''), 0)) ??
          0,
        text: child.props.children,
      };
    });
  if (anchors.length > 0) {
    anchors.unshift({
      depth: 1,
      text: 'Overview',
      url: '#',
    });
  }

  if (!route) {
    console.error('This page was not added to one of the sidebar JSON files.');
  }
  const isHomePage = route?.path === '/';

  // Auto-wrap everything except a few types into
  // <MaxWidth> wrappers. Keep reusing the same
  // wrapper as long as we can until we meet
  // a full-width section which interrupts it.
  // let fullWidthTypes = [
  //   'Sandpack',
  //   'APIAnatomy',
  //   'FullWidth',
  //   'Illustration',
  //   'IllustrationBlock',
  //   'Challenges',
  //   'Recipes',
  // ];
  // let wrapQueue: React.ReactNode[] = [];
  // let finalChildren: React.ReactNode[] = [];
  // function flushWrapper(key: string | number) {
  //   if (wrapQueue.length > 0) {
  //     finalChildren.push(<MaxWidth key={key}>{wrapQueue}</MaxWidth>);
  //     wrapQueue = [];
  //   }
  // }
  // function handleChild(child: any, key: string | number) {
  //   if (child == null) {
  //     return;
  //   }
  //   if (typeof child !== 'object') {
  //     wrapQueue.push(child);
  //     return;
  //   }
  //   if (fullWidthTypes.includes(child.props.mdxType)) {
  //     flushWrapper(key);
  //     finalChildren.push(child);
  //   } else {
  //     wrapQueue.push(child);
  //   }
  // }
  // React.Children.forEach(children, handleChild);
  // flushWrapper('last');

  return (
    <div className="l0-container" style={{ maxWidth: "1175px", padding: "0 48px", margin: "0 auto" }}>
      <MDXProvider components={MDXComponents}>
        {children}
      </MDXProvider>
    </div>
  );
}
