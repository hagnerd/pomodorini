import React from 'react';

import Layout from '../components/layout';
import PlayIcon from '../components/play-icon';
import StopIcon from '../components/stop-icon';

import useLocalStorage from '../hooks/useLocalStorage';
import useCountdown from '../hooks/useCountdown';

import {
  Column,
  Divider,
  HiddenButton,
  SubtleButton,
  Time,
  TimerControlsContainer,
  Title,
  TitleContainer,
} from './_index.elements';

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

        <Column>
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
        </Column>

        <NextTimer
          hasCompleted={hasCompleted}
          selectedTimer={selectedTimer}
          setSelectedTimer={setSelectedTimer}
        />
      </React.Fragment>
    </Layout>
  );
};

function TimerTitle({ selectedTimer, setSelectedTimer }) {
  return selectedTimer === 'focusTime' ? (
    <TitleContainer>
      <SubtleButton onClick={() => setSelectedTimer('focusTime')}>
        <Title selected>Focus</Title>
      </SubtleButton>
      <Divider />
      <SubtleButton onClick={() => setSelectedTimer('breakTime')}>
        <Title>Break</Title>
      </SubtleButton>
    </TitleContainer>
  ) : (
    <TitleContainer>
      <SubtleButton onClick={() => setSelectedTimer('focusTime')}>
        <Title>Focus</Title>
      </SubtleButton>
      <Divider />
      <SubtleButton onClick={() => setSelectedTimer('breakTime')}>
        <Title selected>Break</Title>
      </SubtleButton>
    </TitleContainer>
  );
}

function CountdownClock({ minutes, seconds, isRunning }) {
  return (
    <React.Fragment>
      <Time isRunning={isRunning}>
        {minutes}:{seconds}
      </Time>
    </React.Fragment>
  );
}

function TimerControls({ onStart, onEnd, isRunning }) {
  return (
    <TimerControlsContainer>
      <HiddenButton onClick={onStart} disabled={isRunning}>
        <PlayIcon color={isRunning ? '#CACACA' : undefined} />
      </HiddenButton>
      <HiddenButton onClick={onEnd}>
        <StopIcon />
      </HiddenButton>
    </TimerControlsContainer>
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
