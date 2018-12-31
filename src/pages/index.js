import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import useLocalStorage from '../hooks/useLocalStorage';
import useCountdown from '../hooks/useCountdown';

import PlayIcon from '../components/play-icon';
import StopIcon from '../components/stop-icon';

function CountdownClock({ minutes, seconds, isRunning }) {
  return (
    <React.Fragment>
      <h2
        style={{
          marginTop: 100,
          marginBottom: 50,
          fontSize: 90,
          color: isRunning ? '#569462' : '#2D3441',
        }}
      >
        {minutes}:{seconds}
      </h2>
    </React.Fragment>
  );
}

const Title = styled.h1`
  color: ${({ selected }) => (selected ? '#6CA37C' : '#CACACA')};
  margin: 10px 20px;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: '#DE6351';
    background-color: #2d3441;
  }
`;

function TimerTitle({ selectedTimer, setSelectedTimer }) {
  return selectedTimer === 'focusTime' ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <Button onClick={() => setSelectedTimer('focusTime')}>
        <Title selected>Focus</Title>
      </Button>
      <div
        style={{
          height: 35,
          width: 4,
          backgroundColor: '#2D3441',
          margin: '10px',
        }}
      />
      <Button onClick={() => setSelectedTimer('breakTime')}>
        <Title>Break</Title>
      </Button>
    </div>
  ) : (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <Button onClick={() => setSelectedTimer('focusTime')}>
        <Title>Focus</Title>
      </Button>
      <div
        style={{
          height: 35,
          width: 4,
          backgroundColor: '#2D3441',
          margin: '10px',
        }}
      />
      <Button onClick={() => setSelectedTimer('breakTime')}>
        <Title selected>Break</Title>
      </Button>
    </div>
  );
}

const Index = ({ navigate }) => {
  const [hasVisited] = useLocalStorage('pomodoriniHasVisited', false);

  const [timerSettings] = useLocalStorage('pomodoriniTimerSettings', {
    focusTime: 25,
    breakTime: 5,
  });

  const [selectedTimer, setSelectedTimer] = useLocalStorage(
    'pomodoriniSelectedTimer',
    'focusTime',
  );

  const {
    isRunning,
    time,
    startCountdown,
    endCountdown,
    hasCompleted,
    _manuallyFlushTimer,
  } = useCountdown({ initialMinutes: timerSettings[selectedTimer] });

  // useEffect(
  //   () => {
  //     _manuallyFlushTimer(timerSettings[selectedTimer]);
  //   },
  //   [timerSettings.focusTime, timerSettings.breakTime, selectedTimer],
  // );

  if (typeof window !== 'undefined' && !hasVisited) {
    navigate('/about');
  }

  return (
    <Layout>
      <React.Fragment>
        <TimerTitle
          selectedTimer={selectedTimer}
          setSelectedTimer={setSelectedTimer}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CountdownClock
            minutes={time.minutes}
            seconds={time.seconds}
            isRunning={isRunning}
          />
          <TimerControls
            onStart={startCountdown}
            onEnd={endCountdown}
            isRunning={isRunning}
          />
        </div>

        <NextTimer
          hasCompleted={hasCompleted}
          selectedTimer={selectedTimer}
          setSelectedTimer={selectedTimer}
        />
      </React.Fragment>
    </Layout>
  );
};

function TimerControls({ onStart, onEnd, isRunning }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button
        onClick={onStart}
        style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
        disabled={isRunning}
      >
        <PlayIcon color={isRunning ? '#CACACA' : undefined} />
      </button>
      <button
        onClick={onEnd}
        style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
      >
        <StopIcon />
      </button>
    </div>
  );
}

function NextTimer({ hasCompleted, selectedTimer, setSelectedTimer }) {
  return hasCompleted ? (
    selectedTimer === 'focusTime' ? (
      <button onClick={() => setSelectedTimer('breakTime')}>
        Take a Break?
      </button>
    ) : (
      <button onClick={() => setSelectedTimer('focusTime')}>
        Focus on a new task?
      </button>
    )
  ) : null;
}

export default Index;
