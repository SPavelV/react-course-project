export const USER_ACTIONS = {
  START_LOADING: 'user/START_LOADING',
  FINISH_LOADING: 'user/FINISH_LOADING',
  FAILED_LOADING: 'user/FAILED_LOADING',
  LOAD_USERS: 'user/LOAD_USERS',
};

export const startLoading = () => ({
  type: USER_ACTIONS.START_LOADING,
});

export const failedLoading = () => ({
  type: USER_ACTIONS.FAILED_LOADING,
});

export const finishLoading = (users) => ({
  type: USER_ACTIONS.FINISH_LOADING,
  payload: users,
});

export const loadUsers = () => ({
  type: USER_ACTIONS.LOAD_USERS,
});
