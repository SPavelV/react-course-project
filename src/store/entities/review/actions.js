export const REVIEW_ACTIONS = {
  START_LOADING: 'review/START_LOADING',
  FINISH_LOADING: 'review/FINISH_LOADING',
  FAILED_LOADING: 'review/FAILED_LOADING',
  LOAD_REVIEWS: 'review/LOAD_REVIEWS',
};

export const startLoading = () => ({
  type: REVIEW_ACTIONS.START_LOADING,
});

export const failedLoading = () => ({
  type: REVIEW_ACTIONS.FAILED_LOADING,
});

export const finishLoading = (reviews) => ({
  type: REVIEW_ACTIONS.FINISH_LOADING,
  payload: reviews,
});

export const loadReviews = (restaurantId) => ({
  type: REVIEW_ACTIONS.LOAD_REVIEWS,
  payload: restaurantId,
});
