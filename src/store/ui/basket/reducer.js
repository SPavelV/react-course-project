import { BASKET_ACTIONS } from './actions';

export const addProduct = (state, productId) => {
  if (!productId) {
    return state;
  }
  return {
    ...state,
    [productId]: (state[productId] || 0) + 1,
  };
};

export const removeProduct = (state, productId) => {
  if (!productId || !state[productId]) {
    return state;
  }
  return {
    ...state,
    [productId]: (state[productId] || 0) - 1,
  };
};

export const basketReducer = (state = {}, action) => {
  switch (action.type) {
    case BASKET_ACTIONS.ADD_PRODUCT:
      return addProduct(state, action.payload?.productId);

    case BASKET_ACTIONS.REMOVE_PRODUCT:
      return removeProduct(state, action.payload?.productId);

    case BASKET_ACTIONS.CLEAN:
      return {};

    default:
      return state;
  }
};
