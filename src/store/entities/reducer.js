import { restaurantSlice } from './restaurant';
import { productsSlice } from './product';
import { reviewsSlice } from './review';
import { usersSlice } from './users';

export const entitiesReducer = (state = {}, action) => ({
  restaurant: restaurantSlice.reducer(state.restaurant, action),
  product: productsSlice.reducer(state.product, action),
  reviews: reviewsSlice.reducer(state.reviews, action),
  users: usersSlice.reducer(state.users, action),
});
