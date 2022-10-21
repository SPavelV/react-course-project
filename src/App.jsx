import React, { useMemo, useState } from 'react';
import { RestaurantsPage } from './pages/RestaurantsPage/RestaurantsPage';
import { ThemeContext } from './contexts/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from './CustomRouter/components/BrowserRouter/BrowserRouter';
import { Route } from './CustomRouter/components/Route/Route';
import { BasketPage } from './pages/BasketPage/BasketPage';
import { Routes } from './CustomRouter/components/Routes/Routes';

export const App = () => {
  const [theme, setTheme] = useState('dark');

  const themeState = useMemo(
    () => ({
      theme,
      switchTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    }),
    [theme]
  );

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themeState}>
        <BrowserRouter>
          <Routes>
            <Route path='/restaurant' element={<div>Restaurant</div>} />
            <Route path='/restaurants' element={<RestaurantsPage />} />
            <Route path='/basket' element={<BasketPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  );
};
