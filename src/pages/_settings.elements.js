import styled from '@emotion/styled';
import { Link as Glink } from 'gatsby';

const Link = styled(Glink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: #6ca37c;
  padding: 10px 15px;
  color: white;
  box-shadow: 4px 4px #474f5c;
  transition: all 150ms ease-in-out;

  margin: 40px auto;

  &:hover {
    box-shadow: 3px 3px #474f5c;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export { Button, Column, Link };
