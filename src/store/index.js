import { createStore } from 'redux';
import { restaurantReducer } from '../store/restaurant/reducer';
import { productReducer } from '../store/product/reducer';

const rootReducer = (state = {}, action = {}) => {
  return {
    restaurant: restaurantReducer(state.restaurant, action),
    product: productReducer(state.product, action),
  };
};

export const store = createStore(rootReducer);
