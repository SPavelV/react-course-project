import { createSelector } from 'reselect';
import { selectUiModule } from '../selectors';

export const selectBasketModule = (state) => selectUiModule(state)?.basket;

export const selectProductIds = createSelector(selectBasketModule, (basket) =>
  Object.keys(basket)
);

export const selectProductCount = (state, { productId }) =>
  selectBasketModule(state)[productId] || 0;
