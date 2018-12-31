import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';

const TitleBg = styled.div`
  background-color: #dd7676;
  box-shadow: 10px 10px #2d3441;
  max-width: 70%;
  margin: 100px auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  padding: ${rhythm(2)};
  color: #f6f8fa;
  text-align: center;
`;

const Button = styled(Link)`
  background-color: #6ca37c;
  padding: 10px 15px;
  text-decoration: none;
  color: white;
  box-shadow: 4px 4px #474f5c;
  transition: all 150ms ease-in-out;

  margin: 40px auto;

  &:hover {
    box-shadow: 2px 2px #474f5c;
    color: #f3f3f3;
  }
`;

const Text = styled.p`
  text-align: center;
  margin: 40px 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { TitleBg, Title, Button, Text, Content };
