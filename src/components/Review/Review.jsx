import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { StarRating } from '../StarRating/StarRating';

export const Review = ({ className, userName, text, rating }) => {
  console.log('render Review');

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.user}>
        <div className={styles.name}>User: {userName}</div>
        rating
        <StarRating rating={rating} />
      </div>
      <div className={styles.comment}>Comment: {text}</div>
    </div>
  );
};
