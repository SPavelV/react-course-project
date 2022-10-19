export const REVIEW_ACTIONS = {
  LOAD_REVIEWS: 'review/LOAD_REVIEWS',
};

export const loadReviews = (restaurantId) => ({
  type: REVIEW_ACTIONS.LOAD_REVIEWS,
  payload: restaurantId,
});
