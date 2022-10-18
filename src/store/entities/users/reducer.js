import { USER_ACTIONS } from './actions';

const initialState = {
  ids: [],
  entities: {},
  status: 'idle',
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.LOAD_USERS:
      return {
        ids: [],
        entities: {},
        status: 'inProgress',
      };

    case USER_ACTIONS.FINISH_LOADING: {
      const users = action.payload;

      const result = {
        ...state,
        entities: users.reduce((acc, current) => {
          acc[current.id] = current;
          return acc;
        }, {}),
        ids: users.map((item) => item.id),
        status: 'success',
      };

      return result;
    }

    case USER_ACTIONS.FAILED_LOADING:
      return {
        ids: [],
        entities: {},
        status: 'failed',
      };

    default:
      return state;
  }
};
