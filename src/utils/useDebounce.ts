import { useState, useEffect } from 'react';
const useDebounce = (value: any, timeout = 500) => {
  const [state, setState] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setState(value), timeout);
    return () => clearTimeout(handler);
  }, [value, timeout]);
  return {
    debouncedValue: state,
  };
};
export default useDebounce;