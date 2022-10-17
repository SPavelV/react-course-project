export const PRODUCT_ACTIONS = {
  START_LOADING: 'product/START_LOADING',
  FINISH_LOADING: 'product/FINISH_LOADING',
  FAILED_LOADING: 'product/FAILED_LOADING',
  LOAD_PRODUCTS: 'product/LOAD_PRODUCTS',
};

export const startLoading = () => ({
  type: PRODUCT_ACTIONS.START_LOADING,
});

export const failedLoading = () => ({
  type: PRODUCT_ACTIONS.FAILED_LOADING,
});

export const finishLoading = (products) => ({
  type: PRODUCT_ACTIONS.FINISH_LOADING,
  payload: products,
});

export const loadProducts = (restaurantId) => ({
  type: PRODUCT_ACTIONS.LOAD_PRODUCTS,
  payload: restaurantId,
});
