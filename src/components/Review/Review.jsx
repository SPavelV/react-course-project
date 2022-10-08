import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';

export const Review = ({ className, userName, text, rating }) => {
  console.log('render Review');

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.user}>
        <span className={styles.name}>User: {userName}</span>
        <span className={styles.rating}>Rating: {rating}</span>
      </div>
      <div className={styles.comment}>Comment: {text}</div>
    </div>
  );
};
