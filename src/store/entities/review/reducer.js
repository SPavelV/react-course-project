import { REVIEW_ACTIONS } from './actions';

const initialState = {
  ids: [],
  entities: {},
  status: 'idle',
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVIEW_ACTIONS.START_LOADING: {
      return {
        ...state,
        status: 'inProgress',
      };
    }

    case REVIEW_ACTIONS.FINISH_LOADING: {
      const review = action.payload;
      return {
        ...state,
        ids: [...state.ids, ...review.map(({ id }) => id)],
        entities: review.reduce(
          (acc, current) => {
            acc[current.id] = current;
            return acc;
          },
          { ...state.entities }
        ),
        status: 'success',
      };
    }

    case REVIEW_ACTIONS.FAILED_LOADING: {
      return {
        ...state,
        status: 'failed',
      };
    }
    default:
      return state;
  }
};
