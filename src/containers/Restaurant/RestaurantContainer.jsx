import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import { loadReviews } from '../../store/entities/review/actions';

import {
  selectRestaurantById,
  selectRestaurantRating,
} from '../../store/entities/restaurant/selectors';

export const RestaurantContainer = ({ id }) => {
  const dispatch = useDispatch();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { id })
  );

  const rating = useSelector((state) => selectRestaurantRating(state, { id }));

  useEffect(() => {
    dispatch(loadReviews({ restaurantId: id }));
  }, [id]);

  if (!restaurant?.name) {
    return null;
  }

  return <Restaurant id={id} name={restaurant.name} rating={rating} />;
};
