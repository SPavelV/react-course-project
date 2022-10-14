import { normalizedRestaurants } from '../../constants/normalized-fixtures';
import { RESTAURANT_ACTIONS } from './actions';

const initialState = {
  ids: normalizedRestaurants.map((item) => item.id),
  entities: normalizedRestaurants.reduce((acc, current) => {
    acc[current.id] = current;
    return acc;
  }, {}),
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANT_ACTIONS.ADD_RESTAURANT: {
      return { restaurants: [...state.restaurants, action.payload] };
    }

    default:
      return state;
  }
};
