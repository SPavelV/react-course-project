import { createStore } from 'redux';
import { restaurantReducer } from './restaurant/reducer';
import { productReducer } from './product/reducer';
import { reviewsReducer } from './review/reducer';
import { usersReducer } from './users/reducer';

const rootReducer = (state = {}, action = {}) => {
  return {
    restaurant: restaurantReducer(state.restaurant, action),
    product: productReducer(state.product, action),
    reviews: reviewsReducer(state.reviews, action),
    users: usersReducer(state.reviews, action),
  };
};

export const store = createStore(rootReducer);
