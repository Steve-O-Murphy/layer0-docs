// @ts-nocheck

import {MDXProvider} from '@mdx-js/react';
import {useRouter} from 'next/router';
import * as React from 'react';
import {MDXComponents} from '../MDX/MDXComponents';
import Docs from '../Docs';
import Seo from '../Seo';
import DocsFooter from '../Docs/DocsFooter';

export interface MarkdownProps<Frontmatter> {
  meta: Frontmatter & {description?: string};
  children?: React.ReactNode;
}

export function MarkdownPage<
  T extends {title: string; status?: string} = {
    title: string;
    status?: string;
  }
>({children, meta}: MarkdownProps<T>) {
  const {route} = useRouter();

  // const {route, nextRoute, prevRoute} = useRouteMeta();
  const title = meta.title || route || '';
  // const description = meta.description || route?.description || '';

  if (!route) {
    console.error('This page was not added to one of the sidebar JSON files.');
  }

  const isHomePage = route === '/';

  const tocHeadings = React.Children.toArray(children)
    .filter((child) => {
      if (child.props?.mdxType) {
        return ['h1', 'h2', 'h3'].includes(child.props.mdxType);
      }
      return false;
    })
    .map((child: any) => ({
      url: `#${child.props.id}`,
      depth:
        (child.props?.mdxType &&
          parseInt(child.props.mdxType.replace('h', ''), 0)) ??
        0,
      text: child.props.children,
    }));

  if (tocHeadings.length > 0) {
    tocHeadings.unshift({
      depth: 1,
      text: 'Overview',
      url: '#',
    });
  }

  return (
    <MDXProvider components={MDXComponents}>
      <Seo {...{isHomePage, title}} />

      {isHomePage ? (
        children
      ) : (
        <div className="docs">
          <Docs title={title} tocHeadings={tocHeadings}>
            {children}
          </Docs>
        </div>
      )}
      <DocsFooter />
    </MDXProvider>
  );
}