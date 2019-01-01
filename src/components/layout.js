import React from 'react';
import styled from '@emotion/styled';

import Navigation from './navigation';
import { rhythm } from '../utils/typography';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: ${rhythm(30)};
  min-height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <Column>
      <Navigation />

      <main>{children}</main>
    </Column>
  );
}
