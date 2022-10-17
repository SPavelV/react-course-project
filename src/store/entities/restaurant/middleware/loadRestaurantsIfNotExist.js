import { addRestaurants, RESTAURANT_ACTIONS } from '../actions';

export const loadRestaurantsIfNotExist =
  (store) => (next) => async (action) => {
    if (action.type !== RESTAURANT_ACTIONS.LOAD_RESTAURANTS) {
      return next(action);
    }

    try {
      const response = await fetch('http://localhost:3001/api/restaurants');
      if (response.ok) {
        const restaurants = await response.json();
        console.log('restaurants :>> ', restaurants);

        store.dispatch(addRestaurants(restaurants));
      } else {
        throw new Error(
          `Ошибка при запросе данных ресторана - ${response.status}`
        );
      }
    } catch (error) {
      console.log('e.message', error.message);
      throw error;
    }
  };
