import React from 'react';

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}
