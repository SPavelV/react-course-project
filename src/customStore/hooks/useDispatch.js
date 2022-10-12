import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

export const useDispatch = () => {
  const store = useContext(StoreContext);

  return store.dispatch.bind(store);
};
