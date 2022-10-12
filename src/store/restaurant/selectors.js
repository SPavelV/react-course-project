export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurants = (state) =>
  selectRestaurantModule(state)?.restaurants;
