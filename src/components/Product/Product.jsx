import React from 'react';
import styles from './Product.module.css';
import classnames from 'classnames';

export const Product = ({ name, className }) => {
  let count = 0;
  return (
    <div className={classnames(styles.root, className)}>
      <span>{name}</span>
      <div className={styles.actions}>
        <button>+</button>
        <span>{count}</span>
        <button>-</button>
      </div>
    </div>
  );
};
