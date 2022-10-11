import React from 'react';
import styles from './Product.module.css';
import classnames from 'classnames';
import { useCount } from '../../hooks/useCount';

export const Product = ({ name, className }) => {
  let { count, decrement, increment } = useCount(0);

  return (
    <div className={classnames(styles.root, className)}>
      <span>{name}</span>
      <div className={styles.actions}>
        <button onClick={decrement}>-</button>

        <span>{count}</span>

        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
