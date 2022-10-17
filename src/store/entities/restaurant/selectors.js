import { createSelector } from 'reselect';
import { selectReviewEntities } from '../review/selector';
import { selectEntitiesModule } from '../selectors';

export const selectRestaurantModule = (state) =>
  selectEntitiesModule(state).restaurant;

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

export const selectRestaurantRating = createSelector(
  [selectRestaurantReviewsById, selectReviewEntities],
  (reviewIds, reviewEntities) => {
    return Math.floor(
      reviewIds.reduce((sum, id) => sum + reviewEntities[id]?.rating || 0, 0) /
        reviewIds.length
    );
  }
);

export const selectLoadingStatus = (state) =>
  selectRestaurantModule(state).status;
