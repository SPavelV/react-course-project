import { createSelector } from 'reselect';
import { selectReviewEntities } from '../review/selectors';
import { selectEntitiesModule } from '../selectors';

export const selectRestaurantModule = (state) =>
  selectEntitiesModule(state).restaurant;

export const selectRestaurantIds = (state) =>
  selectRestaurantModule(state)?.ids;

export const selectRestaurantName = (state, { name }) =>
  selectRestaurantIds(state)?.filter(
    (id) =>
      selectRestaurantById(state, { id })
        ?.name.toLowerCase()
        .indexOf(name.toLowerCase()) !== -1
  );

export const selectRestaurantEntities = (state) => {
  return selectRestaurantModule(state)?.entities;
};

export const selectRestaurantById = (state, { id }) => {
  return selectRestaurantEntities(state)?.[id];
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
    if (!reviewIds || !reviewEntities) return null;
    return Math.floor(
      reviewIds?.reduce((sum, id) => sum + reviewEntities[id]?.rating || 0, 0) /
        reviewIds.length
    );
  }
);

export const selectLoadingStatus = (state) =>
  selectRestaurantModule(state).status;
