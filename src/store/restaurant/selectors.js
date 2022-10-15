import { createSelector } from 'reselect';
import { selectReviewById, selectReviewEntities } from '../review/selector';

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) =>
  selectRestaurantModule(state)?.ids;

export const selectRestaurantById = (state, { id }) => {
  return selectRestaurantModule(state)?.entities[id];
};

export const selectRestaurantProductsById = (state, { id }) => {
  return selectRestaurantById(state, { id })?.menu;
};

export const selectRestaurantReviewsById = (state, { id }) => {
  return selectRestaurantById(state, { id })?.reviews;
};

// export const selectRestaurantRating = (state, { id }) => {
//   const reviewsIds = selectRestaurantReviewsById(state, { id });

//   const reviews = reviewsIds.map((id) => selectReviewById(state, { id }));

//   return Math.floor(
//     reviews.reduce((sum, { rating }) => sum + rating, 0) / reviews.length
//   );
// };

export const selectRestaurantRating = createSelector(
  [selectRestaurantReviewsById, selectReviewEntities],
  (reviewIds, reviewEntities) => {
    return Math.floor(
      reviewIds.reduce((sum, id) => sum + reviewEntities[id]?.rating || 0, 0) /
        reviewIds.length
    );
  }
);
