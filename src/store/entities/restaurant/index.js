import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: [],
  entities: {},
  status: 'idle',
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
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
      const restaurants = action.payload;

      state.entities = restaurants.reduce((acc, current) => {
        acc[current.id] = current;
        return acc;
      }, {});

      state.ids = restaurants.map((item) => item.id);
      state.status = 'success';

      return state;
    },
  },
});

export const restaurantActions = restaurantSlice.actions;
