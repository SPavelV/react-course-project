export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) =>
  selectRestaurantModule(state)?.ids;

export const selectRestaurantById = (state, { id }) => {
  return selectRestaurantModule(state)?.entities[id];
};

export const selectRestaurantProductsById = (state, { id }) => {
  return selectRestaurantById(state, { id })?.menu;
};
