import React from 'react';
import classnames from 'classnames';
import styles from './Reviews.module.css';
import { Review } from '../Review/Review';
import { NewReviewForm } from '../NewReviewForm/NewReviewForm';

export const Reviews = ({ reviews, className }) => {
  console.log('render Reviews');

  if (reviews.length === 0) {
    return <div>No reviews</div>;
  }
  return (
    <div className={classnames(styles.root, className)}>
      <div>
        {reviews &&
          reviews.map((review) => (
            <Review
              key={review.id}
              userName={review.user}
              text={review.text}
              rating={review.rating}
            />
          ))}
      </div>
      <NewReviewForm />
    </div>
  );
};
