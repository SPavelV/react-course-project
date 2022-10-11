export const veryDifficultCalculation = (() => {
  const storage = {
    params: {},
    value: null,
  };
  return (params) => {
    console.log('params', params);
    if (
      Object.keys(params).every((key) => storage.params[key] === params[key])
    ) {
      console.log(`return from storage a: ${params.a}, b: ${params.b} `);
      return storage.value;
    }

    const { a, b } = params;

    console.log(`calculate new result for a: ${a}, b: ${b} `);
    const result = a * b;

    storage.params = { ...params };
    storage.value = result;

    return storage.value;
  };
})();

// export const veryDifficultCalculation = (() => {
//   const storage = {};
//   return (a) => {
//     if (storage[a]) {
//       console.log('return from storage for ', a);

//       return storage[a];
//     }

//     console.log('calculate new result for ', a);
//     const result = a * a;

//     storage[a] = result;

//     return result;
//   };
// })();

// export const veryDifficultCalculation = (a) => {
//   console.log('calculate new result for ', a);
//   const result = a * a;

//   return result;
// };
