import { selectEntitiesModule } from '../selectors';

export const selectUsersModule = (state) => selectEntitiesModule(state).users;

export const selectReviewIds = (state) =>
selectUsersModule(state)?.ids;

export const selectUserById = (state, { id }) => {
  return selectUsersModule(state)?.entities[id];
};

export const selectLoadingStatus = (state) => selectUsersModule(state).status;
