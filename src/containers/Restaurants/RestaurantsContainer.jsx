import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Restaurants } from '../../components/Restaurants/Restaurants';
import { loadRestaurants } from '../../store/entities/restaurant/actions';

export const RestaurantsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  return <Restaurants />;
};
