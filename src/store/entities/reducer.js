import { reviewsReducer } from './review/reducer';
import { usersReducer } from './users/reducer';
import { restaurantSlice } from './restaurant';
import { productsSlice } from './product';

export const entitiesReducer = (state = {}, action) => ({
  restaurant: restaurantSlice.reducer(state.restaurant, action),
  product: productsSlice.reducer(state.product, action),
  reviews: reviewsReducer(state.reviews, action),
  users: usersReducer(state.users, action),
});
