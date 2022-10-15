import { basketReducer } from './basket/reducer';

export const uiReducer = (state = {}, action) => ({
  basket: basketReducer(state.basket, action),
});
