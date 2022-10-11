import React from 'react';
import styles from './Product.module.css';
import classnames from 'classnames';

export const Product = ({ name, price, className }) => {
  if (!name) {
    return null;
  }

  return (
    <div className={classnames(styles.root, className)}>
      <span>{name}</span>
    </div>
  );
};
