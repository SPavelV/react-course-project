import { restaurantReducer } from './restaurant/reducer';
import { productReducer } from './product/reducer';
import { reviewsReducer } from './review/reducer';
import { usersReducer } from './users/reducer';

export const entitiesReducer = (state = {}, action) => ({
  restaurant: restaurantReducer(state.restaurant, action),
  product: productReducer(state.product, action),
  reviews: reviewsReducer(state.reviews, action),
  users: usersReducer(state.users, action),
});
