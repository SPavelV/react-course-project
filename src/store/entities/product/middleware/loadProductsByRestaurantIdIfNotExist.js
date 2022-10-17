import { selectProductIds } from '../selectors';
import { selectRestaurantProductsById } from '../../restaurant/selectors';
import {
  failedLoading,
  finishLoading,
  PRODUCT_ACTIONS,
  startLoading,
} from '../actions';
// import { selectLoadingStatus, selectPRODUCTIds } from '../selectors';

export const loadProductsByProductIdIfNotExist =
  (store) => (next) => async (action) => {
    if (action.type !== PRODUCT_ACTIONS.LOAD_PRODUCTS) {
      return next(action);
    }

    const restaurantId = action.payload;

    const restaurantProductIds = selectRestaurantProductsById(
      store.getState(),
      {
        id: restaurantId,
      }
    );

    const loadedProductIds = selectProductIds(store.getState());

    if (restaurantProductIds.every((id) => loadedProductIds.includes(id))) {
      return;
    }

    store.dispatch(startLoading());

    try {
      const response = await fetch(
        `http://localhost:3001/api/products/?id=${action.payload}`
      );
      if (response.ok) {
        const products = await response.json();
        store.dispatch(finishLoading(products));
      } else {
        store.dispatch(failedLoading());
        throw new Error(
          `Ошибка при запросе данных ресторана - ${response.status}`
        );
      }
    } catch (error) {
      store.dispatch(failedLoading());
      throw error;
    }
  };
