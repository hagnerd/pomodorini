import React from 'react';
import differenceInSeconds from 'date-fns/difference_in_seconds';
import useLocalStorage from './useLocalStorage';

export default function useCountdown({ initialMinutes = 25 } = {}) {
  const [isRunning, setIsRunning] = useLocalStorage(
    'pomodoriniIsRunning',
    false,
  );
  const [timeStarted, setTimeStarted] = useLocalStorage(
    'pomodoriniTimeStarted',
    Date.now(),
  );
  const [timeLeft, setTimeLeft] = React.useState(() => {
    if (isRunning) {
      return (
        initialMinutes * 60 -
        differenceInSeconds(new Date(), new Date(timeStarted))
      );
    } else {
      return initialMinutes * 60;
    }
  });

  const timerId = React.useRef();

  function startCountdown() {
    setIsRunning(true);
    setTimeStarted(Date.now());
  }

  function endCountdown() {
    setIsRunning(false);
    setTimeLeft(initialMinutes * 60);
  }

  function _manuallyFlushTimer(newTime) {
    setIsRunning(false);
    setTimeLeft(newTime * 60);
  }

  React.useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerId.current = setTimeout(
        () =>
          setTimeLeft(
            initialMinutes * 60 -
              differenceInSeconds(Date.now(), new Date(timeStarted)),
          ),
        1000,
      );
    }
    return () => {
      clearTimeout(timerId.current);
    };
  });

  return {
    isRunning,
    startCountdown,
    endCountdown,
    hasCompleted: timeLeft <= 0,
    time: {
      total: timeLeft,
      minutes: Math.floor(timeLeft / 60),
      seconds: timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60,
    },
    _manuallyFlushTimer,
  };
}
