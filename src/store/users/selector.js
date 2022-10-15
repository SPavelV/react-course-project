export const selectUsersModule = (state) => state.users;

export const selectUserById = (state, { id }) => {
  return selectUsersModule(state)?.entities[id];
};
