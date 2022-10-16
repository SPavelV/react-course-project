import { createSelector } from 'reselect';
import { selectProductPriceById } from '../../entities/product/selectors';
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
      console.log('recalc ');
      return count * price;
    }
  );
