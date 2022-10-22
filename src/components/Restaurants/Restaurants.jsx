import React from 'react';
import { RestaurantTabsContainer } from '../../containers/RestaurantTabs/RestaurantTabs';
import { BasketContainer } from '../../containers/Basket/BasketContainer';
import { Outlet, useSearchParams } from 'react-router-dom';

export const Restaurants = ({ status }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  if (status === 'inProgress') {
    return <span>Loading...</span>;
  }
  if (status === 'failed') {
    return <span>Failed.</span>;
  }

  return (
    <div>
      <input
        value={searchParams.get('restaurantName') || ''}
        onChange={(event) =>
          setSearchParams({ restaurantName: event.target.value })
        }
      />
      <RestaurantTabsContainer />

      <Outlet />

      <BasketContainer />
    </div>
  );
};
