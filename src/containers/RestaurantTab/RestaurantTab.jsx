import React from 'react';
import { Tab } from '../../components/Tab/Tab';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/restaurant/selectors';

export const RestaurantTabContainer = ({ id, onTabSelect }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { id })
  );

  if (!restaurant) return null;
  return (
    <Tab key={id} name={restaurant.name} onClick={() => onTabSelect(id)} />
  );
};
