export const RESTAURANT_ACTIONS = {
  ADD_RESTAURANT: 'restaurant/ADD_RESTAURANT',
  REMOVE_RESTAURANT: 'restaurant/REMOVE_RESTAURANT',
};

export const addRestaurant = (restaurant) => ({
  type: RESTAURANT_ACTIONS.ADD_RESTAURANT,
  payload: restaurant,
});
