import { restaurantActions } from '..';
import { selectLoadingStatus, selectRestaurantIds } from '../selectors';

export const loadRestaurantsIfNotExist = () => async (dispatch, getState) => {
  const state = getState();

  if (
    selectRestaurantIds(state)?.length !== 0 ||
    selectLoadingStatus(state) === 'inProgress'
  ) {
    return;
  }

  dispatch(restaurantActions.startLoading());

  try {
    const response = await fetch('http://localhost:3001/api/restaurants');
    if (response.ok) {
      const restaurants = await response.json();
      dispatch(restaurantActions.finishLoading(restaurants));
    } else {
      dispatch(restaurantActions.failedLoading());
      throw new Error(
        `Ошибка при запросе данных ресторана - ${response.status}`
      );
    }
  } catch (error) {
    dispatch(restaurantActions.failedLoading());
  }
};
