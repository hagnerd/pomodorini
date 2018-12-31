import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  let init = () =>
    typeof window !== 'undefined'
      ? JSON.parse(window.localStorage.getItem(key)) || initialValue
      : initialValue;
  const [item, setInnerValue] = useState(init);

  const setValue = value => {
    return setInnerValue(value);
  };

  const clearStorage = () =>
    localStorage.getItem(key) !== null
      ? localStorage.removeItem(key)
      : undefined;

  useEffect(
    () => {
      localStorage.setItem(key, JSON.stringify(item));
    },
    [item],
  );

  return [item, setValue, clearStorage];
}

export default useLocalStorage;
