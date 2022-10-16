import { selectEntitiesModule } from '../selectors';

export const selectProductModule = (state) =>
  selectEntitiesModule(state).product;

export const selectProductEntities = (state) =>
  selectProductModule(state).entities;

export const selectProductById = (state, { id }) => {
  return selectProductEntities(state)?.[id];
};
export const selectProductPriceById = (state, { productId }) => {
  return selectProductById(state, { id: productId })?.price || 0;
};
