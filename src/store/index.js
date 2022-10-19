import { configureStore } from '@reduxjs/toolkit';
import { entitiesReducer } from './entities/reducer';
import { uiReducer } from './ui/reducer';

const rootReducer = (state = {}, action = {}) => {
  return {
    entities: entitiesReducer(state.entities, action),
    ui: uiReducer(state.ui, action),
  };
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
});
