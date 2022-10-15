import { selectEntitiesModule } from '../selectors';

export const selectUsersModule = (state) => selectEntitiesModule(state).users;

export const selectUserById = (state, { id }) => {
  return selectUsersModule(state)?.entities[id];
};
