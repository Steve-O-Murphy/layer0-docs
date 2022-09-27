import {useRouter} from 'next/router';
import styled from 'styled-components';

import {FORUM_URL, DOCS_URL} from '../../../constants';

import {IconForum} from 'components/Icon';
import {getItemByRoute} from 'utils/getChildrenRoutesFromSidebarMenuItems';

const StyledLink = styled.div`
  margin-top: 50px;

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    border: 2px solid var(--hr-secondary);
    padding: 20px;
    border-radius: 4px;
    text-align: center;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    color: var(--colors-blue0);
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;
    gap: 8px;
    position: relative;
    transition: transform 0.1s;

    &:hover {
      transform: scale(1.01);
    }
  }
`;

const StyledIcon = styled.div`
  text-align: end;

  a {
    display: flex;
    justify-content: center;
    border: 2px solid var(--hr-secondary);
    padding: 8px;
    border-radius: 4px;
    text-align: center;
    display: inline-flex;
    align-items: center;
    color: var(--colors-blue0);
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;
    text-decoration: none;
    gap: 8px;
    position: relative;
    transition: transform 0.1s;

    &:hover {
      transform: scale(1.01);
    }

    svg {
      fill: var(--colors-blue0);
    }
  }
`;

const baseURL = `https://discourse.example.com/new-topic?title=topic%20title&body=topic%20body&category=category/subcategory&tags=email,planned
`;
const title = 'Discuss this guide on Discourse';
const IGNORE_PAGES = ['/guides/changelog'];

function createLink({
  title,
  body,
  category = 'product-feedback',
}: {
  title: string;
  body: string;
  category?: string;
}) {
  encodeURIComponent(title);
  return `${FORUM_URL}/new-topic?title=${encodeURIComponent(
    title
  )}&body=${encodeURIComponent(body)}&category=${encodeURIComponent(category)}
`;
}

export default function DiscourseDiscuss({
  as = 'link',
}: {
  as?: 'icon' | 'link';
}) {
  const router = useRouter();
  const guide = getItemByRoute(router.route);

  if (IGNORE_PAGES.includes(router.route) || !guide) {
    return null;
  }

  if (as === 'icon') {
    return (
      <StyledIcon>
        <a
          target="_blank"
          href={createLink({
            title: `Feedback on '${guide.title}' guide`,
            body: `I have a question/issue with the '[${guide.title}](${DOCS_URL}${router.route})' guide:\n\n`,
          })}
          rel="noreferrer"
          title={title}>
          <IconForum />
        </a>
      </StyledIcon>
    );
  }

  return (
    <StyledLink>
      <a
        target="_blank"
        href={`${baseURL}${router.asPath}.md`}
        rel="noreferrer">
        <IconForum />
        {title}
      </a>
    </StyledLink>
  );
}
