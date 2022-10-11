class Store {}

export const createStore = (() => {
  let store;

  return () => {
    if (!store) {
      store = new Store();
    }

    return store;
  };
})();
