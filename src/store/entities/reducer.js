import { restaurantSlice } from './restaurant';
import { productsSlice } from './product';
import { reviewsSlice } from './review';
import { usersSlice } from './users';
import { dishesSlice } from './dishes';

export const entitiesReducer = (state = {}, action) => ({
  restaurant: restaurantSlice.reducer(state.restaurant, action),
  product: productsSlice.reducer(state.product, action),
  reviews: reviewsSlice.reducer(state.reviews, action),
  users: usersSlice.reducer(state.users, action),
  dishes: dishesSlice.reducer(state.dishes, action),
});
