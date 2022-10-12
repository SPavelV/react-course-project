const restaurantReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = (state = {}, action = {}) => ({
  restaurant: restaurantReducer(state.restaurants, action),
});

class Store {
  state = {};

  subscribers = {};

  reducer() {}

  subscribe(key, callback) {
    if (typeof callback === 'function') {
      this.subscribers[key] = callback;
      this.subscribers[key](this.state);
    }
  }

  unsubscribe(key) {
    delete this.subscribers[key];
  }

  sendState() {
    Object.keys(this.subscribers).forEach((key) => {
      if (typeof this.subscribers[key] === 'function') {
        this.subscribers[key](this.state);
      }
    });
  }

  dispatch(action) {
    this.state = this.rootReducer(this.state, action);
  }
}

export const createStore = (() => {
  let store;

  return () => {
    if (!store) {
      store = new Store(rootReducer);
    }

    return store;
  };
})();
