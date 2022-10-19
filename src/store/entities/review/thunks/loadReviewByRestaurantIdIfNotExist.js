import { selectReviewIds } from '../selectors';
import { selectRestaurantReviewsById } from '../../restaurant/selectors';
import { reviewsActions } from '..';

export const loadReviewByRestaurantIdIfNotExist =
  (restaurantId) => async (dispatch, getState) => {
    const state = getState();

    const restaurantReviewIds = selectRestaurantReviewsById(state, {
      id: restaurantId,
    });

    const loadedReviewIds = selectReviewIds(state);

    if (restaurantReviewIds?.every((id) => loadedReviewIds.includes(id))) {
      return;
    }

    dispatch(reviewsActions.startLoading());

    try {
      const response = await fetch(
        `http://localhost:3001/api/reviews/?id=${restaurantId}`
      );
      if (response.ok) {
        const products = await response.json();
        dispatch(reviewsActions.finishLoading(products));
      } else {
        dispatch(reviewsActions.filedLoading());
        throw new Error(
          `Ошибка при запросе данных ресторана - ${response.status}`
        );
      }
    } catch (error) {
      dispatch(reviewsActions.filedLoading());
      throw error;
    }
  };
