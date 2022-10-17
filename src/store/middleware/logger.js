export const logger = (store) => (next) => (action) => {
  // store.getSate();
  // store.dispatch();
  console.log('Action :>> ', action.type);
  return next(action);
};

// export const logger = (store) => {
//   return (next) => {
//     return (action) => {};
//   };
// };
 