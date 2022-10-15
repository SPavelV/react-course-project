import React from 'react';
import { Tabs } from '../../components/Tabs/Tabs';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../store/restaurant/selectors';
import { RestaurantTabContainer } from '../RestaurantTab/RestaurantTab';

export const RestaurantTabsContainer = ({ onTabSelect }) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  if (!restaurantIds) return null;

  return (
    <Tabs
      tabs={restaurantIds}
      renderTab={(id) => (
        <RestaurantTabContainer key={id} id={id} onTabSelect={onTabSelect} />
      )}
    />
  );
};
