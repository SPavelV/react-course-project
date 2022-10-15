import React from 'react';
import { useSelector } from 'react-redux';
import { Review } from '../../components/Review/Review';
import { selectReviewById } from '../../store/entities/review/selector';

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, { id }));

  return (
    <Review
      userName={review.user}
      text={review.text}
      rating={review.rating}
      userId={review.userId}
    />
  );
};
