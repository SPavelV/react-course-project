export const BASKET_ACTIONS = {
  ADD_PRODUCT: 'basket/ADD_PRODUCT',
  REMOVE_PRODUCT: 'basket/REMOVE_PRODUCT',
  CLEAN: 'basket/CLEAN',
};

export const addProductToBasket = ({ productId }) => ({
  type: BASKET_ACTIONS.ADD_PRODUCT,
  payload: { productId },
});

export const removeProductFromBasket = ({ productId }) => ({
  type: BASKET_ACTIONS.REMOVE_PRODUCT,
  payload: { productId },
});

export const cleanBasket = () => ({
  type: BASKET_ACTIONS.CLEAN,
});
