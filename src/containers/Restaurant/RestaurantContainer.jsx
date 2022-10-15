import React from 'react';
import { useSelector } from 'react-redux';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import {
  selectRestaurantById,
  selectRestaurantRating,
} from '../../store/restaurant/selectors';

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { id })
  );

  const rating = useSelector((state) => selectRestaurantRating(state, { id }));

  if (!restaurant?.name) {
    return null;
  }

  return <Restaurant id={id} name={restaurant.name} rating={rating} />;
};
