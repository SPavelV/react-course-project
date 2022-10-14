export const selectProductModule = (state) => state.product;

export const selectProductById = (state, { id }) => {
  return selectProductModule(state)?.entities[id];
};
