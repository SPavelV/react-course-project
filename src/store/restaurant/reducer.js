import { restaurants } from '../../constants/fixtures';
import { RESTAURANT_ACTIONS } from './actions';

export const restaurantReducer = (
  state = { restaurants: restaurants },
  action
) => {
  switch (action.type) {
    case RESTAURANT_ACTIONS.ADD_RESTAURANT: {
      return { restaurants: [...state.restaurants, action.payload] };
    }

    default:
      return state;
  }
};
