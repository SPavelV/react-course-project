import { restaurantActions, restaurantSlice } from '..';
import {
  failedLoading,
  finishLoading,
  RESTAURANT_ACTIONS,
  startLoading,
} from '../actions';
import { selectLoadingStatus, selectRestaurantIds } from '../selectors';

export const loadRestaurantsIfNotExist =
  (store) => (next) => async (action) => {
    if (action.type !== RESTAURANT_ACTIONS.LOAD_RESTAURANTS) {
      return next(action);
    }

    if (
      selectRestaurantIds(store.getState())?.length !== 0 ||
      selectLoadingStatus(store.getState()) === 'inProgress'
    ) {
      return;
    }

    store.dispatch(restaurantActions.startLoading());

    try {
      const response = await fetch('http://localhost:3001/api/restaurants');
      if (response.ok) {
        const restaurants = await response.json();
        store.dispatch(restaurantActions.finishLoading(restaurants));
      } else {
        store.dispatch(restaurantActions.failedLoading());
        throw new Error(
          `Ошибка при запросе данных ресторана - ${response.status}`
        );
      }
    } catch (error) {
      store.dispatch(restaurantActions.failedLoading());
    }
  };
