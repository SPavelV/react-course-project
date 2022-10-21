import { nanoid } from 'nanoid';
import { useContext, useEffect, useState } from 'react';
import { RouterContext } from '../context/RouterContext';

export const useRoute = () => {
  const [route, setRoute] = useState();
  const router = useContext(RouterContext);

  useEffect(() => {
    return router.subscribe(nanoid(), (route) => setRoute(route));
  }, []);

  return route;
};
                        