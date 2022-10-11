import React, { useMemo, useState } from 'react';
import { RestaurantsPage } from './pages/RestaurantsPage/RestaurantsPage';
import { restaurants } from './constants/fixtures';
import { ThemeContext } from './contexts/ThemeContext';

const store = {};

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
    <ThemeContext.Provider value={themeState}>
      <RestaurantsPage restaurants={restaurants} />
    </ThemeContext.Provider>
  );
};
