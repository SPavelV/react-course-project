export const selectReviewsModule = (state) => state.reviews;

export const selectReviewIds = (state) => selectReviewsModule(state)?.ids;

export const selectReviewEntities = (state) =>
  selectReviewsModule(state)?.entities;

export const selectReviewById = (state, { id }) => {
  return selectReviewEntities(state)?.[id];
};
