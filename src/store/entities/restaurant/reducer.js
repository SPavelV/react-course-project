import { RESTAURANT_ACTIONS } from './actions';

const initialState = {
  ids: [],
  entities: {},
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANT_ACTIONS.ADD_RESTAURANTS: {
      const restaurants = action.payload;

      return {
        ...state,
        entities: restaurants.reduce((acc, current) => {
          acc[current.id] = current;
          return acc;
        }, {}),
        ids: restaurants.map((item) => item.id),
      };
    }

    default:
      return state;
  }
};
