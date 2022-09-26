import {useRouter} from 'next/router';
import styled from 'styled-components';

import {DOCS_REPO} from '../../../constants';

import {IconExternalLink} from 'components/Icon/IconExternalLink';

const StyledEditPage = styled.div`
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

const baseURL = `https://github.com/${DOCS_REPO}/edit/main/src/pages`;

const IGNORE_PAGES = ['/guides/changelog'];

export default function EditPage() {
  const router = useRouter();

  if (IGNORE_PAGES.includes(router.route)) {
    return null;
  }

  return (
    <StyledEditPage>
      <a
        target="_blank"
        href={`${baseURL}${router.asPath}.md`}
        rel="noreferrer">
        <IconExternalLink />
        edit this guide on github
      </a>
    </StyledEditPage>
  );
}
