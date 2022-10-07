import React, { useState } from 'react';
import styles from './Product.module.css';
import classnames from 'classnames';

export const Product = ({ name, className }) => {
  let [count, setCount] = useState(0);

  return (
    <div className={classnames(styles.root, className)}>
      <span>{name}</span>
      <div className={styles.actions}>
        <button onClick={() => setCount((currentState) => currentState  - 1)}>
          -
        </button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};
