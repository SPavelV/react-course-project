import React, { useContext } from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { ThemeContext } from '../../contexts/ThemeContext';

export const ProductWithSale = ({
  count,
  decrement,
  increment,
  name,
  className,
  sum,
}) => {
  const { theme } = useContext(ThemeContext);

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
      <span>{sum} р.</span>
    </div>
  );
};
