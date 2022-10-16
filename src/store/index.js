import { createStore } from 'redux';
import { entitiesReducer } from './entities/reducer';
import { uiReducer } from './ui/reducer';

const rootReducer = (state = {}, action = {}) => {
  console.log('action?.type', action?.type);
  const newState = {
    entities: entitiesReducer(state.entities, action),
    ui: uiReducer(state.ui, action),
  };

  console.log('state :>> ', newState);
  return newState;
};

export const store = createStore(rootReducer);
