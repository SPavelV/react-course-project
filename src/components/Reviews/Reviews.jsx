import React from 'react';
import classnames from 'classnames';
import styles from './Reviews.module.css';
import { Review } from '../Review/Review';

export const Reviews = ({ reviews, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      {reviews &&
        reviews.map((review) => (
          <Review
            key={review.id}
            user={review.user}
            text={review.text}
            rating={review.rating}
          />
        ))}
    </div>
  );
};
