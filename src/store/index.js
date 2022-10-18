import { configureStore } from '@reduxjs/toolkit';
import { loadProductsByProductIdIfNotExist } from './entities/product/middleware/loadProductsByRestaurantIdIfNotExist';
import { entitiesReducer } from './entities/reducer';
import { loadRestaurantsIfNotExist } from './entities/restaurant/middleware/loadRestaurantsIfNotExist';
import { loadReviewByRestaurantIdIfNotExist } from './entities/review/middleware/loadReviewByRestaurantIdIfNotExist';
import { loadUsersIfNotExist } from './entities/users/middleware/loadUsersIfNotExist';
import { logger } from './middleware/logger';
import { uiReducer } from './ui/reducer';

const rootReducer = (state = {}, action = {}) => {
  return {
    entities: entitiesReducer(state.entities, action),
    ui: uiReducer(state.ui, action),
  };
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [
    logger,
    loadRestaurantsIfNotExist,
    loadProductsByProductIdIfNotExist,
    loadReviewByRestaurantIdIfNotExist,
    loadUsersIfNotExist,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     logger,
//     loadRestaurantsIfNotExist,
//     loadProductsByProductIdIfNotExist,
//     loadReviewByRestaurantIdIfNotExist,
//     loadUsersIfNotExist
//   )
// );
