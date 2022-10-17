import { PRODUCT_ACTIONS } from './actions';

const initialState = {
  ids: [],
  entities: {},
  status: 'idle',
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.START_LOADING: {
      return {
        ...state,
        status: 'inProgress',
      };
    }

    case PRODUCT_ACTIONS.FINISH_LOADING: {
      const products = action.payload;
      return {
        ...state,
        ids: [...state.ids, ...products.map(({ id }) => id)],
        entities: products.reduce(
          (acc, current) => {
            acc[current.id] = current;
            return acc;
          },
          { ...state.entities }
        ),
        status: 'success',
      };
    }

    case PRODUCT_ACTIONS.FAILED_LOADING: {
      return {
        ...state,
        status: 'filed',
      };
    }
    default:
      return state;
  }
};
