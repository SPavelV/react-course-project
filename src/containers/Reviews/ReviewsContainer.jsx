import React from 'react';
import { useSelector } from 'react-redux';
import { ReviewsWithMemo } from '../../components/Reviews/Reviews';
import { selectRestaurantReviewsById } from '../../store/restaurant/selectors';

export const ReviewsContainer = ({ restaurantId, className }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { id: restaurantId })
  );

  if (!reviewIds) return null;

  return <ReviewsWithMemo ids={reviewIds} className={className} />;
};
