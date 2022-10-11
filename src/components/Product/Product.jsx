import React, { useMemo } from 'react';
import styles from './Product.module.css';
import classnames from 'classnames';
import { useCount } from '../../hooks/useCount';

export const Product = ({ name, price, className }) => {
  let { count, decrement, increment } = useCount(0);

  const totalPrice = useMemo(() => {
    console.log('totalPrice :>> ', count * price);
    return count * price;
  }, [count, price]);

  if (!name) {
    return null;
  }

  return (
    <div className={classnames(styles.root, className)}>
      <span>{name}</span>
      <div className={styles.actions}>
        <button onClick={decrement}>-</button>

        <span>{count}</span>

        <button onClick={increment}>+</button>
      </div>
      <span>{totalPrice} р.</span>
    </div>
  );
};
