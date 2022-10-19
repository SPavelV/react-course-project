import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Reviews } from '../../components/Reviews/Reviews';
import { selectRestaurantReviewsById } from '../../store/entities/restaurant/selectors';
import { loadUsersIfNotExist } from '../../store/entities/users/thunks/loadUsersIfNotExist';

export const ReviewsContainer = ({ restaurantId, className }) => {
  const dispatch = useDispatch();
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, { id: restaurantId })
  );

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, []);

  if (!reviewIds) return null;

  return <Reviews ids={reviewIds} className={className} />;
};
