import { createStore } from '../CustomStore/Store/Store';

import { restaurantReducer } from '../store/restaurant/reducer';

const rootReducer = (state = {}, action = {}) => {
  return { restaurant: restaurantReducer(state.restaurant, action) };
};

export const store = createStore(rootReducer);
