import React from 'react';
import classnames from 'classnames';
import styles from './Reviews.module.css';
import { NewReviewForm } from '../NewReviewForm/NewReviewForm';
import { ReviewContainer } from '../../containers/Review/ReviewContainer';

export const Reviews = ({ ids, className }) => {
  if (!ids) {
    return <div>No reviews</div>;
  }

  return (
    <div className={classnames(styles.root, className)}>
      <div>
        {ids.map((id) => (
          <ReviewContainer id={id} key={id} />
        ))}
      </div>
      <NewReviewForm />
    </div>
  );
};

export const ReviewsWithMemo = React.memo(Reviews);
