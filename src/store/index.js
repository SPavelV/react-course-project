import { createStore } from 'redux';
import { entitiesReducer } from './entities/reducer';
import {
  addProductToBasket,
  removeProductFromBasket,
} from './ui/basket/actions';
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

console.log(store.getState());
store.dispatch(addProductToBasket({ productId: '1' }));
store.dispatch(addProductToBasket({ productId: '1' }));
store.dispatch(addProductToBasket({ productId: '1' }));
store.dispatch(removeProductFromBasket({ productId: '1' }));
store.dispatch(removeProductFromBasket({ productId: '1' }));
store.dispatch(removeProductFromBasket({ productId: '1' }));
store.dispatch(removeProductFromBasket({ productId: '123' }));
console.log(store.getState());
