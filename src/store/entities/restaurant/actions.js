export const RESTAURANT_ACTIONS = {
  START_LOADING: 'restaurant/START_LOADING',
  FINISH_LOADING: 'restaurant/FINISH_LOADING',
  FAILED_LOADING: 'restaurant/FAILED_LOADING',
  LOAD_RESTAURANTS: 'restaurant/LOAD_RESTAURANTS',
};

export const startLoading = () => ({
  type: RESTAURANT_ACTIONS.START_LOADING,
});

export const failedLoading = () => ({
  type: RESTAURANT_ACTIONS.FAILED_LOADING,
});

export const finishLoading = (restaurants) => ({
  type: RESTAURANT_ACTIONS.FINISH_LOADING,
  payload: restaurants,
});

export const loadRestaurants = () => ({
  type: RESTAURANT_ACTIONS.LOAD_RESTAURANTS,
});
