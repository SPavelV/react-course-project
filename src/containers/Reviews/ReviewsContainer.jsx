import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Reviews } from '../../components/Reviews/Reviews';
import { selectRestaurantReviewsById } from '../../store/entities/restaurant/selectors';

export const ReviewsContainer = ({ restaurantId, className }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { id: restaurantId })
  );

  if (!reviewIds) return null;

  return <Reviews ids={reviewIds} className={className} />;
};
