import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { StarRating } from '../StarRating/StarRating';
import { UserContainer } from '../../containers/User/UserContainer';

export const Review = ({ className, userId, text, rating }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.user}>
        <UserContainer id={userId} />
        rating
        <StarRating rating={rating} />
      </div>
      <div className={styles.comment}>Comment: {text}</div>
    </div>
  );
};
