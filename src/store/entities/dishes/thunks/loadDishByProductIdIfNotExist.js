import { dishesActions } from '..';
import { selectDishesIds } from '../selectors';

export const loadDishByProductIdIfNotExist =
  (dishId) => async (dispatch, getState) => {
    const state = getState();

    const dishIds = selectDishesIds(state);

    if (dishIds.some((id) => id === dishId)) return;

    dispatch(dishesActions.startLoading());

    try {
      const response = await fetch(
        `http://localhost:3001/api/products/?proudctId=${dishId}`
      );
      if (response.ok) {
        const products = await response.json();
        dispatch(dishesActions.finishLoading(products));
      } else {
        dispatch(dishesActions.failedLoading());
        throw new Error(`Ошибка при запросе данных блюд - ${response.status}`);
      }
    } catch (error) {
      dispatch(dishesActions.failedLoading());
    }
  };
