import React from 'react';
import { Link as Glink } from 'gatsby';
import styled from '@emotion/styled';
import { Location } from '@reach/router';

import SettingsIcon from './settings-icon';
import BackArrowIcon from './back-arrow-icon';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 70px;
  width: 100%;
  margin-bottom: 20px;

  background-color: #6ca37c;

  box-shadow: 4px 4px #2d3441;
`;

const Link = styled(Glink)`
  padding: 18px 10px 10px 10px;
`;

export default function Navigation() {
  return (
    <Location>
      {({ location }) => (
        <header>
          <Nav>
            {location.pathname !== '/' && (
              <Link style={{ marginRight: 'auto' }} to="/">
                <span role="img" aria-label="back icon">
                  <BackArrowIcon />
                </span>
              </Link>
            )}
            <Link to="/settings">
              <span role="img" aria-label="settings icon">
                <SettingsIcon />
              </span>
            </Link>
          </Nav>
        </header>
      )}
    </Location>
  );
}
