export const RESTAURANT_ACTIONS = {
  ADD_RESTAURANTS: 'restaurant/ADD_RESTAURANTS',
  LOAD_RESTAURANTS: 'restaurant/LOAD_RESTAURANTS',
};

export const addRestaurants = (restaurants) => ({
  type: RESTAURANT_ACTIONS.ADD_RESTAURANTS,
  payload: restaurants,
});

export const loadRestaurants = () => ({
  type: RESTAURANT_ACTIONS.LOAD_RESTAURANTS,
});
