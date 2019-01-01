import styled from '@emotion/styled';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  height: 35px;
  width: 4px;
  background-color: #2d3441;
  margin: 10px;
`;

const HiddenButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const SubtleButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: '#DE6351';
    background-color: #2d3441;
  }
`;

const Time = styled.h2`
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 90px;
  color: ${({ isRunning }) => (isRunning ? '#569462' : '#2D3441')};
`;

const TimerControlsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${({ selected }) => (selected ? '#6CA37C' : '#CACACA')};
  margin: 10px 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export {
  Column,
  Divider,
  HiddenButton,
  SubtleButton,
  Time,
  TimerControlsContainer,
  Title,
  TitleContainer,
};
