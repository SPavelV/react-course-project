import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Restaurant } from '../../components/Restaurant/Restaurant';

import {
  selectRestaurantById,
  selectRestaurantRating,
} from '../../store/entities/restaurant/selectors';
import { loadReviewByRestaurantIdIfNotExist } from '../../store/entities/review/thunks/loadReviewByRestaurantIdIfNotExist';
import { useParams } from 'react-router-dom';

export const RestaurantContainer = () => {
  const params = useParams();
  const id = params.restaurantId;
  const dispatch = useDispatch();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { id })
  );

  const rating = useSelector((state) => selectRestaurantRating(state, { id }));

  useEffect(() => {
    dispatch(loadReviewByRestaurantIdIfNotExist(id));
  }, [id]);

  if (!restaurant?.name) {
    return null;
  }

  return <Restaurant id={id} name={restaurant.name} rating={rating} />;
};
