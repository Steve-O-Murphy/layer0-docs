import Link from 'next/link';
import styled from 'styled-components';
import {IconAngular} from '../Icon/IconAngular';
import {IconAstro, IconAstroDark} from '../Icon/IconAstro';
import {IconBook} from '../Icon/IconBook';
import {IconEmberJS} from '../Icon/IconEmberJS';
import {IconGatsby} from '../Icon/IconGatsby';
import {IconGridsome, IconGridsomeDark} from '../Icon/IconGridsome';
import {IconNextJS, IconNextJSDark} from '../Icon/IconNextJS';
import {
  IconNextJSCommerce,
  IconNextJSCommerceDark,
} from '../Icon/IconNextJSCommerce';
import {IconPreact} from '../Icon/IconPreact';
import {IconReact} from '../Icon/IconReact';
import {IconReactStatic} from '../Icon/IconReactStatic';
import {IconRemix, IconRemixDark} from '../Icon/IconRemix';
import {IconServerlessFunctions} from '../Icon/IconServerlessFunctions';
import {IconSolidJS} from '../Icon/IconSolidJS';
import {IconSvelte} from '../Icon/IconSvelte';
import {IconVue} from '../Icon/IconVue';
import {StyledFeatureSection} from './FeatureSection';
import SectionHeader from './SectionHeader';
import {getChildrenRoutesFromSidebarMenuItems} from '../../utils/getChildrenRoutesFromSidebarMenuItems';
import {IconArrow} from 'components/Icon/IconArrow';

const StyledComp = styled(StyledFeatureSection)`
  .icon {
    --size: 24px;
    width: var(--size);
    height: var(--size);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .route-items__col3 {
    .route-list__item:last-child {
      a {
        color: var(--pink);
        font-weight: initial;
        display: flex;
        column-gap: 7px;
      }
    }
  }
`;

interface IRoutesProps {
  title: string;
  path: string;
  icon?: {
    light: JSX.IntrinsicElements['svg'];
    dark: JSX.IntrinsicElements['svg'];
  };
}

export default function DeveloperTools() {
  const routesCol1: Array<IRoutesProps> = [
    {
      title: 'Next.js',
      path: 'next',
      icon: {
        light: <IconNextJS />,
        dark: <IconNextJSDark />,
      },
    },
    {
      title: 'React',
      path: 'react',
      icon: {
        light: <IconReact />,
        dark: <IconReact />,
      },
    },
    {
      title: 'Vue Storefront',
      path: 'vsf',
      icon: {
        light: <IconVue />,
        dark: <IconVue />,
      },
    },
    {
      title: 'Gatsby',
      path: 'gatsby',
      icon: {
        light: <IconGatsby />,
        dark: <IconGatsby />,
      },
    },
    {
      title: 'Vue.js',
      path: 'vue',
      icon: {
        light: <IconVue />,
        dark: <IconVue />,
      },
    },
    {
      title: 'Angular',
      path: 'angular',
      icon: {
        light: <IconAngular />,
        dark: <IconAngular />,
      },
    },
  ];
  const routesCol2: Array<IRoutesProps> = [
    {
      title: 'Serverless functions',
      path: 'serverless_functions',
      icon: {
        light: <IconServerlessFunctions />,
        dark: <IconServerlessFunctions />,
      },
    },
    {
      title: 'Remix',
      path: 'remix',
      icon: {
        light: <IconRemix />,
        dark: <IconRemixDark />,
      },
    },
    {
      title: 'Next.js Commerce',
      path: 'next_commerce',
      icon: {
        light: <IconNextJSCommerce />,
        dark: <IconNextJSCommerceDark />,
      },
    },
    {
      title: 'Svelte',
      path: 'svelte',
      icon: {
        light: <IconSvelte />,
        dark: <IconSvelte />,
      },
    },
    {
      title: 'SolidJS',
      path: 'solid',
      icon: {
        light: <IconSolidJS />,
        dark: <IconSolidJS />,
      },
    },
    {
      title: 'React Static',
      path: 'react_static',
      icon: {
        light: <IconReactStatic />,
        dark: <IconReactStatic />,
      },
    },
  ];
  const routesCol3: Array<IRoutesProps> = [
    {
      title: 'Ionic Vue',
      path: 'ionic_vue',
      icon: {
        light: <IconVue />,
        dark: <IconVue />,
      },
    },
    {
      title: 'Gridsome',
      path: 'gridsome',
      icon: {
        light: <IconGridsome />,
        dark: <IconGridsomeDark />,
      },
    },
    {
      title: 'Preact',
      path: 'preact',
      icon: {
        light: <IconPreact />,
        dark: <IconPreact />,
      },
    },
    {
      title: 'Ember.js',
      path: 'ember',
      icon: {
        light: <IconEmberJS />,
        dark: <IconEmberJS />,
      },
    },
    {
      title: 'Astro',
      path: 'astro',
      icon: {
        light: <IconAstro />,
        dark: <IconAstroDark />,
      },
    },
  ];

  // const parentPath = 'framework-guides';

  const routes = [routesCol1, routesCol2, routesCol3];

  return (
    <StyledComp>
      <SectionHeader
        Icon={IconBook}
        title="Framework Guides"
        subtitle="Utilize Layer0 CDN on your pre-existing site, or use one of our templates."
      />

      <div className="route-items">
        {routes.map((route, index) => (
          <div className={`route-items__col${index + 1}`} key={index}>
            <ul className="route-list__items">
              {route.map(({path, title, icon}) => (
                <li className="route-list__item" key={title}>
                  {icon ? (
                    <>
                      <div id="dark-theme-switcher" className="icon">
                        {icon.light}
                      </div>
                      <div id="light-theme-switcher" className="icon">
                        {icon.dark}
                      </div>
                    </>
                  ) : (
                    <div className="dot" />
                  )}
                  <Link href={`/guides/${path}`}>{title}</Link>
                </li>
              ))}
              {index === 2 && (
                <li className="route-list__item">
                  <Link href="/guides/jamstack_getting_started" passHref>
                    <a>
                      <span>View all supported</span>
                      <IconArrow displayDirection="right" />
                    </a>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </StyledComp>
  );
}