import { selectReviewIds } from '../selectors';
import { selectRestaurantReviewsById } from '../../restaurant/selectors';
import {
  failedLoading,
  finishLoading,
  REVIEW_ACTIONS,
  startLoading,
} from '../actions';

export const loadReviewByRestaurantIdIfNotExist =
  (store) => (next) => async (action) => {
    if (action.type !== REVIEW_ACTIONS.LOAD_REVIEWS) {
      return next(action);
    }

    const restaurantId = action.payload;

    const restaurantReviewIds = selectRestaurantReviewsById(store.getState(), {
      id: restaurantId,
    });

    const loadedReviewIds = selectReviewIds(store.getState());

    if (restaurantReviewIds?.every((id) => loadedReviewIds.includes(id))) {
      return;
    }

    store.dispatch(startLoading());

    try {
      const response = await fetch(
        `http://localhost:3001/api/reviews/?id=${action.payload}`
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
