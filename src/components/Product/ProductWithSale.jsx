import React, { useMemo, useContext } from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { useCount } from '../../hooks/useCount';
import { ThemeContext } from '../../contexts/ThemeContext';

export const ProductWithSale = ({ name, price, className }) => {
  const { theme } = useContext(ThemeContext);
  let { count, decrement, increment } = useCount(0);

  const totalPrice = useMemo(() => {
    return count * price;
  }, [count, price]);

  if (!name) {
    return null;
  }

  return (
    <div className={classnames(styles.root, className)}>
      <span>{name}</span>
      <div className={styles.actions}>
        <button
          onClick={decrement}
          className={classnames({
            [styles.darkAction]: theme === 'dark',
            [styles.lightAction]: theme === 'light',
          })}
        >
          -
        </button>

        <span>{count}</span>

        <button
          className={classnames({
            [styles.darkAction]: theme === 'dark',
            [styles.lightAction]: theme === 'light',
          })}
          onClick={increment}
        >
          +
        </button>
      </div>
      <span>{totalPrice} р.</span>
    </div>
  );
};
