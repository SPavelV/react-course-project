import React from 'react';
import { useSelector } from 'react-redux';
import { Review } from '../../components/Review/Review';
import { selectReviewById } from '../../store/entities/review/selectors';

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, { id }));

  if (!review) return null;

  return (
    <Review
      userName={review.user}
      text={review.text}
      rating={review.rating}
      userId={review.userId}
    />
  );
};
