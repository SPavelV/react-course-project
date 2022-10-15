import { normalizedProducts } from '../../../constants/normalized-fixtures';

const initialState = {
  ids: normalizedProducts.map(({ id }) => id),
  entities: normalizedProducts.reduce((acc, current) => {
    acc[current.id] = current;
    return acc;
  }, {}),
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
