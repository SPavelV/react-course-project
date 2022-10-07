import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';

export const Review = ({ className, user, text, rating }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.user}>
        <span className={styles.name}>User: {user}</span>
        <span className={styles.rating}>Rating: {rating}</span>
      </div>
      <div className={styles.comment}>Comment: {text}</div>
    </div>
  );
};
