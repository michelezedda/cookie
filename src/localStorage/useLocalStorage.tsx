import { useEffect, useState } from "react";

export function useLocalStorage({ key, defaultValue }) {
  const [value, setValue] = useState(() => {
        let currentValue;

  try {
    currentValue = JSON.parse(localStorage.getItem(key) | String(defaultValue));
  } catch (e) {
    console.log(e);
    currentValue = defaultValue;
  }
return currentValue;

useEffect(() => {}, [key, value]);

  return [value, setValue];
}
});

  