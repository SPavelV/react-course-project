import { dishesActions } from '..';
import { selectLoadingStatus, selectDishesIds } from '../selectors';

export const loadDishesIfNotExist = () => async (dispatch, getState) => {
  const state = getState();

  if (
    selectDishesIds(state)?.length !== 0 ||
    selectLoadingStatus(state) === 'inProgress'
  ) {
    return;
  }

  dispatch(dishesActions.startLoading());

  try {
    const response = await fetch('http://localhost:3001/api/products');
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
