import { createStore } from 'redux';
import { restaurantReducer } from '../store/restaurant/reducer';
import { productReducer } from '../store/product/reducer';
import { reviewsReducer } from '../store/review/reducer';

const rootReducer = (state = {}, action = {}) => {
  return {
    restaurant: restaurantReducer(state.restaurant, action),
    product: productReducer(state.product, action),
    reviews: reviewsReducer(state.reviews, action),
  };
};

export const store = createStore(rootReducer);
