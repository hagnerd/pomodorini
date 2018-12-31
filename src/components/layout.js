import React from 'react';
import styled from '@emotion/styled';

import { rhythm } from '../utils/typography';

import Navigation from './navigation';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: ${rhythm(30)};
  min-height: 100vh;
`;

const Footer = styled.footer`
  width: 100%;

  @media (min-width: 700px) {
    display: none;
  }
`;

export default function Layout({ children }) {
  return (
    <Column>
      <Navigation />

      <main>{children}</main>

      <Footer>
        <p>Controls will go here</p>
      </Footer>
    </Column>
  );
}
