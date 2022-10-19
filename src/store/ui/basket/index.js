import { createSlice } from '@reduxjs/toolkit';

const sliceName = 'basket';

export const basketSlice = createSlice({
  name: sliceName,
  initialState: {},
  reducers: {
    addProduct: (state, action) => {
      const productId = action.payload.productId;
      if (!productId) {
        return state;
      }

      state[productId] = (state[productId] || 0) + 1;

      return state;
    },
    removeProduct: (state, action) => {
      const productId = action.payload.productId;
      if (!productId || !state[productId]) {
        return state;
      }

      state[productId] = (state[productId] || 0) - 1;

      return state;
    },

    clean: () => {
      return {};
    },
  },
});

export const basketActions = basketSlice.actions;
