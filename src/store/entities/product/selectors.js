import { selectEntitiesModule } from '../selectors';

export const selectProductModule = (state) =>
  selectEntitiesModule(state).product;

export const selectProductById = (state, { id }) => {
  return selectProductModule(state)?.entities[id];
};
