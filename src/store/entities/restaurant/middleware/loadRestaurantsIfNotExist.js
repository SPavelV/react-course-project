import {
  failedLoading,
  finishLoading,
  RESTAURANT_ACTIONS,
  startLoading,
} from '../actions';

export const loadRestaurantsIfNotExist =
  (store) => (next) => async (action) => {
    if (action.type !== RESTAURANT_ACTIONS.LOAD_RESTAURANTS) {
      return next(action);
    }

    store.dispatch(startLoading());

    try {
      const response = await fetch('http://localhost:3001/api/restaurants');
      if (response.ok) {
        const restaurants = await response.json();
        store.dispatch(finishLoading(restaurants));
      } else {
        store.dispatch(failedLoading());
        throw new Error(
          `Ошибка при запросе данных ресторана - ${response.status}`
        );
      }
    } catch (error) {
      store.dispatch(failedLoading());
    }
  };
