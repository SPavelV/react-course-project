export const selectReviewsModule = (state) => state.reviews;

export const selectReviewById = (state, { id }) => {
  return selectReviewsModule(state)?.entities[id];
};
