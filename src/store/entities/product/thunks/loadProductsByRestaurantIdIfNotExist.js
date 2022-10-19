import { selectProductIds } from '../selectors';
import { selectRestaurantProductsById } from '../../restaurant/selectors';
import { failedLoading, finishLoading, startLoading } from '../actions';

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

    dispatch(startLoading());

    try {
      const response = await fetch(
        `http://localhost:3001/api/products/?id=${restaurantId}`
      );
      if (response.ok) {
        const products = await response.json();
        dispatch(finishLoading(products));
      } else {
        dispatch(failedLoading());
        throw new Error(
          `Ошибка при запросе данных ресторана - ${response.status}`
        );
      }
    } catch (error) {
      dispatch(failedLoading());
      throw error;
    }
  };
