import { selectEntitiesModule } from '../selectors';

export const selectProductModule = (state) =>
  selectEntitiesModule(state).product;

export const selectProductById = (state, { id }) => {
  return selectProductModule(state)?.entities[id];
};
export const selectProductPriceById = (state, { productId }) => {
  return selectProductById(state, { id: productId })?.price || 0;
};
