import { productReducer } from './product/reducer';
import { reviewsReducer } from './review/reducer';
import { usersReducer } from './users/reducer';
import { restaurantSlice } from './restaurant';

export const entitiesReducer = (state = {}, action) => ({
  restaurant: restaurantSlice.reducer(state.restaurant, action),
  product: productReducer(state.product, action),
  reviews: reviewsReducer(state.reviews, action),
  users: usersReducer(state.users, action),
});
