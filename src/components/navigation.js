import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { Location } from '@reach/router';

import SettingsIcon from './settings-icon';
import BackArrowIcon from './back-arrow-icon';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 20px 0;
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
