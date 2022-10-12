class Store {
  state = {};

  subscribers = {};

  subscribe(key, callback) {
    this.subscribers[key] = callback;
    this.subscribers[key](this.state);
  }

  unsubscribe(key) {
    delete this.subscribers[key];
  }
}

export const createStore = (() => {
  let store;

  return () => {
    if (!store) {
      store = new Store();
    }

    return store;
  };
})();
