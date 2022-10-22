import React, { useMemo, useState } from 'react';
import { RestaurantsPage } from './pages/RestaurantsPage/RestaurantsPage';
import { ThemeContext } from './contexts/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BasketPage } from './pages/BasketPage/BasketPage';
import { HomePage } from './pages/HomePage/HomePage';

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
            <Route index element={<HomePage />} />
            <Route path='restaurant' element={<div>Restaurant</div>} />
            <Route path='restaurants' element={<RestaurantsPage />} />
            <Route path='basket' element={<BasketPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  );
};
