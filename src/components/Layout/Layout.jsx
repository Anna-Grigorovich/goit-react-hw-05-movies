import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import c from './Layout.module.css';

const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orangered;
  }
`;

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={c.HeaderList}>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
