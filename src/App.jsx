import React, { useMemo, useState } from 'react';
import { RestaurantsPage } from './pages/RestaurantsPage/RestaurantsPage';
import { ThemeContext } from './contexts/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BasketPage } from './pages/BasketPage/BasketPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { RestaurantContainer } from './containers/Restaurant/RestaurantContainer';

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
            <Route path='restaurants' element={<RestaurantsPage />}>
              <Route index element={<div>Select restaurant</div>} />
              <Route path=':restaurantId' element={<RestaurantContainer />} />
            </Route>
            <Route path='basket' element={<BasketPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  );
};

// {!!currentRestaurantId && (
//   <RestaurantContainer id={currentRestaurantId} />
// )}
