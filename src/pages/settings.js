import React from 'react';
import styled from '@emotion/styled';
import { Link as Glink } from 'gatsby';
import Layout from '../components/layout';
import useLocalStorage from '../hooks/useLocalStorage';

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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimerForm = ({ onSubmit, initialValues }) => {
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
};

const Settings = () => {
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
};

export default Settings;
