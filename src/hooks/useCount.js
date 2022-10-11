import { useCallback, useState } from 'react';

export const useCount = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const decrement = useCallback(() => {
    setCount((currentCount) => (count > 0 ? currentCount - 1 : count));
  }, []);

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);

  return { count, decrement, increment };
};
