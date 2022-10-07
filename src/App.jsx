import React from 'react';
import { RestaurantsPage } from './pages/RestaurantsPage/RestaurantsPage';
import { restaurants } from './constants/fixtures';

export const App = () => {
  return <RestaurantsPage restaurants={restaurants} />;
};
