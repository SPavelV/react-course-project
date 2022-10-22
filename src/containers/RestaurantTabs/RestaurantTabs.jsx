import React from 'react';
import { Tabs } from '../../components/Tabs/Tabs';
import { useSelector } from 'react-redux';
import { selectRestaurantName } from '../../store/entities/restaurant/selectors';
import { RestaurantTabContainer } from '../RestaurantTab/RestaurantTab';
import { useSearchParams } from 'react-router-dom';

export const RestaurantTabsContainer = () => {
  const [searchParams] = useSearchParams();

  const restaurantIds = useSelector((state) =>
    selectRestaurantName(state, {
      name: searchParams.get('restaurantName') || '',
    })
  );

  if (!restaurantIds) return null;

  return (
    <Tabs
      tabs={restaurantIds}
      renderTab={(id) => <RestaurantTabContainer key={id} id={id} />}
    />
  );
};
