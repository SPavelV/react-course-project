import { nanoid } from 'nanoid';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';

export const useSelector = (selector) => {
  const store = useContext(StoreContext);
  const [value, setValue] = useState();

  useEffect(() => {
    const currentKey = nanoid();
    store.subscribe(currentKey, (state) => setValue(selector(state)));

    return () => store.unsubscribe(currentKey);
  }, []);

  return value;
};
