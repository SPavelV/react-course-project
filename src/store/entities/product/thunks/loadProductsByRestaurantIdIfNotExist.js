import { selectProductIds } from '../selectors';
import { selectRestaurantProductsById } from '../../restaurant/selectors';
import { productsActions } from '..';

export const loadProductsByProductIdIfNotExist =
  (restaurantId) => async (dispatch, getState) => {
    const state = getState();

    const restaurantProductIds = selectRestaurantProductsById(state, {
      id: restaurantId,
    });

    const loadedProductIds = selectProductIds(state);

    if (restaurantProductIds.every((id) => loadedProductIds.includes(id))) {
      return;
    }

    dispatch(productsActions.startLoading());

    try {
      const response = await fetch(
        `http://localhost:3001/api/products/?id=${restaurantId}`
      );
      if (response.ok) {
        const products = await response.json();
        dispatch(productsActions.finishLoading(products));
      } else {
        dispatch(productsActions.filedLoading());
        throw new Error(
          `Ошибка при запросе данных ресторана - ${response.status}`
        );
      }
    } catch (error) {
      dispatch(productsActions.filedLoading());
      throw error;
    }
  };
