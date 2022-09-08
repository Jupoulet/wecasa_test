import { useCallback, useState } from 'react';

interface UseCounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounter = (): UseCounterProps => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(previousCount => previousCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(previousCount => (previousCount > 0 ? previousCount - 1 : previousCount));
  }, []);

  return { count, increment, decrement };
};
