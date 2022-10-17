import React, { useState } from 'react';
import { RestaurantTabsContainer } from '../../containers/RestaurantTabs/RestaurantTabs';
import { RestaurantContainer } from '../../containers/Restaurant/RestaurantContainer';
import { BasketContainer } from '../../containers/Basket/BasketContainer';

export const Restaurants = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState();

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
