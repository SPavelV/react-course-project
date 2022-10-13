import { normalizedRestaurants } from '../../constants/normalized-fixtures';
import { RESTAURANT_ACTIONS } from './actions';

const initialState = {
  ids: normalizedRestaurants.map((item) => item.id),
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
};

export const restaurantReducer = (state = initialState, action) => {
  console.log('state :>> ', state);
  switch (action.type) {
    case RESTAURANT_ACTIONS.ADD_RESTAURANT: {
      return { restaurants: [...state.restaurants, action.payload] };
    }

    default:
      return state;
  }
};
