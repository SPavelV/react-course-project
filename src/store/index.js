import { createStore } from 'redux';
import { restaurantReducer } from '../store/restaurant/reducer';

const rootReducer = (state = {}, action = {}) => {
  return { restaurant: restaurantReducer(state.restaurant, action) };
};

export const store = createStore(rootReducer);
