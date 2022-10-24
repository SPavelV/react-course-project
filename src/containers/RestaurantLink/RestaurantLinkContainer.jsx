import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectRestaurantById } from '../../store/entities/restaurant/selectors';

export const RestaurantLinkContainer = ({ id }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { id })
  );

  if (!restaurant) return null;
  return <Link to={`/restaurants/${id}`}>{restaurant.name}</Link>;
};
