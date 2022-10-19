import { usersActions } from '..';
import { selectLoadingStatus, selectUserIds } from '../selectors';

export const loadUsersIfNotExist = () => async (dispatch, getState) => {
  const state = getState();

  if (
    selectUserIds(state)?.length !== 0 ||
    selectLoadingStatus(state) === 'inProgress'
  ) {
    return;
  }

  dispatch(usersActions.startLoading());

  try {
    const response = await fetch('http://localhost:3001/api/users');
    if (response.ok) {
      const users = await response.json();
      dispatch(usersActions.finishLoading(users));
    } else {
      dispatch(usersActions.failedLoading());
      throw new Error(
        `Ошибка при запросе данных ресторана - ${response.status}`
      );
    }
  } catch (error) {
    dispatch(usersActions.failedLoading());
  }
};
