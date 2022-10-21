import React from 'react';
import { RouterContext } from '../../context/RouterContext';
import { router } from '../../Router';

export const BrowserRouter = ({ children }) => {
  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};
