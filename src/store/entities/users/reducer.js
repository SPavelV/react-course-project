import { normalizedUsers } from '../../../constants/normalized-fixtures';

const initialState = {
  id: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce((acc, current) => {
    acc[current.id] = current;
    return acc;
  }, {}),
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
