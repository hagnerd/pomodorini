import React from 'react';

import Layout from '../components/layout';
import useLocalStorage from '../hooks/useLocalStorage';
import { Button, Column, Link } from './_settings.elements';

function Settings() {
  const [timerSettings, setTimerSettings] = useLocalStorage(
    'pomodoriniTimerSettings',
    { focusTime: 25, breakTime: 5 },
  );

  return (
    <Layout>
      <React.Fragment>
        <Column>
          <h2>Current Settings</h2>
          <h3>Focus Duration: {timerSettings.focusTime} minutes</h3>
          <h3>Break Duration: {timerSettings.breakTime} minutes</h3>
        </Column>

        <Column>
          <h2>Presets</h2>
          <Column>
            <h3>Traditional Pomodoro</h3>
            <h4>Focus Duration: 25 minutes</h4>
            <h4>Break Duration: 5 minutes</h4>
            <Button
              onClick={() => setTimerSettings({ focusTime: 25, breakTime: 5 })}
            >
              Use Traditional Pomodoro
            </Button>
          </Column>

          <Column>
            <h3>Deep Focus Pomodoro</h3>
            <h4>Focus Duration: 52</h4>
            <h4>Break Duration: 17</h4>
            <Button
              onClick={() => setTimerSettings({ focusTime: 52, breakTime: 17 })}
            >
              Use Deep Focus Pomodoro
            </Button>
          </Column>
        </Column>
        <Column>
          <h2>Custom Settings</h2>
          <TimerForm
            initialValues={timerSettings}
            onSubmit={setTimerSettings}
          />
        </Column>

        <Link to="/about">
          <h4 style={{ color: 'inherit' }}>About Pomodorini</h4>
        </Link>
      </React.Fragment>
    </Layout>
  );
}

function TimerForm({ onSubmit, initialValues }) {
  const [values, handleChange, handleSubmit] = useForm({
    initialValues,
    onSubmit,
  });
  return (
    <Column as="form" onSubmit={handleSubmit}>
      <label htmlFor="focusTime">Focus Duration: {values.focusTime}min</label>
      <input
        type="range"
        name="focusTime"
        id="focusTime"
        min="0"
        max="90"
        onChange={handleChange}
        value={values.focusTime}
      />
      <label htmlFor="breakTime">Break Duration: {values.breakTime}min</label>
      <input
        type="range"
        name="breakTime"
        id="breakTime"
        min="0"
        max="90"
        onChange={handleChange}
        value={values.breakTime}
      />
      <Button type="submit">Use Custom Settings</Button>
    </Column>
  );
}

function useForm({ initialValues, onSubmit } = {}) {
  const [formState, setFormState] = React.useState(initialValues);

  const handleChange = e =>
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formState);
  };

  return [formState, handleChange, handleSubmit];
}

export default Settings;
