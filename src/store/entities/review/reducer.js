import { normalizedReviews } from '../../../constants/normalized-fixtures';

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((acc, current) => {
    acc[current.id] = current;
    return acc;
  }, {}),
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
