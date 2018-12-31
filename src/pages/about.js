import React from 'react';

import Layout from '../components/layout';
import { Content, Title, TitleBg, Button, Text } from './_about.elements';
import useLocalStorage from '../hooks/useLocalStorage';

const About = () => {
  const [hasVisited, setHasVisited] = useLocalStorage(
    'pomodoriniHasVisited',
    false,
  );

  if (!hasVisited) {
    setHasVisited(true);
  }

  return (
    <Layout>
      <React.Fragment>
        <TitleBg>
          <Title>Pomodorini</Title>
        </TitleBg>

        <Content>
          <h2 style={{ marginBottom: '50px' }}>
            A little tool for getting big things done.
          </h2>
          <h3>Set smaller goals with shorter deadlines.</h3>
          <h3>Increase focus by working in rhythms.</h3>
          <Button to="/">Get Started</Button>
        </Content>
      </React.Fragment>
    </Layout>
  );
};

export default About;
