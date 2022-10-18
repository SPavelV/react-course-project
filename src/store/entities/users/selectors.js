import { selectEntitiesModule } from '../selectors';

export const selectUsersModule = (state) => selectEntitiesModule(state).users;

export const selectUserEntities = (state) => selectUsersModule(state)?.entities;

export const selectUserIds = (state) => selectUsersModule(state)?.ids;

export const selectUserById = (state, { id }) => {
  return selectUserEntities(state)?.[id];
};

export const selectLoadingStatus = (state) => selectUsersModule(state).status;
