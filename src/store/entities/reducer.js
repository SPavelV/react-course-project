import { usersReducer } from './users/reducer';
import { restaurantSlice } from './restaurant';
import { productsSlice } from './product';
import { reviewsSlice } from './review';

export const entitiesReducer = (state = {}, action) => ({
  restaurant: restaurantSlice.reducer(state.restaurant, action),
  product: productsSlice.reducer(state.product, action),
  reviews: reviewsSlice.reducer(state.reviews, action),
  users: usersReducer(state.users, action),
});
