import React, { useState } from 'react';
import { RestaurantTabsContainer } from '../../containers/RestaurantTabs/RestaurantTabs';
import { BasketContainer } from '../../containers/Basket/BasketContainer';
import { Outlet } from 'react-router-dom';

export const Restaurants = ({ status }) => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState();

  if (status === 'inProgress') {
    return <span>Loading...</span>;
  }
  if (status === 'failed') {
    return <span>Failed.</span>;
  }

  return (
    <div>
      <RestaurantTabsContainer
        onTabSelect={(id) => setCurrentRestaurantId(id)}
      />

      <Outlet />

      <BasketContainer />
    </div>
  );
};
