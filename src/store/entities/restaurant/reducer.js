import { RESTAURANT_ACTIONS } from './actions';

const initialState = {
  ids: [],
  entities: {},
  status: 'idle', // 'inProgress', 'success', 'failed', 'idle'
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANT_ACTIONS.START_LOADING:
      return {
        ids: [],
        entities: {},
        status: 'inProgress',
      };

    case RESTAURANT_ACTIONS.FINISH_LOADING: {
      const restaurants = action.payload;

      return {
        ...state,
        entities: restaurants.reduce((acc, current) => {
          acc[current.id] = current;
          return acc;
        }, {}),
        ids: restaurants.map((item) => item.id),
        status: 'success',
      };
    }

    case RESTAURANT_ACTIONS.FAILED_LOADING:
      return {
        ids: [],
        entities: {},
        status: 'failed', 
      };

    default:
      return state;
  }
};
