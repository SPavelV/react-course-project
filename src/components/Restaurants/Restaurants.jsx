import React, { useState } from 'react';
import { RestaurantTabsContainer } from '../../containers/RestaurantTabs/RestaurantTabs';
import { RestaurantContainer } from '../../containers/Restaurant/RestaurantContainer';
import { BasketContainer } from '../../containers/Basket/BasketContainer';

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
      {!!currentRestaurantId && (
        <RestaurantContainer id={currentRestaurantId} />
      )}
      <BasketContainer />
    </div>
  );
};
