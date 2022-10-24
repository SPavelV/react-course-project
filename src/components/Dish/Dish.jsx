import React from 'react';
import styles from './styles.module.css';

export const Dish = ({ name, price, ingredients }) => {
  return (
    <div className={styles.root}>
      <h4>Name: {name}</h4>
      <p>Price: {price}</p>
      <p>Ingredients:</p>
      <ul>
        {ingredients?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
