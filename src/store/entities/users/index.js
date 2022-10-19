import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: [],
  entities: {},
  status: 'idle',
};

const sliceName = 'users';

export const usersSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    startLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = 'inProgress';

      return state;
    },
    failedLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = 'failed';

      return state;
    },
    finishLoading: (state, action) => {
      const users = action.payload;

      state.entities = users.reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
      }, {});

      state.ids = users.map((item) => item.id);
      state.status = 'success';

      return state;
    },
  },
});

export const usersActions = usersSlice.actions;
