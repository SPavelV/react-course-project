import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: [],
  entities: {},
  status: 'idle',
};

const sliceName = 'reviews';

export const reviewsSlice = createSlice({
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
      const review = action.payload;
      state.ids = [...state.ids, ...review.map(({ id }) => id)];
      state.entities = review.reduce(
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

export const reviewsActions = reviewsSlice.actions;
