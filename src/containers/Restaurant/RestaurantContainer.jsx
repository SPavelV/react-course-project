import React from 'react';
import { useSelector } from 'react-redux';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import { selectRestaurantById } from '../../store/restaurant/selectors';

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { id })
  );

  if (!restaurant?.name) {
    return null;
  }

  return <Restaurant name={restaurant.name} />;
};
