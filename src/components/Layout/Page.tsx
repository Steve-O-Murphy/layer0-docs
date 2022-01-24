import { MenuProvider } from 'components/useMenu';
import * as React from 'react';
import styled from "styled-components";
import Sidebar from './Sidebar/Sidebar';
import { RouteItem, SidebarContext } from './useRouteMeta';

interface PageProps {
  children: React.ReactNode;
  routeTree: RouteItem;
}


const StyledDocs = styled.div`
--sidebar-width: 280px;
--header-height: 64px;

  .docs-header {
    position: sticky;
    top: 0;
    z-index: 1;
background: white;
width: 100%;
height: var(--header-height);
box-shadow: inset 0 -1px #e3e8ee;
padding: 17px 17px 17px 32px;
  }


  .docs-content {
    width: 100%;
    display: flex;

.docs-side__nav {
position: sticky;
left: 0;
top: var(--header-height);
height: calc(100vh - var(--header-height));
width: var(--sidebar-width);
overflow: auto;
user-select: none;
background-color: #f6f6f7;
padding: 20px 0;
box-shadow: inset -1px 0px #e3e8ee;
}

.docs-content__inner {
  min-height: 100vh;
/* background: teal; */
flex: 1;

.LayoutHome {
  max-width: 1000px;
  /* background: black; */
margin: 0 auto;
padding: 2rem 1rem;
}
}
  }
`


export function Page({ routeTree, children }: PageProps) {
  return (
    <MenuProvider>
      <SidebarContext.Provider value={routeTree}>
        <StyledDocs className="docs">
          <header className="docs-header">
            <h1>Header</h1>
          </header>
          <main className="docs-content">
            {/* app-content */}
            <div className='docs-side__nav'>
              <Sidebar />
            </div>
            <div className="docs-content__inner">
              {children}
            </div>
          </main>

        </StyledDocs>
      </SidebarContext.Provider>
    </MenuProvider>
  );
}
