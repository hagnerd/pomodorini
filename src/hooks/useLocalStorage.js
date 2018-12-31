import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  let test = JSON.parse(window.localStorage.getItem(key));
  console.log(`${key} equals ${test}`);
  let init = JSON.parse(window.localStorage.getItem(key)) || initialValue;
  const [item, setInnerValue] = useState(init);
  console.log(`${key} equals ${item}`);

  const setValue = value => {
    return setInnerValue(value);
  };

  const clearStorage = () =>
    localStorage.getItem(key) !== null
      ? window.localStorage.removeItem(key)
      : undefined;

  useEffect(
    () => {
      window.localStorage.setItem(key, JSON.stringify(item));
    },
    [item],
  );

  return [item, setValue, clearStorage];
}

export default useLocalStorage;
