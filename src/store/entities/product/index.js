import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: [],
  entities: {},
  status: 'idle',
};

const sliceName = 'products';

export const productsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = 'inProgress';
      return state;
    },
    filedLoading: (state) => {
      state.status = 'failed';
      return state;
    },
    finishLoading: (state, action) => {
      const products = action.payload;

      state.ids = [...state.ids, ...products.map(({ id }) => id)];
      state.entities = products.reduce(
        (acc, current) => {
          acc[current.id] = current;
          return acc;
        },
        { ...state.entities }
      );
      state.status = 'success';

      return state;
    },
  },
});

export const productsActions = productsSlice.actions;
