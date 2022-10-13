import React from 'react';
import { Tabs } from '../../components/Tabs/Tabs';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../store/restaurant/selectors';
import { RestaurantTabContainer } from '../RestaurantTab/RestaurantTab';

export const RestaurantTabsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <Tabs
      tabs={restaurantIds}
      renderTab={(id) => <RestaurantTabContainer key={id} id={id} />}
    />
  );
};
 