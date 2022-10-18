import {
  failedLoading,
  finishLoading,
  USER_ACTIONS,
  startLoading,
} from '../actions';
import { selectLoadingStatus, selectUserIds } from '../selectors';

export const loadUsersIfNotExist = (store) => (next) => async (action) => {
  if (action.type !== USER_ACTIONS.LOAD_USERS) {
    return next(action);
  }

  if (
    selectUserIds(store.getState())?.length !== 0 ||
    selectLoadingStatus(store.getState()) === 'inProgress'
  ) {
    return;
  }

  store.dispatch(startLoading());

  try {
    const response = await fetch('http://localhost:3001/api/users');
    if (response.ok) {
      const users = await response.json();
      store.dispatch(finishLoading(users));
    } else {
      store.dispatch(failedLoading());
      throw new Error(
        `Ошибка при запросе данных ресторана - ${response.status}`
      );
    }
  } catch (error) {
    store.dispatch(failedLoading());
  }
};
