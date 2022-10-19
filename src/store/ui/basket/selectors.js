import { createSelector } from 'reselect';
import {
  selectProductEntities,
  selectProductPriceById,
} from '../../entities/product/selectors';
import { selectUiModule } from '../selectors';

export const selectBasketModule = (state) => selectUiModule(state)?.basket;

export const selectProductIds = createSelector(selectBasketModule, (basket) =>
  Object.keys(basket)
);

export const selectProductCount = (state, { productId }) =>
  selectBasketModule(state)[productId] || 0;

export const createSelectProductSum = () =>
  createSelector(
    [selectProductCount, selectProductPriceById],
    (count, price) => {
      return count * price;
    }
  );

export const selectBasketSum = createSelector(
  [selectBasketModule, selectProductIds, selectProductEntities],
  (basket, ids, products) => {
    return ids.reduce((sum, id) => (sum += basket[id] * products[id].price), 0);
  }
);
